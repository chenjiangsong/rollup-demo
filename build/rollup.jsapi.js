var rollup = require('rollup')
var babel = require('rollup-plugin-babel')

rollup.rollup({
  entry: './src/index.js',
  plugins: [
    babel()
  ]
}).then(function(bundle) {
  bundle.write({
    format: 'umd',
    moduleName: 'rollupDemo',
    dest: './dist/jsapi/bundle.jsapi.js'
  })
})
