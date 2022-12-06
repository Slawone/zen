const section = document.createElement('section');
const sectionTitle = document.createElement('h2');
const sectionCopy = document.createElement('p');
const sectionImage = document.createElement('img');

sectionTitle.textContent = '1-year warranty boost';
sectionCopy.textContent = 'ZEN cards have a very neat feature that will help you whenever your electronic devices start failing after the standard warranty ends, which is pretty common.';
sectionImage.src = './img/2.jpg';
sectionImage.alt = 'warranty boost';
sectionImage.style.width = '100%'; 

section.append(sectionTitle, sectionCopy, sectionImage);

export default section;