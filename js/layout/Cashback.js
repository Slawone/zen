import Title from '../components/Title.js';
import Text from '../components/Text.js';
import Button from '../components/Button.js';

/**
 * @param {object} cashback;
 * @returns {string};
 */

const Cashback = (cashback) => {

  if (!Object.keys.length) {
    return '';
  };

  const className = cashback.name;

  return `
    <section class="${className}">
      <div class="container">
        <div class="${className}__wrapper">
          ${cashback.title ? Title(cashback.title, className) : ''}
          ${cashback.texts ? cashback.texts.map(text => Text(text, className)).join('') : ''}
          ${cashback.button ? Button(cashback.button, className) : ''} 
        </div>
      </div>         
    </section>
  `
};

export default Cashback;