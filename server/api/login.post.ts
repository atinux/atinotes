export default eventHandler(async (event) => {
  if (!process.env.PASSWORD) {
    throw createError({
      statusCode: 500,
      message: 'Missing PASSWORD en variable'
    })
  }
  const { password } = (await readBody(event)) || {}
  console.log(password, process.env.PASSWORD)
  if (password !== process.env.PASSWORD) {
    throw createError({
      statusCode: 401,
      message: 'Wrong password'
    })
  }
  await setUserSession(event, {
    user: { admin: true }
  })
  return { ok: true }
})