const snek = require('snekfetch')
const { readFile } = require('fs')
const { promisify } = require('util')

const endpoints = {
  files: 'https://api.awau.moe/upload/pomf'
}

module.exports = fling
async function fling(file, options) {
  let filename
  if (typeof file === 'string') {
    filename = file
    file = await promisify(readFile)(file)
  }

  let req = snek.post(`${endpoints.files}?key=${encodeURIComponent(options.token)}`)
    .attach('files[]', file, filename)

  return (await req).body
}
