import Column from '../components/Column.js';
import Info from '../components/Info.js';

/**
 * @param {object} footer;
 * @returns {string};
 */

const Footer = (footer) => {

  const className = footer.name;

  return `
    <footer class="${className}" style="background: #ccc;">
      <div class="container">
        <div class="${className}__wrapper">
          ${footer.columns.map(column => Column(column, className)).join('')}
          ${Info(footer.info)}
        </div>
      </div>
    </footer>
  `;
};

export default Footer;