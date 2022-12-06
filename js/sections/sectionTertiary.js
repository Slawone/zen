const section = document.createElement('section');
const sectionTitle = document.createElement('h2');
const sectionCopy = document.createElement('p');
const sectionImage = document.createElement('img');

sectionTitle.textContent = 'ZEN Care';
sectionCopy.textContent = 'Shopping online is usually a delightful experience. Until it\'s not.';
sectionImage.src = './img/3.jpg';
sectionImage.alt = 'care';
sectionImage.style.width = '100%';

section.append(sectionTitle, sectionCopy, sectionImage);

export default section;