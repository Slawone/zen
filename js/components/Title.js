/**
 * @param {object} title; 
 * @param {string} parrentClassName;
 * @returns {string};
 */

const Title = (title, parrentClassName) => {
  
  const className = parrentClassName
    ? `${parrentClassName}__title`
    : 'title';

  switch(title.priority) {
    case 1: return `<h1 class="${className}">${title.data}</h1>`
      break;
    case 2: return `<h2 class="${className}">${title.data}</h2>`
      break;
    case 3: return `<h3 class="${className}">${title.data}</h3>`
      break;
    case 4: return `<h4 class="${className}">${title.data}</h4>`
      break;
    case 5: return `<h5 class="${className}">${title.data}</h5>`
      break;
    default: return `<h6 class="${className}">${title.data}</h6>`
      break;
  }
};

export default Title;