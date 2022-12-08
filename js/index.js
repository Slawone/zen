import data from './data/data.js';
import Section from './components/Section.js';

const $root = document.querySelector('#root');

$root.insertAdjacentHTML('beforeend', Section(data.sectionPrimary));
$root.insertAdjacentHTML('beforeend', Section(data.sectionSecondary));
$root.insertAdjacentHTML('beforeend', Section(data.sectionTertiary));