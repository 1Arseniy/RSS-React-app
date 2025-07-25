import { useState } from 'react';

import { useParams } from 'react-router-dom';

import { getCharacterById } from '@/client/getCharacterById';

import { ModalContent } from '@/views';

import type { typeModalStates } from '@/types/types';

function Modal() {
  const { id } = useParams();

  const [states, setState] = useState<typeModalStates>({
    character: {},
    loading: true,
    isOpen: false,
  });

  if (!id) {
    return;
  }

  const getCharacter = async () => {
    try {
      setState((prev) => ({ ...prev, loading: true }));
      const result = await getCharacterById(id);
      setState((prev) => ({ ...prev, character: result, isOpen: true }));
    } finally {
      setTimeout(() => setState((prev) => ({ ...prev, loading: false })), 300);
    }
  };

  return <ModalContent getCharacter={getCharacter} modalStates={states} />;
}

export default Modal;
