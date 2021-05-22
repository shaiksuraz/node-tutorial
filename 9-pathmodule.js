const path = require('path')

const pathSep = path.sep
console.log(pathSep)

const basePath = path.join(path.sep, 'content', 'subfolder', 'test.txt')
console.log(basePath)

const basefileName = path.basename(basePath)
console.log(basefileName)

const absolutepath = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolutepath)
