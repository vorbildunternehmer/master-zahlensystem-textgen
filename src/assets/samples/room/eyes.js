'use strict'

const RandomGenerator = require('../../helpers/RandomGenerator')

const options = [
  [
    'blutrot',
    'himmelblau',
    'sonnengelb',
    'baumgrün',
    'matscholiv',
    'quietschpink',
    'nachtschwarz',
    'knallorange',
    'holzbraun'
  ],
  [
    'akkurat angemalt',
    'sorgfältig lackiert',
    'schnell besprüht',
    'hastig bepinselt',
    'beklebt',
    'beschmiert',
    'betupft'
  ]
]


let text = 'Ich fokussiere meinen Blick. {WORT} ist in der Farbe ' + new RandomGenerator(options[0]).output + ' ' + new RandomGenerator(options[1]).output + ' worden.';

module.exports = text
