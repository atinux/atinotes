export default eventHandler(async (event) => {
  return useStorage('notes').getKeys()
})