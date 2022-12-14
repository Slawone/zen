/**
 * @param {object} link;
 * @param {string} parrentClassName;
 * @returns {string};
 */

const ListItem = (link, parrentClassName) => {

  const className = parrentClassName ? parrentClassName : '';

  return `
    <li class="${className}__item">
      <a class="${className}__link" href="${link.url}">${link.data}</a>
    </li>
  `;
};

export default ListItem;