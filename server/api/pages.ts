export default eventHandler(async (event) => {
  return hubKV().keys()
})