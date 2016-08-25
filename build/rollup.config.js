const babel = require('rollup-plugin-babel')

export default {
  entry: './src/index.js',
  plugins: [
    babel()
  ],
  // treeshake: false,
  targets: [
    {
      dest: './dist/cli/bundle.umd.js',
      format: 'umd',
      moduleName: 'rollupDemo'
    },
    {
      dest: './dist/cli/bundle.cjs.js',
      format: 'cjs'
    },
    {
      dest: './dist/cli/bundle.es.js',
      format: 'es'
    }
  ]
}
