## Report https://github.com/webpack/webpack/issues/11429

```
$ yarn
$ yarn build
```

->>>>>>>>>>>

```bash
yarn run v1.22.5
$ webpack
<w> [webpack.cache.PackFileCacheStrategy] Serializing big strings (125kiB) impacts deserialization performance (consider using Buffer instead and decode when needed)
Hash: a6fa727013aa00a40743
Version: webpack 5.0.0-beta.29
Time: 3007 ms
Built at: 2020-09-04 22:36:15
asset main.js 125 KiB [emitted] [minimized] (name: main) 1 related asset
Entrypoint main = main.js
./src/index.js 251 bytes [built]
./node_modules/react/index.js 189 bytes [built]
./node_modules/react-dom/index.js 1.32 KiB [built]
./node_modules/react/cjs/react.production.min.js 8.64 KiB [built]
./node_modules/react-dom/cjs/react-dom.production.min.js 168 KiB [built]
./node_modules/object-assign/index.js 2.17 KiB [built]
./node_modules/scheduler/index.js 197 bytes [built]
./node_modules/scheduler/cjs/scheduler.production.min.js 6.93 KiB [built]
✨  Done in 4.51s.
```
