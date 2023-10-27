<script setup>
const editor = ref(null)
const editing = ref(false)
const saving = ref(false)
const password = ref('')
const slug = useRoute().params.slug || 'index'
const page = useState(`page-${slug}`)
const { loggedIn } = useUserSession()

// Fetch the page once
if (!page.value) {
  page.value = await $fetch(`/api/pages/${slug}`)
}

useSeoMeta({
  titleTemplate: '%s | Atinotes',
  title: () => page.value.parsed.data?.title || 'Missing title',
  description: () => page.value.parsed.data?.description || 'Missing description',
  ogTitle: () => (page.value.parsed.data?.title || 'Missing title') + ' | Atinotes'
})

defineOgImage({
  component: 'Page',
  title: page.value.parsed.data?.title || 'Missing title',
  description: page.value.parsed.data?.description || 'Missing description'
})

async function editMode () {
  if (!loggedIn.value) {
    return
  }
  editing.value = true
  await nextTick()
  editor.value.focus()
  autogrow()
}

function autogrow () {
  if (!editor.value) return
  editor.value.style.height = '5px'
  editor.value.style.height = `${editor.value.scrollHeight}px`
}

function save () {
  if (!editing.value || saving.value) return
  saving.value = true
  $fetch(`/api/pages/${slug}`, {
    method: 'PUT',
    body: page.value.body
  }).then(async ({ parsed }) => {
    page.value.parsed = parsed
    editing.value = saving.value = false
  }).catch(err => {
    editing.value = saving.value = false
    alert(err.data.message)
  })
}
</script>

<template>
  <UPage>
    <template #right>
      <UDocsToc :links="page.parsed?.toc?.links">
        <template v-if="loggedIn" #bottom>
          <UButton v-if="!editing" color="gray" @click="editMode">
            Edit this page
          </UButton>
        </template>
      </UDocsToc>
    </template>
    <UPageHeader v-if="!editing" :title="page.parsed?.data?.title" :description="page.parsed?.data?.description" @dblclick="editMode" />
    <UPageBody prose @dblclick="editMode">
      <UForm v-if="editing" class="editor-wrapper" @submit="save">
        <textarea ref="editor" v-model="page.body" @blur="save" @input="autogrow" />
        <UButton type="submit">
          {{ saving ? 'Saving' : 'Save' }}
        </UButton>
      </UForm>
      <MDCRenderer v-else :body="page.parsed.body" class="body" />
    </UPageBody>
  </UPage>
</template>

<style lang="postcss" scoped>
textarea {
  width: 100%;
  min-height: 200px;
  height: 100%;
  border-width: 0;
  outline: none;
  resize: none;
}
</style>