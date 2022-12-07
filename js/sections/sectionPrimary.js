import data from '../data/data.js';

const section = document.createElement('section');
const title = document.createElement('h1');
const copy = document.createElement('p');
const image = document.createElement('img');

title.textContent = data.sectionPrimary.title.data;

copy.textContent = data.sectionPrimary.texts;

image.src = data.sectionPrimary.image.source;
image.alt = data.sectionPrimary.image.alternate;
image.style.width = '100%'; 

section.append(title, copy, image);

export default section;