#!/usr/bin/env node
const { readFileSync: read } = require('fs');
const { resolve } = require('path');
const { homedir } = require('os');

const fling = require('../lib/fling');

const host = 'https://owo.whats-th.is';
const token = read(resolve(homedir(), '.config', '.owo-token'), 'utf8').trim();

if (process.argv.length === 3) {
  const path = process.argv[2];

  fling(path, { token })
    .then(resp => console.log(`${host}/${resp.files[0].url}`))
    .catch(err => console.error(`\u001b[31m${err}\u001b[0m`));
} else {
  console.error('usage: fling [path]');
}
