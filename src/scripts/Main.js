import Icons from './utils/Icons.js';
import Chef from './Chef.js';

// La ligne suivante devrait être au TOUT début du init() du Main

class Main {
  constructor() {
    this.init();
  }

  init() {
    Icons.load();

    const chefs = document.querySelectorAll('.chef');
    for (let i = 0; i < chefs.length; i++) {
      const chef = chefs[i];
      new Chef(chef);
    }
  }
}

new Main();
