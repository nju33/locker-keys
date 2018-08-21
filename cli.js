#!/usr/bin/env node
const lockerKeys = require('./dist').default;

(async () => {
  await lockerKeys.process(__dirname);
})()
  .catch(err => {
    console.error(err);
  })
