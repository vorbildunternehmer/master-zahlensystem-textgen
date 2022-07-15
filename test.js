'use strict'

const major = require('./src/index.js')

major.majorTextgen(process.env.NUMBER, process.env.WORD)
console.log(major.result)
