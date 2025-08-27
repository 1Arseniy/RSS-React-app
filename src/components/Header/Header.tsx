import { useState } from 'react';

import { Button, InputSearch, Modal } from '@/components';
import type { TypeAppSetState, TypeAppState } from '@/types/types';

interface TypePropsHeader {
  state: TypeAppState;
  setState: TypeAppSetState;
}

function Header({ state, setState }: TypePropsHeader) {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  //   console.log(state.year);
  return (
    <div>
      {/*   <InputSearch
        type="text"
        placeholder="Search by name..."
        // inputValue={name}
        // setState={setState}
        styles="mr-2"
      /> */}
      <InputSearch
        type="number"
        placeholder="Select year"
        inputValue={`${state.year}`}
        setState={setState}
      />
      <Button onClick={() => setIsOpen(true)}>add column</Button>
      <>
        <span>Sort by Name: </span>
        <select>
          <option>Select</option>
          <option>ASC</option>
          <option>DESC</option>
        </select>
      </>
      <Modal isOpen={isOpen} closeModal={closeModal}>
        <div className="flex flex-col items-center">
          <div>
            <input type="checkbox" id="methane" />
            <label htmlFor="methane">Methane</label>
          </div>
          <div>
            <input type="checkbox" id="oil_co2" />
            <label htmlFor="oil_co2">Oil_co2</label>
          </div>
          <div>
            <input type="checkbox" id="temperature_change_from_co2" />
            <label htmlFor="temperature_change_from_co2">
              Temperature_change_from_co2
            </label>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default Header;
