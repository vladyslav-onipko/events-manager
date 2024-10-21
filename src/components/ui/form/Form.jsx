const Form = ({ actions, onSubmit, children, ...props }) => {
  return (
    <form onSubmit={onSubmit} className="w-full h-full flex flex-col" {...props}>
      {children}
      {actions && <div className="flex items-center justify-around mt-[25px] sm:flex-col sm:h-[120px]">{actions}</div>}
    </form>
  );
};

export default Form;
