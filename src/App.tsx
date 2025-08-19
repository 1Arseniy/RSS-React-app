import { useState } from 'react';

import { Button, Modal, UncontrolledForm, UsersList } from '@/components';

// import useUsers from './store/store';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <Button onClick={openModal}>Open first modal</Button>
      <Modal isOpen={isOpen} closeModal={closeModal}>
        <UncontrolledForm onClose={closeModal} />
      </Modal>
      <UsersList />
    </>
  );
}

export default App;
