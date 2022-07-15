'use strict'

const RandomGenerator = function (array) {

  this.key = Math.round(Math.random() * (array.length - 1))

  this.output = array[this.key]
}

module.exports = RandomGenerator
