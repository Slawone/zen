import data from './data/data.js';
import Section from './components/Section.js';
import Clients from './components/Clients.js';

const $root = document.querySelector('#root');

$root.insertAdjacentHTML('beforeend', Section(data.download));
$root.insertAdjacentHTML('beforeend', Section(data.warranty));
$root.insertAdjacentHTML('beforeend', Section(data.care));
$root.insertAdjacentHTML('beforeend', Clients(data.clients));