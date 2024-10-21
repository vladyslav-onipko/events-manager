import { useState, useCallback } from 'react';

import EventsTableAction from './EventsTableAction';
import EventsDetailsModal from '../EventDetailsModal';

import { ReactComponent as DetailsIcon } from '../../../assets/icons/details.svg';

const EventsTableDetailsAction = ({ event }) => {
  const [isOpenEventDetailsModal, setIsOpenEventDetailsModal] = useState(false);

  const handleCloseModal = useCallback(() => setIsOpenEventDetailsModal(false), [setIsOpenEventDetailsModal]);

  return (
    <>
      <EventsTableAction onClick={() => setIsOpenEventDetailsModal(true)} icon={<DetailsIcon />}>
        event details
      </EventsTableAction>
      {isOpenEventDetailsModal && (
        <EventsDetailsModal isOpen={isOpenEventDetailsModal} onClose={handleCloseModal} event={event} />
      )}
    </>
  );
};

export default EventsTableDetailsAction;
