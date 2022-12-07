import data from '../data/data.js';

const section = document.createElement('section');
const sectionImage = document.createElement('img');

sectionImage.src = `${data.sectionQuinary[0].source}`;

section.append(sectionImage);

export default section;