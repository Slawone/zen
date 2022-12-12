const Button = (button, parrentClassName) => {
  const className = parrentClassName ? `${parrentClassName}__button` : 'button';

  return `
    <button class="${className}" type="${button.type}">${button.data}</button>
  `
};

export default Button;