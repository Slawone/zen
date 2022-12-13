import Logo from '../components/Logo.js';
import MoonIcon from '../ui/MoonIcon.js';
import BurgerIcon from '../ui/BurgerIcon.js';
import Menu from '../components/Menu.js';

/**
 * @param {object} header 
 * @returns {string}
 */

const Header = (header) => {
  const className = header.name;
  
  return `
    <header class="${className}">
      <div class="container">
        <div class="${className}__wrapper">
          <nav class="${className}__nav">
            ${Logo()}
            ${Menu(header.navigations)}
          </nav>
          <button class="theme" data-btn="theme">
            ${MoonIcon()}
          </button>
          <button class="burger" data-btn="burger">
            ${BurgerIcon()}
          </button>
        </div>
      </div>
    </header>
  `
};

export default Header;