const EventsTableFilter = ({ options, placeholder, fieldName, onSetColumnFilters }) => {
  const handleFilterChange = ({ target }) => {
    onSetColumnFilters((prevState) => [
      ...prevState.filter((filter) => filter.id !== target.id),
      { id: target.id, value: target.value },
    ]);
  };
  return (
    <select
      className="form-select border-cyan-700 w-[200px] text-cyan-900 text-[1.2rem] sm:first:mb-[10px]"
      name={fieldName}
      id={fieldName}
      onChange={handleFilterChange}
    >
      <option value="">{placeholder}</option>
      {options.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

export default EventsTableFilter;
