export default defineEventHandler(async (event) => {
  return await useStorage('notes').getItem('index')
})
