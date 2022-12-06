import sectionPrimary from './sections/sectionPrimary.js';
import sectionSecondary from './sections/sectionSecondary.js';
import sectionTertiary from './sections/sectionTertiary.js';

const $root = document.querySelector('#root');

$root.append(sectionPrimary, sectionSecondary, sectionTertiary);