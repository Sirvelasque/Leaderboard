import './style.css';
import App from '../modules/scores.js';

const refresh = document.querySelector('#refresh-btn');
const input = document.querySelector('#submit');
const score = document.getElementById('score');
const name = document.getElementById('name');
const app = new App();
app.refresh();

input.addEventListener('click', (e) => {
  e.preventDefault();
  app.submit(name.value, score.value);
  score.value = '';
  name.value = '';
});

refresh.addEventListener('click', () => {
  app.refresh();
});