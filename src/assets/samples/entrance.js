'use strict'

const RandomGenerator = require('../helpers/RandomGenerator')

const options = [
  [
    'nur schwer',
    'ganz leicht',
    'automatisch',
    'mit lautem gequietsche'
  ],
  [
    'vorsichtig',
    'beschwingt',
    'energisch'
  ]
]

let text = 'Die Eingangstür öffnet sich ' + new RandomGenerator(options[0]).output + '.';
text += ' Ich trete ' + new RandomGenerator(options[1]).output +  ' ein.'
text += ' Es scheint alles sehr verwinkelt. Trotzdem kann ich erkennen, dass {WORTZAHL} Räume vor mir liegen.'

module.exports = text
