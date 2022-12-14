import ZenIcon from '../ui/ZenIcon.js';

/**
 * @returns {string};
 */

const Logo = () => {
  return `
    <button class="logo" data-btn="root">
      ${ZenIcon()}
    </button>
  `
};

export default Logo;