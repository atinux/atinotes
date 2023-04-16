// Useful to expose CloudFlare env variables that comes from event.context
export default eventHandler(event => {
  setEnv(event)

  if (!process.dev) {
    globalThis.ATINOTES = env('ATINOTES')
  }
})