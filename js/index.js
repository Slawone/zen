const sectionDownload = document.createElement('section');
const title = document.createElement('h1');
const copy = document.createElement('p');
const img = document.createElement('img');

title.textContent = 'Peaceful shopping mindful money';
copy.textContent = 'See how we can help with making your shopping experience and money management more ZEN.';
img.src = './img/1.jpg';
img.alt = 'download apps';

sectionDownload.append(title, copy, img); 

const sectionWarranty = document.createElement('section');
const titleWarranty = document.createElement('h2');
const copyWarranty = document.createElement('p');
const imgWarranty = document.createElement('img');

titleWarranty.textContent = '1-year warranty boost';
copyWarranty.textContent = 'ZEN cards have a very neat feature that will help you whenever your electronic devices start failing after the standard warranty ends, which is pretty common.';
imgWarranty.src = './img/2.jpg';
imgWarranty.alt = 'warranty boost';

sectionWarranty.append(titleWarranty, copyWarranty, imgWarranty);

const sectionCare = document.createElement('section');
const titleCare = document.createElement('h2');
const copyCare = document.createElement('p');
const imgCare = document.createElement('img');

titleCare.textContent = 'ZEN Care';
copyCare.textContent = 'Shopping online is usually a delightful experience. Until it\'s not.';
imgCare.src = './img/3.jpg';
imgCare.alt = 'care';

sectionCare.append(titleCare, copyCare, imgCare);

const $root = document.querySelector('#root');

$root.append(sectionDownload, sectionWarranty, sectionCare);

console.dir(Document);
console.dir(document);