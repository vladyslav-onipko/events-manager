import FormControl from './FormControl';

const Select = ({ id, label, placeholder, register, errors, required, children, ...props }) => {
  const errorClassName = errors && errors[id] && 'has-error';

  return (
    <FormControl>
      <label htmlFor={id}>
        {label} {required && <span className="form-required-text">(required)</span>}
      </label>
      <select
        className={`form-select border-cyan-700 text-cyan-900 text-[1.2rem] ${errorClassName}`}
        name={id}
        id={id}
        {...register(id)}
        {...props}
      >
        {placeholder && <option value="">{placeholder}</option>}
        {children}
      </select>
      {errors && errors[id] && <span className="form-error-text">{errors[id].message}</span>}
    </FormControl>
  );
};

export default Select;
