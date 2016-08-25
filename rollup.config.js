// const rollup = require('rollup')
const babel = require('rollup-plugin-babel')

export default {
  entry: './src/index.js',
  plugins: [
    babel({
      exclude: 'node_modules/**',
      // presets: [ "es2015-rollup" ]
    })
  ],
  targets: [
    {
      dest: './dist/test.js',
      format: 'umd',
      moduleName: 'rollupDemo'
    }
  ]
}
