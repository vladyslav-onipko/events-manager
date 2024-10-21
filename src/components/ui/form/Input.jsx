import FormControl from './FormControl';

const Input = ({ id, label, required, register, errors, ...props }) => {
  const errorClassName = errors && errors[id] && 'has-error';

  return (
    <FormControl>
      <label className="" htmlFor={id}>
        {label}
        {required && <span className="form-required-text">(required)</span>}
      </label>
      <input className={`form-input ${errorClassName}`} {...register(id)} id={id} name={id} {...props} />
      {errors && errors[id] && <span className="form-error-text">{errors[id].message}</span>}
    </FormControl>
  );
};

export default Input;
