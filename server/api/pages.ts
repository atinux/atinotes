export default eventHandler(async () => {
  return hubKV().keys()
})
