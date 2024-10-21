const EventsTableAction = ({ icon, children, modifier, ...props }) => {
  const actionModifiers = {
    default: 'border-cyan-700 ',
    'is-denger': 'bg-red-700 border-red-700 text-white hover:border-cyan-700',
  };

  return (
    <button
      className={`group w-[30px] h-[30px] mx-[3px] flex items-center justify-center border-[1px] transition hover:bg-cyan-700 ${
        modifier ? actionModifiers[modifier] : actionModifiers.default
      }`}
      {...props}
    >
      <span className="sr-only">{children}</span>
      <span className="inline-block size-8 pointer-events-none group-hover:text-white" aria-hidden="true">
        {icon}
      </span>
    </button>
  );
};

export default EventsTableAction;
