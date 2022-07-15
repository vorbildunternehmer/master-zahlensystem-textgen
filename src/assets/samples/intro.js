'use strict'

const RandomGenerator = require('../helpers/RandomGenerator')

const options = [
  [
    'merkwürdige',
    'sonderliche',
    'besondere',
    'ausgefallene',
    'prägende',
    'einfallsreiche',
    'skurile',
    'einprägende',
    'unwirkliche',
    'fantasievolle',
    'wachrüttelnde'
  ]
]


const text = 'Die ' + new RandomGenerator(options[0]).output + ' Geschichte über die Zahl {ZAHL}.';

module.exports = text
