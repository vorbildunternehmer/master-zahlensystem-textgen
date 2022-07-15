'use strict'

const TextGen = require('./assets/createText')

const majorTextgen = function (number, words) {
  this.result = new TextGen(number, words).text
}


module.exports = { majorTextgen }
