import display from './ui.js';
const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/cheXh8TzhG7oVxtMiAk6/scores/';

export default class App {
  static scores = [];

  static high = 0;

  static addScore(score, name) {
  }

  submit = async (user, points) => {
    await fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        user: `${user}`,
        score: `${points}`,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
  };

  async refresh() {
    this.scores = [];
    console.log("works");
    this.response = await fetch(url).then((response) => response.json());
    this.scores = this.response.result;
    display.remove();
    this.init();
  }

  init() {
    this.scores.forEach((e) => {
      display.display(e.score, e.user);
    });
  }

}