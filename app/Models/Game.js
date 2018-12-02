export class Game {

  constructor(userChoice, computerChoice) {

    this._userChoice = userChoice
    this._computerChoice = computerChoice
    this._choices = this._userChoice[0] + this._computerChoice[0]

    this._result = {
      isUserWinner: this._hadUserWon(),
      isCompWinner: this._hadCompWon(),
      isDraw: this._hadDraw()
    }

    Object.freeze(this)
  }
  
  _hadUserWon() {
    const userWinConditions = ['rs', 'pr', 'sp']

    return userWinConditions.includes(this._choices)
  }
  
  _hadCompWon() {
    const compWinConditions = ['sr', 'rp', 'ps']

    return compWinConditions.includes(this._choices)
  }

  _hadDraw() {
    return !this._hadCompWon() && !this._hadUserWon()
  }

  get result() {
    return this._result
  }

  get winner() {
    
    if (this._hadUserWon()) return 'User'
    if (this._hadCompWon()) return 'Computer'
  }

  get userChoice() {
    return this._userChoice
  }

  get compChoice() {
    return this._computerChoice
  }
}