'use strict'

const textGenerator = function (number, words) {

  this.words = words.split(' ')
  this.count = this.words.length

  this.rawText = []
  this.rawText[0] = require('./samples/intro')
  this.rawText[1] = require('./samples/location')
  this.rawText[2] = require('./samples/entrance')



  this.getText = function () {

  this.words.forEach(function (word) {
    let tempRoom = []
    tempRoom[0] = this.replaceRoom({ 'WORT': word }, require('./samples/room/intro'))
    tempRoom[1] = this.replaceRoom({ 'WORT': word }, require('./samples/room/location'))
    tempRoom[2] = this.replaceRoom({ 'WORT': word }, require('./samples/room/hands'))
    tempRoom[3] = this.replaceRoom({ 'WORT': word }, require('./samples/room/word'))
    tempRoom[4] = this.replaceRoom({ 'WORT': word }, require('./samples/room/eyes'))
    tempRoom[5] = this.replaceRoom({ 'WORT': word }, require('./samples/room/noise'))
    tempRoom[6] = this.replaceRoom({ 'WORT': word }, require('./samples/room/exit'))
    this.rawText = this.rawText.concat(tempRoom)
  }.bind(this))

const outro = require('./samples/outro')
this.rawText.push(outro)

const solution = require('./samples/solution')
this.rawText.push(solution)

  const txt = []
  this.rawText.forEach(function (t) {
    txt.push(
      t.split('{ZAHL}').join(number).split('{WORTZAHL}').join(this.count).split('{WORTE}').join(words)
    )
  }.bind(this))

  this.text = txt
  }

  this.replaceRoom = function (replace, text) {
    Object.keys(replace).forEach(function (key) {
      text = text.split('{' + key + '}').join(replace[key])
    })
    return text
  }

  this.getText()

}

module.exports = textGenerator
