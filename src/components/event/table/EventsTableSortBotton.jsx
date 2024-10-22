import { ReactComponent as ArrowsIcon } from '../../../assets/icons/arrows.svg';
import { ReactComponent as ArrowUp } from '../../../assets/icons/arrow-up.svg';
import { ReactComponent as ArrowDown } from '../../../assets/icons/arrow-down.svg';

const EventsTableSortButton = ({ isSorted, ...props }) => {
  const sortWay = {
    asc: <ArrowUp />,
    desc: <ArrowDown />,
  };

  return (
    <button
      className="ml-[10px] flex items-center justify-center relative"
      data-tooltip-content="sort"
      data-tooltip-id="event-tooltip"
      {...props}
    >
      <span className="sr-only">sort</span>
      <span>
        <ArrowsIcon />
      </span>
      {isSorted && (
        <span className="text-teal-300 pointer-events-none absolute -right-[20px]">{sortWay[isSorted]}</span>
      )}
    </button>
  );
};

export default EventsTableSortButton;
