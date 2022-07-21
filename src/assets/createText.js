'use strict'

const roomText = function (word) {

  this.replaceRoom = function (replace, text) {
    Object.keys(replace).forEach(function (key) {
      text = text.split('{' + key + '}').join(replace[key])
    })
    return text
  }

  let tempRoom = []
    let intro = require('./samples/room/intro')
    let eyes = require('./samples/room/eyes')
    let hands = require('./samples/room/hands')
    let location = require('./samples/room/location')
    let noise = require('./samples/room/noise')

    tempRoom[0] = this.replaceRoom({ 'WORT': word }, new intro().output)
    tempRoom[1] = this.replaceRoom({ 'WORT': word }, new location().output)
    tempRoom[2] = this.replaceRoom({ 'WORT': word }, new hands().output)
    tempRoom[3] = this.replaceRoom({ 'WORT': word }, require('./samples/room/word'))
    tempRoom[4] = this.replaceRoom({ 'WORT': word }, new eyes().output)
    tempRoom[5] = this.replaceRoom({ 'WORT': word }, new noise().output)
    tempRoom[6] = this.replaceRoom({ 'WORT': word }, require('./samples/room/exit'))

    this.output = tempRoom
}

const textGenerator = function (number, words) {

  this.words = words.split(' ')
  this.count = this.words.length

  this.rawText = []
  this.rawText[0] = require('./samples/intro')
  this.rawText[1] = require('./samples/location')
  this.rawText[2] = require('./samples/entrance')



  this.getText = function () {

  this.words.forEach(function (word) {
    let roomGeneratedText = new roomText(word)
    this.rawText = this.rawText.concat(roomGeneratedText.output)
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

  this.getText()

}

module.exports = textGenerator
