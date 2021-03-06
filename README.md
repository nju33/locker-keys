# locker-keys

[![TypeScript](https://badges.frapsoft.com/typescript/code/typescript.svg?v=101)](https://github.com/ellerbrock/typescript-badges/)
[![locker-keys](https://img.shields.io/npm/v/locker-keys.svg)](https://www.npmjs.com/package/locker-keys)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

## install

```bash
yarn add (-D) locker-keys
```

## Examples

Before try, `locker.json` to create on current directory, following like.

```json
{
  "foo": {
    "bar": {
      "baz": "baz",
      "qux": "qux"
    }
  },
  "hoge": {
    "fuga": "fuga",
    "piyo": "piyo"
  }
}
```

### On Cli

```bash
npx locker-keys foo bar baz
# baz
npm locker-keys foo bar
# locker-keys foo bar
# 
# Commands:
#   locker-keys foo bar baz
#   locker-keys foo bar qux
# 
# Options:
#   --version  Show version number                                       [boolean]
#   --help     Show help                                                 [boolean]
npx locker-keys hoge piyo
# piyo
```

### Node

When making a private package etc.

```js
#!/usr/bin/env node
const lockerKeys = require('./dist').default;

(async () => {
  await lockerKeys.process(__dirname);
})()
  .catch(err => {
    console.error(err);
  })
```
