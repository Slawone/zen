import Image from './Image.js';
import Text from './Text.js';

/**
 * @param {object} info;
 * @returns {string};
 */

const Info = (info) => {
  return `
    <div class="info">
      ${Image(info.footerLogo)}
      ${info.texts.map(text => Text(text)).join('')}
      <a href="#">${Image(info.copyright)}</a>
    </div>
  `
};

export default Info;