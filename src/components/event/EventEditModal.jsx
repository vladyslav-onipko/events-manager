import Modal from '../modal/Modal';
import EventForm from './EventForm';

const EventEditModal = ({ isOpen, onClose, event }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Edit event">
      <EventForm onCancel={onClose} event={event} />
    </Modal>
  );
};

export default EventEditModal;
