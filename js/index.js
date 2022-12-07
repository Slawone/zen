import sectionPrimary from './sections/sectionPrimary.js';
import sectionSecondary from './sections/sectionSecondary.js';
import sectionTertiary from './sections/sectionTertiary.js';
import sectionQuaternary from './sections/sectionQuatenary.js';
import sectionQuinary from './sections/sectionQuinary.js';

const $root = document.querySelector('#root');

$root.append(sectionPrimary, sectionSecondary, sectionTertiary, sectionQuaternary, sectionQuinary);