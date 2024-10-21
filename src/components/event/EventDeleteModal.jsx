import Modal from '../modal/Modal';
import Button from '../ui/base/Button';
import ErrorBlock from '../ui/base/ErrorBlock';

import { useDeleteEvent } from '../../hooks/delete-event';

const EventDeleteModal = ({ isOpen, onClose, eventId }) => {
  const { mutate: deleteEvent, isPending, isError, error } = useDeleteEvent();

  const handleDeleteEvent = () => {
    deleteEvent(
      { eventId },
      {
        onSuccess() {
          onClose();
        },
      }
    );
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Delete event">
      {!isPending && isError && <ErrorBlock message={error.message} />}
      <p className="text-red-900 font-bold text-center text-[2.4rem]">Are you sure you want to delete event ?</p>
      <div className="flex mt-[30px] w-full justify-around sm:flex-col sm:h-[120px] sm:items-center">
        <Button modifier="is-secondary" onClick={onClose}>
          Cancel
        </Button>
        <Button modifier="is-denger" disabled={isPending} onClick={handleDeleteEvent}>
          {isPending ? 'Deleting...' : 'Delete'}
        </Button>
      </div>
    </Modal>
  );
};

export default EventDeleteModal;
