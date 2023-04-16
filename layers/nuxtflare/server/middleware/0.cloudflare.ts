// Useful to expose CloudFlare env variables that comes from event.context
export default eventHandler(event => {
  setEnv(event)

  console.log('globalThis.__env__', globalThis.__env__)
  console.log('env', env('ATINOTES'))

  // if (!process.dev) {
  //   globalThis.ATINOTES = env('ATINOTES')
  // }
  // console.log('midd')
})