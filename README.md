# fling

Another tiny client for @whats-this.

## install

```sh
~> npm i slice/fling
~> yarn add slice/fling 
```

## use

```js
const fling = require('fling')

fling('my_file.txt')
  .then(r => console.log(r.files[0].url)) // -> xxxxxx.txt
  .catch(err => ...)

fling(myBuffer)
  .then(...)
  .catch(...)
```
