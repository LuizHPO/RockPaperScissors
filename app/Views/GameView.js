import { View } from '../Views/View.js'

export class GameView extends View{

  constructor(element) {
    super(element)
  }

  _initialTemplate() {
    this._element.innerHTML = `<p>Choose one!</p>`
  }

  _template(model) {
    const {userChoice, compChoice, winner} = model

    this._element.innerHTML = `
      <p>
        User pick <span class="pick">${userChoice}</span>
        and Computer pick <span class="pick">${compChoice}</span>
      </p>
      <p>${winner ? winner + ' won' : 'Draw'}</p>
    `
  }

}