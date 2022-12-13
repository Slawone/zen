/**
 * @param {string} text 
 * @param {string} parrentClassName 
 * @returns {string}
 */

const Text = (text, parrentClassName) => {
  
  const className = parrentClassName 
    ? `${parrentClassName}__copy` 
    : 'copy';

  return `
    <p class="${className}">
      ${text}
    </p>
  `
};

export default Text;