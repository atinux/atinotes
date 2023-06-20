export default eventHandler(async (event) => {
  return useKV('notes').getKeys()
})