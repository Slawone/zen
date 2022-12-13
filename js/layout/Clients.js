import Image from '../components/Image.js';

/** 
 * @param {object} section;
 * @returns {string};
 */

const Clients = (section) => {
  const className = section.name;

  return `
    <section class="${className}">
      <div class="container">
        <div class="${className}__wrapper">
          ${section.clients ? section.clients.map(client => Image(client, className)).join('') : ''}
        </div>
      </div>
    </section>
  `;
};

export default Clients;