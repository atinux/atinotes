export default defineEventHandler(async (event) => {
  const keys = await useStorage('notes').getKeys() 
  const settings = await useStorage('notes').getItem('settings')
  return await useStorage('notes').getItem('index')
})
