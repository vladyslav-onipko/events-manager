const EventsTableRow = ({ row, flexRenderFn }) => {
  return (
    <tr className="bg-white">
      {row.getVisibleCells().map((cell) => (
        <td className="px-4 py-2 border border-teal-700 text-teal-700" key={cell.id}>
          {flexRenderFn(cell.column.columnDef.cell, cell.getContext())}
        </td>
      ))}
    </tr>
  );
};

export default EventsTableRow;
