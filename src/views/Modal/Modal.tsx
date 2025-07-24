import { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

import { getCharacterById } from '@/client/getCharacterById';

import { ModalContent } from '@/views';

import type { typeModalStates } from '@/types/types';

function Modal() {
  const [states, setState] = useState<typeModalStates>({
    character: {},
    loading: true,
    isOpen: false,
  });

  const params = useParams();

  console.log(params);

  const getCharacter = async () => {
    try {
      setState((prev) => ({ ...prev, loading: true }));
      if (params.id) {
        const result = await getCharacterById(params.id);
        setState((prev) => ({ ...prev, character: result, isOpen: true }));
      }
    } finally {
      setTimeout(() => setState((prev) => ({ ...prev, loading: false })), 300);
    }
  };

  useEffect(() => {
    getCharacter();
  }, [params.id]);

  return <ModalContent modalStates={states} />;
}

export default Modal;
