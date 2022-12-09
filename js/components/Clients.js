import Image from './Image.js';

const Clients = (section) => {
  const className = section.name;

  return `
    <section class="${className}">
      ${section.images.map(image => Image(image, className)).join('')}
    </section>
  `
};

export default Clients;

/*
<section class="${className}">
  ${section.images.map(image => Image(image, className))}
</section>
*/