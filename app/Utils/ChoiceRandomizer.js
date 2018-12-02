export const ChoiceRandomizer = {

  _choices: ['rock', 'paper', 'scissors'],

  _randomize() {

    return Math.floor(Math.random() * this._choices.length)
  },

  choice() {

    return this._choices[ChoiceRandomizer._randomize()]
  }
  
}