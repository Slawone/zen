const Title = (title) => {
  switch(title.priority) {
    case 1: return `<h1>${title.data}</h1>`
      break;
    case 2: return `<h2>${title.data}</h2>`
      break;
    case 3: return `<h3>${title.data}</h3>`
      break;
    case 4: return `<h4>${title.data}</h4>`
      break;
    case 5: return `<h5>${title.data}</h5>`
      break;
    default: return `<h6>${title.data}</h6>`
  }
};

export default Title;