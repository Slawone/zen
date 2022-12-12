/**
 * @param {array} items 
 * @returns {string}
 */

const Menuitem = (items) => {
  return `
    ${items.map(item => {
      return `
        <li>
          <button>${item.data}</button>
        </li>
      `
    }).join('')}
  `
};

export default Menuitem;