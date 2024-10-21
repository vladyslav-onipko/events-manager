import { ReactComponent as SearchIcon } from '../../../assets/icons/search.svg';

const EventsTableSearch = ({ columnFilters, onSetColumnFilters, fieldName }) => {
  const searchTerm = columnFilters?.find((filter) => filter.id === fieldName)?.value || '';

  const handleInputChange = ({ target }) => {
    onSetColumnFilters((prevState) => [
      ...prevState.filter((filter) => filter.id !== fieldName),
      { id: fieldName, value: target.value },
    ]);
  };
  return (
    <div className="flex relative">
      <span
        className="size-6 absolute left-[5px] top-1/2 -translate-y-1/2 text-stone-900 pointer-events-none"
        aria-hidden="true"
      >
        <SearchIcon />
      </span>
      <input
        className="form-input w-[200px] pl-[25px] text-[1.2rem] text-stone-900"
        type="text"
        id="search"
        name="search"
        placeholder="search"
        value={searchTerm}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default EventsTableSearch;
