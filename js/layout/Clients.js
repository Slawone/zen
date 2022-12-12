import Image from '../components/Image.js';

const Clients = (section) => {
  const className = section.name;

  return `
    <section class="${className}">
      <div class="container">
        <div class="${className}__wrapper">
          ${section.images ? section.images.map(image => Image(image, className)).join('') : ''}
        </div>
      </div>
    </section>
  `
};

export default Clients;