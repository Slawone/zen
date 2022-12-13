/**
 * @param {object} item
 * @param {string} parrentClassName
 * @returns {string}
 */


const Menuitem = (item, parrentClassname) => {
  const className = parrentClassname ? parrentClassname : ''

  return `
    <li class="${parrentClassname}__item">
      <button data-btn="${item.target}">${item.data}</button>
    </li>
  `
};

export default Menuitem;