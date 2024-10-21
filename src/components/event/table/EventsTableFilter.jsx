const EventsTableFilter = ({ items, placeholder, id }) => {
  return (
    <select className="form-select w-[200px] sm:first:mb-[10px]" name={id} id={id}>
      <option value="">{placeholder}</option>
      {items.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

export default EventsTableFilter;
