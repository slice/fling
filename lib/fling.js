const snek = require('snekfetch');
const { readFile } = require('fs');
const { promisify } = require('util');

const version = require('../package.json').version;
const endpoints = {
  files: 'https://api.awau.moe/upload/pomf'
};

module.exports = fling;
async function fling(file, options) {
  if (!options.token) {
    throw new Error('No token was provided.');
  }

  let filename;
  if (typeof file === 'string') {
    filename = file;
    file = await promisify(readFile)(file);
  }

  let req = snek
    .post(`${endpoints.files}?key=${encodeURIComponent(options.token)}`)
    .set('User-Agent', `fling (https://github.com/slice/fling', ${version}`)
    .attach('files[]', file, filename);

  return (await req).body;
}
