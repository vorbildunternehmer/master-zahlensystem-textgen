'use strict'

const RandomGenerator = require('../../helpers/RandomGenerator')

const options = [
  [
    'hell',
    'dunkel',
    'düster',
    'gespenstisch',
    'einladend',
    'prachtvoll',
    'beängstigend',
    'rätselhalft freundlich',
    'traurig'
  ],
  [
    'passt nicht so ganz',
    'ist merkwürdig',
    'gibt mir Rätsel auf',
    'macht mir Angst',
    'erstaunt mich',
    'verrwirrt mich',
    'erschreckt mich',
    'finde ich echt lustig',
    'ist super skuril'
  ]
]

const generateText = function () {
  this.output = 'Ich befinde mich in einem neuen Raum.';
  this.output += ' Der Raum wirkt ' + new RandomGenerator(options[0]).output + '.'
  this.output += ' Mir fällt dabei direkt etwas auf: Eine Sache in diesem Raum ' + new RandomGenerator(options[1]).output + '.'
}

module.exports = generateText
