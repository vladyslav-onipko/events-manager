import { useState, useCallback } from 'react';

import EventsTableAction from './EventsTableAction';
import EventEditModal from '../EventEditModal';

import { ReactComponent as EditIcon } from '../../../assets/icons/edit.svg';

const EventsTableEditAction = ({ event }) => {
  const [isOpenEventEditModal, setIsOpenEventEditModal] = useState(false);

  const handleCloseModal = useCallback(() => setIsOpenEventEditModal(false), [setIsOpenEventEditModal]);

  return (
    <>
      <EventsTableAction onClick={() => setIsOpenEventEditModal(true)} icon={<EditIcon />}>
        edit event
      </EventsTableAction>
      {isOpenEventEditModal && (
        <EventEditModal event={event} isOpen={isOpenEventEditModal} onClose={handleCloseModal} />
      )}
    </>
  );
};

export default EventsTableEditAction;
