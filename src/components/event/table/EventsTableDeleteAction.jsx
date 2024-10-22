import { useState, useCallback } from 'react';

import EventsTableAction from './EventsTableAction';
import EventDeleteModal from '../modal/EventDeleteModal';

import { ReactComponent as TrashIcon } from '../../../assets/icons/trash.svg';

const EventsTableDeleteAction = ({ eventId }) => {
  const [isOpenEventDeleteModal, setIsOpenEventDeleteModal] = useState(false);

  const handleCloseModal = useCallback(() => setIsOpenEventDeleteModal(false), [setIsOpenEventDeleteModal]);

  return (
    <>
      <EventsTableAction
        data-tooltip-content="delete"
        data-tooltip-id="event-tooltip"
        modifier="is-danger"
        onClick={() => setIsOpenEventDeleteModal(true)}
        icon={<TrashIcon />}
      >
        delete event
      </EventsTableAction>
      {isOpenEventDeleteModal && (
        <EventDeleteModal eventId={eventId} isOpen={isOpenEventDeleteModal} onClose={handleCloseModal} />
      )}
    </>
  );
};

export default EventsTableDeleteAction;
