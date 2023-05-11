export default defineEventHandler(async (event) => {
  return useStorage('notes').getKeys()
})