import data from '../data/data.js';

const section = document.createElement('section');
const title = document.createElement('h2');
const copyPrimary = document.createElement('p');
const copySecondary = document.createElement('p');
const copyTertiary = document.createElement('p');
const button = document.createElement('button');

title.textContent = data.sectionQuaternary.title.data;

copyPrimary.textContent = data.sectionQuaternary.texts[0];
copySecondary.textContent = data.sectionTertiary.texts[1];
copyTertiary.textContent = data.sectionTertiary.texts[2];

button.textContent = data.sectionQuaternary.button.data;

section.append(title, copyPrimary, copySecondary, copyTertiary, button);

export default section;