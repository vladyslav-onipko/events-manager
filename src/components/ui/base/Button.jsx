const Button = ({ modifier, type, children, ...props }) => {
  const buttonModifiers = {
    default: 'bg-teal-700 border-teal-700',
    'is-secondary': 'bg-amber-700 border-amber-700',
    'is-danger': 'bg-red-900 border-red-900',
  };

  return (
    <button
      className={`min-w-[150px]  text-white 
        border-[1px]  border-solid rounded-md 
        px-[15px] py-[10px] transition hover:bg-stone-700 hover:border-stone-700 disabled:opacity-30 disabled:pointer-events-none
        ${modifier ? buttonModifiers[modifier] : buttonModifiers.default}`}
      type={type ? type : 'button'}
      {...props}
    >
      <span>{children}</span>
    </button>
  );
};

export default Button;
