/**
 * @param {object} button 
 * @param {string} parrentClassName 
 * @returns {string}
 */

const Button = (button, parrentClassName) => {
  const className = parrentClassName ? `${parrentClassName}__button` : 'button';

  return `
    <button class="${className}" data-btn="${button.target ? button.target : ''}">
      ${button.data}
    </button>
  `
};

export default Button;