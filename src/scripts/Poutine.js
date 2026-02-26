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
    for (let i = 0; i < this.types.length; i++) {
      const bouton = this.types[i];
      bouton.classList.remove('is-active');
    }

    event.currentTarget.classList.add('is-active');
    this.selectedType = event.currentTarget.innerHTML;
    this.updatePhoto();
  }

  updatePhoto() {
    this.element.classList.add('is-active');
    const image = this.element.querySelector('.poutine__image');
    image.classList.add('is-active');
    image.src = `assets/images/${this.selectedType}.png`;
  }
}
