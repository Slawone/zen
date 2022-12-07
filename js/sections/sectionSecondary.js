import data from '../data/data.js';

const section = document.createElement('section');
const sectionTitle = document.createElement('h2');
const sectionCopy = document.createElement('p');
const sectionImage = document.createElement('img');

sectionTitle.textContent = `${data.sectionSecondary.title.data}`;
sectionCopy.textContent = `${data.sectionSecondary.texts}`;
sectionImage.src = `${data.sectionSecondary.image.source}`;
sectionImage.alt = `${data.sectionSecondary.image.alternate}`;
sectionImage.style.width = '100%';

section.append(sectionTitle, sectionCopy, sectionImage);

export default section;