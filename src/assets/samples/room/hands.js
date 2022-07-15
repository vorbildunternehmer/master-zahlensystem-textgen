'use strict'

const RandomGenerator = require('../../helpers/RandomGenerator')

const options = [
  [
    'spitz',
    'wabbelig',
    'hart',
    'weich',
    'flauschig',
    'porös',
    'scharfkantig',
    'fragil',
    'zerbrechlich',
    'stabil und fest'
  ]
]


let text = 'Ich versuche es vorsichtig zu ertasten. Es scheint sehr ' + new RandomGenerator(options[0]).output + ' zu sein.';

module.exports = text
