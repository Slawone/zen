import data from '../data/data.js';

const section = document.createElement('section');
const title = document.createElement('h2');
const copyPrimary = document.createElement('p');
const copySecondary = document.createElement('p');
const copyTertiary = document.createElement('p');
const image = document.createElement('img');

title.textContent = data.sectionTertiary.title.data;

copyPrimary.textContent = data.sectionTertiary.texts[0];
copySecondary.textContent = data.sectionTertiary.texts[1];
copyTertiary.textContent = data.sectionTertiary.texts[2];

image.src = data.sectionTertiary.image.source;
image.alt = data.sectionTertiary.image.alternate;
image.style.width = '100%';

section.append(title, copyPrimary, copySecondary, copyTertiary, image);

export default section;