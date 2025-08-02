import { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

import { getCharacterById } from '@/client/getCharacterById';

import { ModalContent } from '@/views';

import type { TypeModalStates } from '@/types/types';

function Modal() {
  const { id } = useParams();

  const [states, setState] = useState<TypeModalStates>({
    character: {},
    loading: true,
  });

  useEffect(() => {
    (async () => {
      try {
        if (id) {
          setState((prev) => ({ ...prev, loading: true }));
          const result = await getCharacterById(id);
          setState((prev) => ({ ...prev, character: result }));
        }
      } finally {
        setState((prev) => ({ ...prev, loading: false }));
      }
    })();
  }, [id]);

  return id && <ModalContent modalStates={states} />;
}

export default Modal;
