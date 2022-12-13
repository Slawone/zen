/**
 * @param {object} item
 * @param {string} parrentClassName
 * @returns {string}
 */

import Button from './Button.js';

const Menuitem = (item, parrentClassname) => {
  const className = parrentClassname ? parrentClassname : ''

  return `
    <li class="${parrentClassname}__item">
      ${Button(item)}
    </li>
  `
};

export default Menuitem;