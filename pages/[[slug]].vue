<script setup>
const editor = ref(null)
const editing = ref(false)
const saving = ref(false)
const password = ref('')
const slug = useRoute().params.slug || 'index'
const page = useState(`page-${slug}`)
const { loggedIn, fetch: refreshSession, clear } = useUserSession()

// Fetch the page once
if (!page.value) {
  page.value = await $fetch(`/api/pages/${slug}`)
}

defineOgImage({
  component: 'Page',
  title: page.value.parsed.data.title || 'Missing title',
  description: page.value.parsed.data.description || 'Missing description'
})

async function editMode() {
  if (!loggedIn.value) {
    return
  }
  editing.value = true
  await nextTick()
  editor.value.focus()
  autogrow()
}

function autogrow() {
  if (!editor.value) return
  editor.value.style.height = '5px'
  editor.value.style.height = `${editor.value.scrollHeight}px`
}

function save() {
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

async function login() {
  $fetch('/api/login', {
    method: 'POST',
    body: { password: password.value }
  })
  .then(refreshSession)
  .catch(() => alert('Wrong password'))
}
</script>

<template>
  <Head>
    <Html lang="en" />
    <Title>{{ page.parsed.data.title || 'Atinotes' }}</Title>
    <Meta name="description" :content="page.parsed.data.description || 'A notes taking app on the edge'" />
  </Head>
  <div class="page" @dblclick="editMode">
    {{  page.parsed.data }}
    <form v-if="editing" class="editor-wrapper" @submit.prevent="save">
      <textarea v-model="page.body" ref="editor" @blur="save" @input="autogrow" />
      <button type="submit">{{ saving ? 'Saving' : 'Save' }}</button>
    </form>
    <MDCRenderer v-else :body="page.parsed.body" class="body" />
  </div>
  <p class="edit" v-if="loggedIn">
    <span @click="editMode">{{ editing ? 'Editing' : 'Edit' }} this page</span> ·
    <span @click="clear">logout</span>
  </p>
  <form class="login" v-else @submit.prevent="login">
    <input type="password" v-model="password" placeholder="Password" />
    <button type="submit">Login</button>
  </form>
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
      &.shiki code .line:empty {
        display: none;
      }
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
.edit {
  text-align: center;
  font-size: 12px;
  cursor: pointer;
  color: #999;
  & span:hover {
    color: #777;
  }
}
.login {
  text-align: center;
  font-size: 12px;
  margin-top: 10px;
  & input {
    border: #bbb 1px solid;
    padding: 5px 10px;
    background: #eee;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    &:focus ,&:hover {
      background: white;
      border-color: #ccc;
      outline: none;
    }
  }
  & button {
    border: #bbb 1px solid;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    background: #eee;
    padding: 5px 10px;
    border-left: none;
    &:hover {
      background: white;
    }
  }
}
</style>