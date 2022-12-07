import data from '../data/data.js';

const section = document.createElement('section');
const sectionTitle = document.createElement('h1');
const sectionCopy = document.createElement('p');
const sectionImage = document.createElement('img');

sectionTitle.textContent = `${data.sectionPrimary.title.data}`;
sectionCopy.textContent = `${data.sectionPrimary.texts}`;
sectionImage.src = `${data.sectionPrimary.image.source}`;
sectionImage.alt = `${data.sectionPrimary.image.alternate}`;
sectionImage.style.width = '100%'; 

section.append(sectionTitle, sectionCopy, sectionImage);

export default section;