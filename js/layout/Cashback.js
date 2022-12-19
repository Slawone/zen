import Title from '../components/Title.js';
import Text from '../components/Text.js';

/**
 * @param {object} section;
 * @returns {string};
 */

const Cashback = (section) => {

  if (!Object.keys.length) return '';

  const className = section.name;

  return `
    <section class="${className}">
      <div class="container">
        <div class="${className}__wrapper">
          ${section.title ? Title(section.title, className) : ''}
          ${section.texts?.map(text => Text(text, className)).join('') ?? ''}
          <button data-btn="order">${section.buttonText ? section.buttonText : 'Order'}</button>
        </div>
      </div>         
    </section>
  `
};

export default Cashback;