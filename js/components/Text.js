const Text = (text, parrentClassName) => {
  
  const className = parrentClassName 
    ? `${parrentClassName}__copy` 
    : 'copy';

  return `
    <p class="${className}">
      ${text}
    </p>
  `
};

export default Text;