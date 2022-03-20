export default class Ui {
  static display(score, name, shots) {
    const container = document.getElementById('app');
    const row = document.createElement('li');
    row.classList.add('item');
    if (shots === 1) {
      row.classList.add('gold');
    }
    if (shots === 2) {
      row.classList.add('silver');
    }
    if (shots === 3) {
      row.classList.add('bronce');
    }
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