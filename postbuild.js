/* eslint-env node */
/* eslint-disable no-console */

const fs = require('fs')
const archiver = require('archiver')
const chalk = require('chalk')

let output = fs.createWriteStream('./dist/build.zip')
let archive = archiver('zip', {
  zlib: { level: 9 }, // set compression to best
})

const MAX = 13 * 1024 // 13kb

output.on('close', function() {
  const bytes = archive.pointer()
  let color = 'green'

  if (bytes > MAX) {
    color = 'red'
    console.error(chalk.red('⛔  Size overflow ⛔'))
  } else if (bytes > MAX * 0.9) {
    color = 'yellow'
    console.warn(chalk.yellow('⚠️  Approaching maximum size'))
  }

  const percent = `${Math.round((bytes * 100) / MAX)}%`
  const allBytes = `${bytes.toString()}/${MAX}`
  console.log(chalk[color](`${allBytes} total bytes (${chalk.bold(percent)})`))

  if (bytes > MAX) {
    process.exit(1)
  }
})

archive.on('warning', function(err) {
  if (err.code === 'ENOENT') {
    console.warn(err)
  } else {
    throw err
  }
})

archive.on('error', function(err) {
  throw err
})

archive.pipe(output)
archive.append(fs.createReadStream('./dist/index.html'), {
  name: 'i.html',
})

archive.finalize()
