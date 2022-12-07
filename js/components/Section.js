import Title from './Title.js';

const Section = (section) => {
  return `
    <section>
      ${Title(section.title)}
    </section>
  `
};

export default Section;