const EventsTableStatusCell = ({ getValue }) => {
  const status = getValue();

  const statusColors = {
    upcoming: 'bg-[#3498db]',
    completed: 'bg-[#2ecc71]',
    cancelled: 'bg-[#e74c3c]',
  };

  return (
    <p className="flex items-center relative">
      <span className={`p-[7px] rounded-full absolute left-0 top-[9px] ${statusColors[status]}`}></span>
      <span className="pl-[20px]">{status}</span>
    </p>
  );
};

export default EventsTableStatusCell;
