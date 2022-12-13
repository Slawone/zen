/**
 * @param {object} image 
 * @param {string} parrentClassName 
 * @returns {string}
 */

const Image = (image, parrentClassName) => {  

  if(!Object.keys(image).length) {
    return '';
  };

  const className = parrentClassName
    ? `${parrentClassName}__image`
    : 'image'; 

  return `
    <img
      class="${className}"
      src="${image.source}"
      alt="${image.alternate}"
      style="width: 100%"
    >
  `
};

export default Image;