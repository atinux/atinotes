export default eventHandler(async (event) => {
  const { pathname } = event.context.params || {}
  if (!pathname) {
    throw createError({
      status: 400,
      message: 'Invalid path'
    })
  }

  return hubBlob().serve(event, pathname)
})
