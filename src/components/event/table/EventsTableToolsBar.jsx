import EventsTableSearch from './EventsTableSearch';
import EventsTableFilter from './EventsTableFilter';

import { EVENT_CATEGORYES } from '../../../utils/constants';
import { EVENT_STATUSES } from '../../../utils/constants';

const EventsTableToolsBar = ({ columnFilters, onSetColumnFilters }) => {
  return (
    <div className="w-full mb-[30px] flex items-center justify-between sm:flex-col sm:justify-center">
      <EventsTableSearch columnFilters={columnFilters} onSetColumnFilters={onSetColumnFilters} fieldName="name" />
      <div className="w-[420px] flex justify-between sm:flex-col sm:w-auto sm:mt-[10px]">
        <EventsTableFilter
          onSetColumnFilters={onSetColumnFilters}
          options={EVENT_CATEGORYES}
          fieldName="category"
          placeholder="filter by category"
        />
        <EventsTableFilter
          onSetColumnFilters={onSetColumnFilters}
          options={EVENT_STATUSES}
          fieldName="status"
          placeholder="filter by status"
        />
      </div>
    </div>
  );
};

export default EventsTableToolsBar;
