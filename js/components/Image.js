const Image = (image) => {
  return `
    <img src="${image.source}" alt="${image.alternate}" style="width: 100%">
  `
};

export default Image;