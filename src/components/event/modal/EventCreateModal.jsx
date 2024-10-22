import Modal from '../../modal/Modal';
import EventForm from '../form/EventForm';

const EventCreateModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Create event">
      <EventForm onCancel={onClose} />
    </Modal>
  );
};

export default EventCreateModal;
