import data from './data/data.js';
import Header from './layout/Header.js';
import Section from './layout/Section.js';
import Clients from './layout/Clients.js';

const $root = document.querySelector('#root');

$root.insertAdjacentHTML('beforeend', Header(data.header));
$root.insertAdjacentHTML('beforeend', Section(data.download));
$root.insertAdjacentHTML('beforeend', Section(data.warranty));
$root.insertAdjacentHTML('beforeend', Section(data.care));
$root.insertAdjacentHTML('beforeend', Section(data.cashback));
$root.insertAdjacentHTML('beforeend', Clients(data.clients));