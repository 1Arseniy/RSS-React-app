import { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

import { getCharacterById } from '@/client/getCharacterById';

import { ModalContent } from '@/views';

import type { typeModalStates } from '@/types/types';

function Modal() {
  const { id } = useParams();

  const [states, setState] = useState<typeModalStates>({
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
        setTimeout(
          () => setState((prev) => ({ ...prev, loading: false })),
          300
        );
      }
    })();
  }, [id]);

  return id && <ModalContent modalStates={states} />;
}

export default Modal;
