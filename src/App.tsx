import { useState } from 'react';

import {
  Button,
  Modal,
  UncontrolledForm,
  UsersList,
  ControlledForm,
} from '@/components';

function App() {
  const [currentFormId, setCurrentFormId] = useState<
    null | 'firstActive' | 'secondActive'
  >(null);

  const openModal = (name: 'firstActive' | 'secondActive') =>
    setCurrentFormId(name);
  const closeModal = () => setCurrentFormId(null);

  return (
    <>
      <Button
        onClick={() => openModal('firstActive')}
        disabled={
          currentFormId === 'firstActive' || currentFormId === 'secondActive'
        }
      >
        Show uncontrolled form
      </Button>
      <Button
        onClick={() => openModal('secondActive')}
        disabled={
          currentFormId === 'secondActive' || currentFormId === 'firstActive'
        }
      >
        Show controlled form
      </Button>
      <Modal isOpen={currentFormId === 'firstActive'} closeModal={closeModal}>
        <UncontrolledForm onClose={closeModal} />
      </Modal>
      <Modal isOpen={currentFormId === 'secondActive'} closeModal={closeModal}>
        <ControlledForm onClose={closeModal} />
      </Modal>
      <UsersList />
    </>
  );
}

export default App;
