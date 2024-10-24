import { ReactComponent as SearchIcon } from '../../../assets/icons/search.svg';

const EventsTableSearch = ({ columnFilters, onSetColumnFilters, fieldName }) => {
  const searchTerm = columnFilters?.find((filter) => filter.id === fieldName)?.value || '';

  const handleSearchChange = ({ target }) => {
    onSetColumnFilters((prevState) => [
      ...prevState.filter((filter) => filter.id !== fieldName),
      { id: fieldName, value: target.value },
    ]);
  };
  return (
    <div className="flex relative">
      <span
        className="size-6 absolute left-[5px] top-1/2 -translate-y-1/2 text-cyan-900 pointer-events-none"
        aria-hidden="true"
      >
        <SearchIcon />
      </span>
      <input
        className="form-input border-cyan-700 placeholder:text-cyan-900 w-[200px] pl-[25px] text-[1.2rem] text-cyan-900"
        type="text"
        id="search"
        name="search"
        placeholder="search by name"
        value={searchTerm}
        onChange={handleSearchChange}
      />
    </div>
  );
};

export default EventsTableSearch;
