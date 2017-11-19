# fling

Another tiny client for [@whats-this](https://whats-th.is/).

## install

```sh
~> npm i slice/fling
~> yarn add slice/fling
```

## use

```js
const fling = require('fling');

const options = {
  token: 'XXXX-XXXX-XXXX-XXXX-XXXX'
};

// ①: Usage with a file on disk
fling('my_file.txt', options)
  .then(r => console.log(r.files[0].url)) // -> xxxxxx.txt
  .catch(err => ...);

// ②: Usage with a buffer
const buffer = getABufferSomehow();
fling(buffer, options)
  .then(...)
  .catch(...);

// ③: Usage in an `AsyncFunction`
const task = async () => {
  await fling(..., options);
};
```

## cli

A tiny CLI tool is provided for convenience. Place your token in a file at
`~/.config/owo-token` (no JSON or anything, **just** the token in the file).

```sh
~> fling file.txt
https://owo.whats-th.is/xxxxxx.txt
```
