import { View } from '../Views/View.js'

export class GameView extends View{

  constructor(element) {
    super(element)
  }

  _initialTemplate() {

    this._element.innerHTML = `<p>Choose one!</p>`
  }

  _template(model) {

    this._element.innerHTML = `
      <p>
        You pick <span class="pick">${model.userChoice}</span>
        and Computer pick <span class="pick">${model.compChoice}</span>
      </p>
      <p>${model.winner ? model.winner + ' won' : 'Draw'}</p>
    `
  }

}