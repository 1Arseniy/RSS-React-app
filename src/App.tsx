import { useState } from 'react';

import {
  Button,
  Modal,
  UncontrolledForm,
  UsersList,
  ControlledForm,
} from '@/components';

// import useUsers from './store/store';

function App() {
  const [isOpen, setIsOpen] = useState<null | 'firstActive' | 'secondActive'>(
    null
  );

  const openModal = (name: 'firstActive' | 'secondActive') => setIsOpen(name);
  const closeModal = () => setIsOpen(null);

  return (
    <>
      <Button onClick={() => openModal('firstActive')}>Open first modal</Button>
      <Button onClick={() => openModal('secondActive')}>
        Open second modal
      </Button>
      <Modal isOpen={isOpen === 'firstActive'} closeModal={closeModal}>
        <UncontrolledForm onClose={closeModal} />
      </Modal>
      <Modal isOpen={isOpen === 'secondActive'} closeModal={closeModal}>
        <ControlledForm />
      </Modal>
      <UsersList />
    </>
  );
}

export default App;
