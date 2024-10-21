import EventsTableDetailsAction from './EventsTableDetailsAction';
import EventsTableEditAction from './EventsTableEditAction';
import EventsTableDeleteAction from './EventsTableDeleteAction';

const EventsTableActions = ({ row }) => {
  return (
    <div className="flex justify-center">
      <EventsTableDetailsAction event={row.original} />
      <EventsTableEditAction event={row.original} />
      <EventsTableDeleteAction eventId={row.original.id} />
    </div>
  );
};

export default EventsTableActions;
