import Title from './Title.js';
import Text from './Text.js';
import Image from './Image.js';

const Section = (section) => {
  return `
    <section>
      ${Title(section.title)}
      ${section.texts.map(text => Text(text)).join('')}
      ${Image(section.image)}
    </section>
  `
};

export default Section;