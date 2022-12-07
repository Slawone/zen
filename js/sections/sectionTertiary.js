import data from '../data/data.js';

const section = document.createElement('section');
const sectionTitle = document.createElement('h2');
const sectionCopy = document.createElement('p');
const sectionImage = document.createElement('img');

sectionTitle.textContent = `${data.sectionTertiary.title.data}`;
sectionCopy.textContent = `${data.sectionTertiary.texts}`;
sectionImage.src = `${data.sectionTertiary.image.source}`;
sectionImage.alt = `${data.sectionTertiary.image.alternate}`;
sectionImage.style.width = '100%';

section.append(sectionTitle, sectionCopy, sectionImage);

export default section;