import Image from './Image.js';
import Text from './Text.js';

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