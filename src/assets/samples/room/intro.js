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


let text = 'Ich befinde mich in einem neuen Raum.';
text += ' Der Raum wirkt ' + new RandomGenerator(options[0]).output + '.'
text += ' Mir fällt dabei direkt etwas auf: Eine Sache in diesem Raum ' + new RandomGenerator(options[1]).output + '.'

module.exports = text
