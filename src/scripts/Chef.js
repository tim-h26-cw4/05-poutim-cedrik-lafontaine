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
    const poutines = this.element.querySelectorAll('.poutine');
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
    this.container.innerHTML = '';
    this.createHeader();

    let nmbPoutines = 0;
    for (let i = 0; i < this.menu.length; i++) {
      const poutine = this.menu[i];

      if (poutine.element.classList.contains('is-active')) {
        nmbPoutines += 1;
        this.createListItem(nmbPoutines, poutine.selectedType);
      }
    }

    this.createFooter(nmbPoutines);
  }

  createHeader() {
    const h2 = document.createElement('h2');
    h2.innerHTML = 'Voici le résumé de votre commande :';
    this.container.appendChild(h2);
  }

  createListItem(index, name) {
    const p = document.createElement('p');
    p.innerHTML = `Poutine #${index} - ${name}`;
    this.container.appendChild(p);
  }

  createFooter(count) {
    const p = document.createElement('p');
    p.innerHTML = `Nombre total de poutine(s) : ${count}`;
    this.container.appendChild(p);
  }
}
