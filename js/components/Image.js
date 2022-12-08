const Image = (image, parrentClassName) => {
  
  const className = parrentClassName
    ? `${parrentClassName}__image`
    : 'image';

  return `
    <img
      class="${className}"
      src="${image.source}"
      alt="${image.alternate}"
      style="width: 100%"
    >
  `
};

export default Image;