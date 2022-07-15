'use strict'

const RandomGenerator = require('../helpers/RandomGenerator')

const options = [
  [
    'in einem alten Schulgebäude',
    'auf einer Weltraumstation',
    'in einer riesigen Halle',
    'in einer prachtvollen Ritterburg',
    'in einem modernen Hochhaus'
  ]
]

let text = 'Die Geschichte über die Zahl {ZAHL} findet ' + new RandomGenerator(options[0]).output + ' statt.';
text += ' Hier sollen sich merkwürdige Dinge abspielen. Da ich abenteuerlustig bin und einen offenen Geist besitze, wage ich mich in das Unbekannte, das Spannende, das Verrückte. Ich stelle mir in Gedanken das Gebäude vor und was mich erwarten kann. Dann wage ich den ersten Schritt. Etwas mulmig ist mir aber schon...'

module.exports = text
