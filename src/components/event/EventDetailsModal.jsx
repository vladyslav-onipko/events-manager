import Modal from '../modal/Modal';

import { ReactComponent as DescriptopnIcon } from '../../assets/icons/details.svg';
import { ReactComponent as NameIcon } from '../../assets/icons/star.svg';
import { ReactComponent as CategoryIcon } from '../../assets/icons/tag.svg';
import { ReactComponent as StatusIcon } from '../../assets/icons/status.svg';
import { ReactComponent as DateIcon } from '../../assets/icons/calendar.svg';

const evenstIcons = {
  name: <NameIcon />,
  description: <DescriptopnIcon />,
  category: <CategoryIcon />,
  status: <StatusIcon />,
  date: <DateIcon />,
};

const EventDetailsItem = ({ title, text, icon }) => {
  return (
    <div className="mb-[15px]">
      <p className="flex items-center text-cyan-900 font-bold">
        <span className="inline-block size-8 mr-[5px] pointer-events-none" aria-hidden="true">
          {icon}
        </span>
        <span className="mr-[5px] capitalize">{title}:</span>
        <span className="font-medium">{text}</span>
      </p>
    </div>
  );
};

const EventsDetailsModal = ({ isOpen, onClose, event }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title={event.name} action="Close" onAction={onClose}>
      <div className="flex flex-col w-full">
        {Object.entries(event).map(([key, value]) =>
          key !== 'id' ? <EventDetailsItem key={key} title={key} text={value} icon={evenstIcons[key]} /> : null
        )}
      </div>
    </Modal>
  );
};

export default EventsDetailsModal;
