const Button = (button, parrentClassName) => {
  const className = parrentClassName ? `${parrentClassName}__button` : 'button';

  return `
    <button data-btn="${button.target}">
      ${button.data}
    </button>
  `
};

export default Button;