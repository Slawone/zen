import Title from '../components/Title.js';
import Text from '../components/Text.js';
import Image from '../components/Image.js';
import Button from '../components/Button.js';

const Section = (section) => {
  const className = section.name;

  return `
    <section class="${className}">
      ${section.title ? Title(section.title, className) : ''}
      ${section.texts ? section.texts.map(text => Text(text, className)).join('') : ''}
      ${section.image ? Image(section.image, className) : ''}
      ${section.button ? Button(section.button, className) : ''}
    </section>
  `
};

export default Section;