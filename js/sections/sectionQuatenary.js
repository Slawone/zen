import data from '../data/data.js';

const section = document.createElement('section');
const sectionTitle = document.createElement('h2');
const sectionCopy = document.createElement('p');
const sectionButton = document.createElement('button');

sectionTitle.textContent = `${data.sectionQuaternary.title.data}`;
sectionCopy.textContent = `${data.sectionQuaternary.texts}`;
sectionButton.textContent = `${data.sectionQuaternary.button.data}`;

section.append(sectionTitle, sectionCopy, sectionButton);

export default section;