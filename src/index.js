import _ from 'lodash';
import './style.css';
import scores from '../modules/scores.js'

const refresh = document.querySelector('#refresh-btn');
const input = document.querySelector('#submit');
const score = document.getElementById('score');
const name = document.getElementById('name');

input.addEventListener('click', (e) =>{
  e.preventDefault();
  scores.addScore(score.value, name.value);
});

input.addEventListener('click', (e) => {

});