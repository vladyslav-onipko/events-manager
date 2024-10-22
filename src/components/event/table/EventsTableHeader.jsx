import EventsTableSortButton from './EventsTableSortBotton';

const EventsTableHeader = ({ group }) => {
  return (
    <tr className="bg-teal-700 text-white">
      {group.headers.map((header) => (
        <th className="px-4 py-2 border border-teal-700" key={header.id}>
          <p className="flex items-center justify-center">
            <span>{header.column.columnDef.header}</span>
            {header.column.getCanSort() && (
              <EventsTableSortButton
                isSorted={header.column.getIsSorted()}
                onClick={header.column.getToggleSortingHandler()}
              />
            )}
          </p>
        </th>
      ))}
    </tr>
  );
};

export default EventsTableHeader;
