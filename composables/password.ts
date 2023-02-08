export function usePassword () {
  const password = ref('')

  if (process.client) {
    password.value = window.localStorage.getItem('atinotes-password') || ''
  }

  watch(password, () => {
    window.localStorage.setItem('atinotes-password', password.value)
  })

  return password
}