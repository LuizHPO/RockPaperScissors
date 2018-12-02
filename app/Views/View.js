export class View {

  constructor(element) {
    this._element = document.querySelector(element)
  
    this._initialTemplate()
  }

  update(model) {

    this._template(model)
  }
}