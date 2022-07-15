'use strict'

const RandomGenerator = require('../../helpers/RandomGenerator')

const options = [
  [
    'An der Decke',
    'An der rechten Wand',
    'An der linken Wand',
    'Auf dem Fußboden',
    'Mitten im Raum',
    'Rechts von mir',
    'Links von mir',
    'Direkt vor meiner Nase',
    'In Brusthöhe',
    'Unter mir',
    'Über mir',
    'Nur zwei Meter entfernt'
  ],
  [
    'steht ein Wort mit zittriger Handschrift geschrieben',
    'schwebt mir etwas entgegen',
    'funkelt etwas in läuchtenden Farben',
    'hat jemand eine Botschaft hinterlassen',
    'pulsiert etwas leicht',
    'erkenne ich etwas flauschig-wirkendes',
    'hat sich etwas versteckt'
  ]
]


let text = new RandomGenerator(options[0]).output + ' ' + new RandomGenerator(options[1]).output + '.';
text += ' Was kann das nur sein?'

module.exports = text
