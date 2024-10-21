import ReactModal from 'react-modal';

import Button from '../ui/base/Button';

import { ReactComponent as CloseIcon } from '../../assets/icons/close.svg';

const ModalCloseButton = ({ onClose }) => {
  return (
    <button
      className="flex justify-center items-center absolute right-[20px] top-[20px] transition hover:text-red-700"
      onClick={onClose}
    >
      <span className="inline-block size-10 pointer-events-none" aria-hidden="true">
        <CloseIcon />
      </span>
      <span className="sr-only">close modal</span>
    </button>
  );
};

const Modal = ({ isOpen, onClose, action, onAction, title, children }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      overlayClassName="modal-overlay"
      className="modal-content"
      ariaHideApp={false}
      closeTimeoutMS={300}
      onRequestClose={onClose}
    >
      <ModalCloseButton onClose={onClose} />
      <header className="w-full p-[15px] mb-[25px] text-center border-b-[1px] border-b-cyan-900">
        <h3 className="text-cyan-900 font-bold text-[3rem]">{title || 'Modal default title'}</h3>
      </header>
      {children}
      {action && (
        <div className="w-full mt-[50px] flex items-center justify-center">
          <Button onClick={onAction}>{action}</Button>
        </div>
      )}
    </ReactModal>
  );
};

export default Modal;
