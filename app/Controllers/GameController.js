import { Game } from '../Models/Game.js'
import { GameView } from '../Views/GameView.js'
import { Score } from '../Models/Score.js'
import { ChoiceRandomizer } from '../Utils/ChoiceRandomizer.js'
import { ScoreView } from '../Views/ScoreView.js';

export class GameController {

  constructor() {

    const $ = document.querySelector.bind(document)
    this._rockElement = $('#rock')
    this._paperElement = $('#paper')
    this._scissorElement = $('#scissors')

    this._gameView = new GameView('#resultView')
    
    this._score = new Score
    this._scoreView = new ScoreView('#scoreView')

    this._init()
  }
  
  _init() {
    
    this._rockElement.onclick = e => this._initGame('rock')
    this._paperElement.onclick = e => this._initGame('paper')
    this._scissorElement.onclick = e => this._initGame('scissors')
  }

  _initGame(userChoice) {
    
    let game = new Game(userChoice , ChoiceRandomizer.choice())
    this._gameView.update(game)

    this._score.incrementWinnerScore(game.winner)
    this._scoreView.update(this._score)
  }

}