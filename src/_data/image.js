const axios = require('axios')

module.exports = async () => {
  const result =  await axios.get('https://i.picsum.photos/id/1003/1181/1772.jpg?hmac=oN9fHMXiqe9Zq2RM6XT-RVZkojgPnECWwyEF1RvvTZk')

  return result.data
}
