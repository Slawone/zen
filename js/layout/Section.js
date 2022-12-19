import Title from '../components/Title.js';
import Text from '../components/Text.js';
import Image from '../components/Image.js';
import AppleIcon from '../ui/AppleIcon.js';
import GoogleIcon from '../ui/GoogleIcon.js';

/**
 * @param {object} section;
 * @returns {string};
 */

const Section = (section) => {
  if (!Object.keys(section).length) return '';

  const className = section.name;

  return `
    <section class="${className}">
      ${section.title ? Title(section.title, className) : ''}
      ${section.texts ? section.texts.map(text => Text(text, className)).join('') : ''}
      ${section.image ? Image(section.image, className) : ''}
      ${section.buttons ? section.buttons.map(button => {
        return `
          <a href="${button.url}" target="_blank">
            ${button.type === 'apple' ? AppleIcon() : GoogleIcon()}
          </a>
        `;
      }).join('') : ''}
    </section>
  `
};

export default Section;