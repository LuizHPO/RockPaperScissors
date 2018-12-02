import { View } from '../Views/View.js'

export class ScoreView extends View{

  constructor(element) {
    super(element)
  }

  _initialTemplate() {

    this._element.innerHTML = `<span>0:0</span>`
  }

  _template(model) {

    this._element.innerHTML = `
      <span id="user-score">${model.userScore}</span>:<span id="comp-score">${model.compScore}</span>
    `
  }
}