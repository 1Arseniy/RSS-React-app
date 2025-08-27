import type { PropsWithChildren } from 'react';
import ReactDOM from 'react-dom';

import { Button } from '@/components';

interface typePropsModal {
  isOpen: boolean;
  closeModal: () => void;
}

function Modal({
  children,
  isOpen,
  closeModal,
}: PropsWithChildren<typePropsModal>) {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal();
    }
  });

  return (
    isOpen &&
    ReactDOM.createPortal(
      <>
        <div
          data-testid="close-modal"
          onClick={closeModal}
          className="fixed min-h-screen w-full top-0 left-0 bg-black/30 p-2"
        >
          <div className="flex min-h-full  flex-col items-center">
            <div
              onClick={(e) => e.stopPropagation()}
              className="w-96 bg-neutral-500"
            >
              <div className="flex justify-end">
                <Button onClick={closeModal} styles={'hover:bg-blue-900'}>
                  Close
                </Button>
              </div>
              {children}
            </div>
          </div>
        </div>
      </>,
      document.body
    )
  );
}

export default Modal;
