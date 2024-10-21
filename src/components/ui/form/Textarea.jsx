import FormControl from './FormControl';

const TextArea = ({ id, label, register, errors, required, ...props }) => {
  const errorClassName = errors && errors[id] && 'has-error';

  return (
    <FormControl>
      <label htmlFor={id}>
        {label} {required && <span className="form-required-text">(required)</span>}
      </label>
      <textarea className={`form-textarea ${errorClassName}`} name={id} id={id} {...register(id)} {...props} />
      {errors && errors[id] && <span className="form-error-text">{errors[id].message}</span>}
    </FormControl>
  );
};

export default TextArea;
