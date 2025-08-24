import { useState } from 'react';

import {
  Button,
  Modal,
  UncontrolledForm,
  UsersList,
  ControlledForm,
} from '@/components';

function App() {
  const [isOpen, setIsOpen] = useState<null | 'firstActive' | 'secondActive'>(
    null
  );

  const openModal = (name: 'firstActive' | 'secondActive') => setIsOpen(name);
  const closeModal = () => setIsOpen(null);

  return (
    <>
      <Button
        onClick={() => openModal('firstActive')}
        disabled={isOpen === 'firstActive' || isOpen === 'secondActive'}
      >
        Show uncontrolled form
      </Button>
      <Button
        onClick={() => openModal('secondActive')}
        disabled={isOpen === 'secondActive' || isOpen === 'firstActive'}
      >
        Show controlled form
      </Button>
      <Modal isOpen={isOpen === 'firstActive'} closeModal={closeModal}>
        <UncontrolledForm onClose={closeModal} />
      </Modal>
      <Modal isOpen={isOpen === 'secondActive'} closeModal={closeModal}>
        <ControlledForm onClose={closeModal} />
      </Modal>
      <UsersList />
    </>
  );
}

export default App;
