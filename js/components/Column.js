/**
 * @param {object} column;
 * @param {string} parrentClassName;
 * @returns {string};
 */

import Title from './Title.js';
import List from './List.js'

const Column = (column, parrentClassName) => {

  const className = parrentClassName ? `${parrentClassName}__column` : 'column';

  return `
    <div class="${className}">
      ${Title(column.title, parrentClassName)}
      ${List(column.links)}
    </div>
  `

};

export default Column;