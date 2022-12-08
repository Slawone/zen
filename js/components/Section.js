import Title from './Title.js';
import Text from './Text.js';
import Image from './Image.js';

const Section = (section) => {
  const className = section.name;

  return `
    <section class="${className}">
      ${Title(section.title, className)}
      ${section.texts.map(text => Text(text, className)).join('')}
      ${Image(section.image, className)}
    </section>
  `
};

export default Section;