/**
 * @param {array} links;
 * @param {string} parrentClassName;
 * @returns {string};
 */

import ListItem from './ListItem.js';

const List = (links, parrentClassName) => {

  const className = parrentClassName ? `${parrentClassName}__list` : 'list';

  return `
    <ul class="${className}">
      ${links.map(link => ListItem(link, className)).join('')}
    </ul>
  `;
};

export default List;