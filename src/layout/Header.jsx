import { useState, useCallback } from 'react';

import Button from '../components/ui/base/Button';
import EventCreateModal from '../components/event/EventCreateModal';

const Header = () => {
  const [isOpenEventCreateModal, setIsOpenEventCreateModal] = useState(false);

  const handleCloseModal = useCallback(() => setIsOpenEventCreateModal(false), [setIsOpenEventCreateModal]);

  return (
    <header className="w-full h-full flex items-end justify-center py-[50px] md:py-[25px] sm:py-[15px]" role="banner">
      <Button modifier="is-secondary" onClick={() => setIsOpenEventCreateModal(true)}>
        Create your first event
      </Button>
      <EventCreateModal isOpen={isOpenEventCreateModal} onClose={handleCloseModal} />
    </header>
  );
};

export default Header;
