export default class Poutine {
  constructor(element) {
    this.element = element;
    this.types = this.element.querySelectorAll('.button');
    this.selectedType = '';
    this.init();
  }

  init() {
    for (let i = 0; i < this.types.length; i++) {
      const bouton = this.types[i];
      bouton.addEventListener('click', this.selectType.bind(this));
    }
  }

  selectType(event) {
    if (!event.currentTarget.classList.contains('is-active')) {
      for (let i = 0; i < this.types.length; i++) {
        const bouton = this.types[i];
        bouton.classList.remove('is-active');
      }
    }

    event.currentTarget.classList.toggle('is-active');
    if (event.currentTarget.classList.contains('is-active')) {
      this.element.classList.add('is-active');
    } else {
      this.element.classList.remove('is-active');
    }

    this.selectedType = event.currentTarget.innerHTML;
    this.updatePhoto();
  }

  updatePhoto() {
    const image = this.element.querySelector('.poutine__image');

    if (this.element.classList.contains('is-active')) {
      image.src = `assets/images/${this.selectedType}.png`;
      image.classList.add('is-active');
    } else {
      image.src = 'assets/images/poutine.png';
      image.classList.remove('is-active');
    }
  }
}
