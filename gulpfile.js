var gulp = require('gulp')
var fse = require('fs-extra')
var rollup = require('rollup').rollup
var babel = require('rollup-plugin-babel')

gulp.task('rollup', function() {
  rollup({
    entry: './src/index.js',
    plugins: [
      babel()
    ]
  }).then(function(bundle) {
    var code = bundle.generate({
      format: 'umd',
      moduleName: 'rollupDemo'
    }).code

    fse.outputFile('./dist/gulp/bundle.gulp.js', code, function(err) {
      if (err) return console.log(err)
      console.log(blue('bundle.gulp.js') + ' ' + getSize(code))
    })
  })
})

function blue (str) {
  return '\x1b[1m\x1b[34m' + str + '\x1b[39m\x1b[22m'
}

function getSize (code) {
  return (code.length / 1024).toFixed(2) + 'kb'
}
