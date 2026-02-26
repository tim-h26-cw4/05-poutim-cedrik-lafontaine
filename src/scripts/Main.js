import Icons from './utils/Icons.js';
import Chef from './Chef.js';

// La ligne suivante devrait être au TOUT début du init() du Main

class Main {
  constructor() {
    this.init();
  }

  init() {
    Icons.load();
    new Chef();
  }
}

new Main();
