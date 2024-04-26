<script setup>
const { loggedIn, fetch: refreshSession, clear } = useUserSession()
const toast = useToast()
const loginModal = ref(false)
const logging = ref(false)
const password = ref('')

useSeoMeta({
  ogSiteName: 'Atinotes',
  ogType: 'website',
  twitterCard: 'summary_large_image',
  twitterSite: 'atinux'
})

async function login() {
  if (!password.value) return
  logging.value = true
  await $fetch('/api/login', {
    method: 'POST',
    body: { password: password.value }
  })
    .then(async () => {
      await refreshSession()
      loginModal.value = false
    })
    .catch(err => toast.add({
      title: 'Wrong password',
      description: err.data?.message,
      color: 'red'
    }))
  password.value = ''
  logging.value = false
}
</script>

<template>
  <Head>
    <Html lang="en" />
  </Head>
  <NuxtLoadingIndicator />
  <UHeader>
    <template #logo>
      Atinotes
    </template>
    <template #right>
      <UColorModeButton />
      <UButton
        icon="i-simple-icons-github"
        to="https://github.com/atinux/atinotes"
        target="_blank"
        color="gray"
        variant="ghost"
      />
      <UButton
        v-if="loggedIn"
        color="gray"
        @click="clear"
      >
        Logout
      </UButton>
      <UButton
        v-else
        color="gray"
        @click="loginModal = true"
      >
        Login
      </UButton>
    </template>
  </UHeader>
  <UMain>
    <UContainer>
      <NuxtPage />
    </UContainer>
  </UMain>
  <UModal v-model="loginModal">
    <UCard>
      <UForm
        class="space-y-2"
        @submit="login"
      >
        <UFormGroup label="Password">
          <UInput
            v-model="password"
            type="password"
            icon="i-heroicons-lock-closed"
          />
        </UFormGroup>
        <UButton
          type="submit"
          :disabled="password.length < 1"
          :loading="logging"
        >
          Login
        </UButton>
      </UForm>
    </UCard>
  </UModal>
  <UNotifications />
</template>
