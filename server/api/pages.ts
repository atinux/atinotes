import { kv } from 'hub:kv'

export default eventHandler(async () => {
  return kv.keys()
})
