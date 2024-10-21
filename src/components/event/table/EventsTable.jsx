import { useState } from 'react';
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  getPaginationRowModel,
  getFilteredRowModel,
} from '@tanstack/react-table';

import Spinner from '../../ui/base/Spinner';
import ErrorBlock from '../../ui/base/ErrorBlock';
import EventsTableActions from './EventsTableActions';
import EventsTablePagination from './EventsTablePagination';
import EventsTableToolsBar from './EventsTableToolsBar';

import { useGetEvents } from '../../../hooks/get-events';

const columns = [
  {
    accessorKey: 'name',
    header: 'Name',
    cell: ({ getValue }) => <p className="table-cell">{getValue()}</p>,
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ getValue }) => <p className="table-cell">{getValue()}</p>,
  },
  {
    accessorKey: 'category',
    header: 'Category',
    cell: ({ getValue }) => <p className="table-cell">{getValue()}</p>,
  },
  {
    accessorKey: 'date',
    header: 'Date',
    cell: ({ getValue }) => <p className="table-cell">{getValue()}</p>,
  },
  {
    accessorKey: 'description',
    header: 'Description',
    cell: ({ getValue }) => <p className="table-cell">{getValue()}</p>,
  },
  {
    accessorKey: 'action',
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
  });

  let tableContent;

  if (isPending) {
    tableContent = <Spinner />;
  }

  if (!isPending && isError) {
    tableContent = <ErrorBlock message={error.message} />;
  }

  if (!isPending && isSuccess && !events.length) {
    tableContent = (
      <p className="text-center font-medium text-[1.8rem] text-cyan-900">There are no events yet, add one!</p>
    );
  }

  if (!isPending && isSuccess) {
    tableContent = (
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse border border-teal-700">
          <thead className="text-[1.6rem] text-gray-300 uppercase bg-gray-700">
            {getHeaderGroups().map((group) => (
              <tr className="bg-teal-700 text-white" key={group.id}>
                {group.headers.map((header) => (
                  <th className="px-4 py-2 border border-teal-700" key={header.id}>
                    {header.column.columnDef.header}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {getRowModel().rows.map((row) => (
              <tr className="bg-white" key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td className="px-4 py-2 border border-teal-700 text-teal-700" key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  console.log(events);

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
