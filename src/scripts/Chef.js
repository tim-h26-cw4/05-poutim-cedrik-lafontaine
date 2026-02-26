import Poutine from './Poutine.js';

export default class Chef {
  constructor(element) {
    this.element = element;
    this.menu = [];
    this.container = this.element.querySelector(
      "[data-component='Container_Order']",
    );
    this.init();
  }

  init() {
    const poutines = document.querySelectorAll('.poutine');
    for (let i = 0; i < poutines.length; i++) {
      const element = poutines[i];
      const poutine = new Poutine(element);
      this.menu.push(poutine);
    }

    const bouton = this.element.querySelector(
      "[data-component='Bouton_Order']",
    );
    if (bouton) {
      bouton.addEventListener('click', this.sendOrder.bind(this));
    }
  }

  sendOrder() {
    let nmbPoutines = 0;
    for (let i = 0; i < this.menu.length; i++) {
      const poutine = this.menu[i].element;

      if (poutine.classList.contains('is-active')) {
        nmbPoutines += 1;
      }
    }

    this.container.innerHTML = '';
    const p = document.createElement('p');
    p.innerHTML = `Nombre total de poutine(s) : ${nmbPoutines}`;
    this.container.appendChild(p);
  }
}
