import { useState, useCallback } from 'react';

import EventsTableAction from './EventsTableAction';
import EventEditModal from '../modal/EventEditModal';

import { ReactComponent as EditIcon } from '../../../assets/icons/edit.svg';

const EventsTableEditAction = ({ event }) => {
  const [isOpenEventEditModal, setIsOpenEventEditModal] = useState(false);

  const handleCloseModal = useCallback(() => setIsOpenEventEditModal(false), [setIsOpenEventEditModal]);

  return (
    <>
      <EventsTableAction
        data-tooltip-content="edit"
        data-tooltip-id="event-tooltip"
        onClick={() => setIsOpenEventEditModal(true)}
        icon={<EditIcon />}
      >
        edit event
      </EventsTableAction>
      {isOpenEventEditModal && (
        <EventEditModal event={event} isOpen={isOpenEventEditModal} onClose={handleCloseModal} />
      )}
    </>
  );
};

export default EventsTableEditAction;
