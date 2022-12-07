import data from '../data/data.js';

const section = document.createElement('section');
const sectionImage = document.createElement('img');
const sectionImage1 = document.createElement('img');
const sectionImage2 = document.createElement('img');
const sectionImage3 = document.createElement('img');
const sectionImage4 = document.createElement('img');
const sectionImage5 = document.createElement('img');
const sectionImage6 = document.createElement('img');
const sectionImage7 = document.createElement('img');

sectionImage.src = data.sectionQuinary.images[0].source;
sectionImage.alt = data.sectionQuinary.images[0].alternate;

sectionImage1.src = data.sectionQuinary.images[1].source;
sectionImage1.alt = data.sectionQuinary.images[1].alternate;

sectionImage2.src = data.sectionQuinary.images[2].source;
sectionImage2.alt = data.sectionQuinary.images[2].alternate;

sectionImage3.src = data.sectionQuinary.images[3].source;
sectionImage3.alt = data.sectionQuinary.images[3].alternate;

sectionImage4.src = data.sectionQuinary.images[4].source;
sectionImage4.alt = data.sectionQuinary.images[4].alternate;

sectionImage5.src = data.sectionQuinary.images[5].source;
sectionImage5.alt = data.sectionQuinary.images[5].alternate;

sectionImage6.src = data.sectionQuinary.images[6].source;
sectionImage6.alt = data.sectionQuinary.images[6].alternate;

sectionImage7.src = data.sectionQuinary.images[7].source;
sectionImage7.alt = data.sectionQuinary.images[7].alternate;

section.append(sectionImage, sectionImage1, sectionImage2, sectionImage3, sectionImage4, sectionImage5, sectionImage6, sectionImage7);

export default section;