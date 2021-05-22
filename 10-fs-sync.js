const { readFileSync, writeFileSync, writeFile } = require('fs')

console.log('started reading files')
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

writeFileSync('./content/result.txt', `the result is: ${first} , ${second}`, {
  flag: 'a',
})
console.log('done with this task')
console.log('starting next task')
