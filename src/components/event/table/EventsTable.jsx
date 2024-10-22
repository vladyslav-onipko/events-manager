import { useState } from 'react';
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  getPaginationRowModel,
  getFilteredRowModel,
  getSortedRowModel,
} from '@tanstack/react-table';

import Spinner from '../../ui/base/Spinner';
import ErrorBlock from '../../ui/base/ErrorBlock';
import EventsTableActions from './EventsTableActions';
import EventsTablePagination from './EventsTablePagination';
import EventsTableToolsBar from './EventsTableToolsBar';
import EventsTableHeader from './EventsTableHeader';
import EventsTableRow from './EventsTableRow';
import EventsTableStatusCell from './EventsTableStatusCell';

import { useGetEvents } from '../../../hooks/get-events';
import { formatDate } from '../../../utils/format-date';

const columns = [
  {
    accessorKey: 'name',
    header: 'Name',
    enableColumnFilter: true,
    filterFn: 'includesString',
    cell: ({ getValue }) => <p className="truncate-text">{getValue()}</p>,
  },
  {
    accessorKey: 'status',
    header: 'Status',
    enableColumnFilter: true,
    enableSorting: false,
    filterFn: 'includesString',
    cell: EventsTableStatusCell,
  },
  {
    accessorKey: 'category',
    header: 'Category',
    enableColumnFilter: true,
    filterFn: 'includesString',
    cell: ({ getValue }) => <p className="truncate-text">{getValue()}</p>,
  },
  {
    accessorKey: 'date',
    header: 'Date',
    cell: ({ getValue }) => <p className="truncate-text">{formatDate(getValue())}</p>,
  },
  {
    accessorKey: 'description',
    header: 'Description',
    enableSorting: false,
    cell: ({ getValue }) => <p className="truncate-text">{getValue()}</p>,
  },
  {
    accessorKey: 'action',
    enableSorting: false,
    header: 'Action',
    cell: EventsTableActions,
  },
];

const EventsTable = () => {
  const [columnFilters, setColumnFilters] = useState([]);
  const { data: events, isPending, isSuccess, isError, error } = useGetEvents();

  const {
    getHeaderGroups,
    getRowModel,
    getState,
    getPageCount,
    nextPage,
    previousPage,
    getCanPreviousPage,
    getCanNextPage,
  } = useReactTable({
    data: events || [],
    columns,
    state: {
      columnFilters,
    },
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  let tableContent;
  const tableHeaderGroups = getHeaderGroups();
  const tableRows = getRowModel();

  if (isPending) {
    tableContent = <Spinner />;
  }

  if (!isPending && isError) {
    tableContent = <ErrorBlock message={error.message} />;
  }

  if (!isPending && isSuccess) {
    tableContent = (
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse border border-teal-700">
          <thead className="text-[1.6rem] text-gray-300 uppercase bg-gray-700">
            {tableHeaderGroups.map((group) => (
              <EventsTableHeader group={group} key={group.id} />
            ))}
          </thead>
          <tbody>
            {tableRows.rows.length ? (
              tableRows.rows.map((row) => <EventsTableRow row={row} flexRenderFn={flexRender} key={row.id} />)
            ) : (
              <tr>
                <td className="placeholder-text" colSpan="6">
                  No events found!
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }

  if (!isPending && isSuccess && events.length === 0) {
    tableContent = <p className="placeholder-text">There are no events yet, add one!</p>;
  }

  return (
    <section className="w-full my-[50px]">
      <h2 className="sr-only">Events table</h2>
      <div className="w-full max-w-[1280px] mx-auto px-[20px]">
        {<EventsTableToolsBar columnFilters={columnFilters} onSetColumnFilters={setColumnFilters} />}
        {tableContent}
        {
          <EventsTablePagination
            onNextPage={nextPage}
            hasNextPage={getCanNextPage()}
            onPrevPage={previousPage}
            hasPrevPage={getCanPreviousPage()}
            currentPage={getState().pagination.pageIndex + 1}
            totalPages={getPageCount()}
          />
        }
      </div>
    </section>
  );
};

export default EventsTable;
