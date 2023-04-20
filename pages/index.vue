<script setup>
const editor = ref(null)
const editing = ref(false)
const saving = ref(false)
const page = useState('page')
const password = usePassword()

// Fetch the page on SSR
if (!page.value) {
  page.value = await $fetch('/api/pages/index')
  page.value.parsed = await parseMarkdown(page.value.body)
}

// Re-parse on hydration to enable shiki highlight for code blocks
if (page.value && process.client) {
  onMounted(async () => {
    page.value.parsed = await parseMarkdown(page.value.body)
  })
}

async function editMode() {
  if (!password.value) {
    password.value = prompt('What is the password?')
    if (!password.value) {
      alert('Password cannot be empty')
      return
    }
  }
  editing.value = true
  await nextTick()
  editor.value.focus()
  autogrow()
}

function updatePassword() {
  password.value = prompt('What is the password?')
}

function autogrow() {
  if (!editor.value) return
  editor.value.style.height = '5px'
  editor.value.style.height = `${editor.value.scrollHeight}px`
}

function save() {
  if (!editing.value || saving.value) return
  saving.value = true
  $fetch('/api/pages/index', {
    method: 'PUT',
    headers: {
      password: password.value
    },
    body: page.value.body
  }).then(async () => {
    page.value.parsed = await parseMarkdown(page.value.body)
    editing.value = saving.value = false
  }).catch(err => {
    editing.value = saving.value = false
    alert(err.data.message)
  })
}
</script>

<template>
  <Head>
    <Html lang="en" />
    <Title>{{ page.parsed.title || 'Atinotes' }}</Title>
    <Meta name="description" :content="page.parsed.description || 'A notes taking app on the edge'" />
    <OgImageDynamic background="linear-gradient(to bottom, white, #eeeeee)" titleFontSize="100px" descriptionFontSize="50px" />
  </Head>
  <p class="edit"><span @click="editMode">{{ editing ? 'Editing' : 'Edit' }} this page</span></p>
  <div class="page" @dblclick="editMode">
    <form v-if="editing" class="editor-wrapper" @submit.prevent="save">
      <textarea v-model="page.body" ref="editor" @blur="save" @input="autogrow" />
      <button type="submit">{{ saving ? 'Saving' : 'Save' }}</button>
    </form>
    <ContentRendererMarkdown v-else :value="page.parsed" class="body" />
  </div>
  <p class="password" v-show="password"><span @click="updatePassword">Update password</span></p>
</template>

<style lang="postcss">
.page {
  padding: 20px;
  max-width: 800px;
  margin: auto;
  background-color: white;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.1);
  transition: all 0.2s;
  &:hover {
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1);
  }
  .body {
    h1:first-child {
      margin-top: 0;
    }
    h2 a, h3 a, h4 a, h5 a, h6 a {
      text-decoration: none;
      color: inherit;
    }
    pre {
      padding: 10px;
      border: 1px #ddd solid;
      border-radius: 5px;
      background: rgb(243, 243, 243);
    }
    p code {
      padding: 2px 6px;
      background: rgb(243, 243, 243);
      border-radius: 5px;
    }
    a {
      color: blue;
    }
  }
}
.editor-wrapper {
  input {
    width: 100%;
  }
  button {
    width: 100%;
    border-width: 0;
    height: 30px;
    background: #eee;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
      background: rgb(242, 242, 242);
    }
  }
  textarea {
    width: 100%;
    min-height: 200px;
    height: 100%;
    border-width: 0;
    outline: none;
    resize: none;
  }
}
.edit,
.password {
  text-align: center;
  font-size: 12px;
  cursor: pointer;
  color: #999;
  &:hover {
    color: #777;
  }
}
</style>