import data from '../data/data.js';

const section = document.createElement('section');
const title = document.createElement('h2');
const copyPrimary = document.createElement('p');
const copySecondary = document.createElement('p');
const image = document.createElement('img');

title.textContent = data.sectionSecondary.title.data;

copyPrimary.textContent = data.sectionSecondary.texts[0];
copySecondary.textContent = data.sectionSecondary.texts[1];

image.src = data.sectionSecondary.image.source;
image.alt = data.sectionSecondary.image.alternate;
image.style.width = '100%';

section.append(title, copyPrimary, copySecondary, image);

export default section;