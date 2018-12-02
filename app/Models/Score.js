export class Score {

  constructor() {
    this._userScore = 0
    this._compScore = 0
  }

  incrementWinnerScore(winner) {
    
    if(winner === 'Computer')
      return this._compScore++
    if(winner === 'User')
      return this._userScore++
  }

  get userScore() {
    return this._userScore
  }

  get compScore() {
    return this._compScore
  }
}