#!/usr/bin/env node
const lockerKeys = require('./dist').default;

(async () => {
  await lockerKeys.process(process.cwd());
})()
  .catch(err => {
    console.error(err);
  })
