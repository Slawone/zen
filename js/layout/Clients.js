import Image from '../components/Image.js';

/** 
 * @param {object} section;
 * @returns {string};
 */

const Clients = (section) => {

  if (!Object.keys(section).length) return '';

  const className = section.name;

  return `
    <section class="${className}">
      <div class="container">
        <div class="${className}__wrapper">
          ${section.clients?.map(client => Image(client, className)).join('') ?? ''}
        </div>
      </div>
    </section>
  `;
};

export default Clients;