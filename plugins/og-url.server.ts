export default defineNuxtPlugin(() => {
  const url = useRequestURL()
  
  updateSiteConfig({
    url: url.origin,
  })
})