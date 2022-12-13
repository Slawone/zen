/**
 * @param {array} lists
 * @param {string} parrentClassName
 * @returns {string}
 */

import MenuItem from "./MenuItem.js";

const Menu = (items, parrentClassname) => {

  const className = parrentClassname
    ? `${parrentClassname}__list` 
    : 'menu';

  return `
    <ul class="${className}">
      ${items.map(item => MenuItem(item, className)).join('')}
    </ul>
  `
};

export default Menu;