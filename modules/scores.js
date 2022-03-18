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
    const play = new player(score, name);
    
    this.scores.forEach((actual) =>{
      // console.log(score)
      // console.log(actual)
      // console.log(lower)
      if(parseInt(score)>parseInt(actual.score) && parseInt(lower) <= parseInt(actual.score)){
        lower = actual.score;
      }
    });
    let indexh = -1;
    let indexl = -1;
    for(let i = 0; i < this.scores.length; i+=1) {
      if (this.scores[i].score == this.high) {
          indexh = i;
          break;
      }
  }
  console.log(lower);
  for(let i = 0; i < this.scores.length; i+=1) {
    if (parseInt(this.scores[i].score) == parseInt(lower)) {
        indexl = i;
        break;
    }
  }
  console.log(indexl);
  console.log(indexh);
    if (parseInt(score) > parseInt(this.high)){
      this.scores.splice(indexh+1,0,play);
      this.high = parseInt(score);
    }else {
      this.scores.splice(indexl+1,0,play);
    }

    if(this.scores.length > 1){
      display.display(parseInt(score), name, parseInt(lower));
    }else {
      display.firstdisplay(parseInt(score), name)
    }
    this.storage();
  }

  static refresh(){
    this.scores = [];
    this.storage;
    display.remove();
  }

  static init(){
    this.scores.slice().reverse().forEach((e) =>{
      display.display(e.score, e.name);
    })
  }

  static loadDataFromStorage() {
    const data = JSON.parse(localStorage.getItem('scores'));
    if (data && data !== '') {
      this.scores = data.map((value) => new player(value.score, value.name));
    }
    this.init();
  }

  static storage(){
    localStorage.setItem('scores', JSON.stringify(this.scores));
  }
}