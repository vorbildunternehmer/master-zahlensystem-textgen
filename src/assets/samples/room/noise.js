'use strict'

const RandomGenerator = require('../../helpers/RandomGenerator')

const options = [
  [
    'sehr',
    'total',
    'etwas',
    'ein bisschen',
    'ganz leicht',
    'absolut'
  ],
  [
    'streng',
    'animalisch',
    'anregend',
    'bestialisch',
    'bitter',
    'stechend',
    'dezent',
    'durchdringend',
    'blumig',
    'faul',
    'fade',
    'fruchtig',
    'herb',
    'lieblich',
    'minzig',
    'wunderbar',
    'wohltuend',
    'frisch',
    'abstoßend',
    'ekelhaft'
  ]
]

const generateText = function () {
  this.output = 'Ich halte meine Nase daran. {WORT} riecht ' + new RandomGenerator(options[0]).output + ' ' + new RandomGenerator(options[1]).output + '.';
}
module.exports = generateText
