const { readFile, writeFile } = require('fs')

// console.log('started reading files')

const firstProm = new Promise((resolve, reject) => {
  readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
      reject(err)
    }
    resolve(result)
  })
})
const secondProm = new Promise((resolve, reject) => {
  readFile('./content/second.txt', 'utf8', (err, result) => {
    if (err) {
      reject(err)
    }
    resolve(result)
  })
})
