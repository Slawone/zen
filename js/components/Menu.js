/**
 * @param {array} lists
 * @param {string} parrentClassname
 * @returns {string}
 */

import MenuItem from "./MenuItem.js";

const Menu = (lists, parrentClassname) => {

  const className = parrentClassname
    ? `${parrentClassname}__list` 
    : 'list';

  return `
    <ul class="${className}">
      ${MenuItem(lists)}
    </ul>
  `
};

export default Menu;