export default class Ui {

  static display(score, name) {
    const container = document.getElementById('app');
    const row = document.createElement('li');
    row.classList.add('item');
    row.innerHTML = `${name}: <div class='scored'>${score}</div>`;
    container.appendChild(row);
  }

  static remove() {
    const container = document.getElementById('app');
    const items = document.querySelectorAll('.item');
    items.forEach((item) => {
      container.removeChild(item);
    });
  }
}