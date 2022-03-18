import { indexOf } from 'lodash';
import player from './player.js';
import display from './ui.js'

export default class score {
  static scores = [];
  static high = 0;

  static addScore(score, name){
    let lower=0;
    if (!localStorage.getItem('scores')) {
      localStorage.setItem('scores', JSON.stringify(this.scores));
    }

    
    this.scores.forEach((actual) =>{
      // console.log(score)
      // console.log(actual)
      // console.log(lower)
      if(parseInt(score)>parseInt(actual) && parseInt(lower) <= parseInt(actual)){
        lower = actual;
      }
    });
    if (parseInt(score) >= parseInt(this.high)){
      this.scores.splice(this.scores.indexOf(parseInt(this.high)),0,score);
      this.high = parseInt(score);
    }else {
      this.scores.splice(this.scores.indexOf(parseInt(lower)),0,score);
    }

    if(this.scores.length > 1){
      display.display(parseInt(score), name, parseInt(lower));
    }else {
      display.firstdisplay(parseInt(score), name)
    }
    this.storage();
  }

  static refresh(){
    scores = [];
    this.storage;
    display.remove();
  }

  static storage(){
    localStorage.setItem('tasks', JSON.stringify(this.scores));
  }
}