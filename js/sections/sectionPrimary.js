const section = document.createElement('section');
const sectionTitle = document.createElement('h1');
const sectionCopy = document.createElement('p');
const sectionImage = document.createElement('img');

sectionTitle.textContent = 'Peaceful shopping mindful money';
sectionCopy.textContent = 'See how we can help with making your shopping experience and money management more ZEN.';
sectionImage.src = './img/1.jpg';
sectionImage.alt = 'download apps';
sectionImage.style.width = '100%'; 

section.append(sectionTitle, sectionCopy, sectionImage);

export default section;