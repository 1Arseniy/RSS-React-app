import { useState, type ChangeEvent, useCallback } from 'react';

import { Button, InputSearch, Modal } from '@/components';
import type { TypeAppSetState, TypeAppState } from '@/types/types';

interface TypePropsHeader {
  state: TypeAppState;
  setState: TypeAppSetState;
}

function Header({ state, setState }: TypePropsHeader) {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);

  const toggleColumn = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const id = e.target.id;
      setState((prev) => ({
        ...prev,
        columns: prev.columns.includes(id)
          ? prev.columns.filter((col) => col !== id)
          : [...prev.columns, id],
      }));
    },
    [setState]
  );

  const changeSearch = useCallback(
    (e: ChangeEvent<HTMLInputElement>) =>
      setState((prev) => ({ ...prev, name: e.target.value })),
    [setState]
  );

  return (
    <div>
      <InputSearch
        type="text"
        placeholder="Search by name..."
        inputValue={state.name}
        changeSearch={changeSearch}
        styles="mr-2"
      />
      year:
      <select
        onChange={useCallback(
          (e: ChangeEvent<HTMLSelectElement>) =>
            setState((prev) => ({ ...prev, year: Number(e?.target.value) })),
          [setState]
        )}
      >
        <option>2023</option>
        <option>2022</option>
        <option>2021</option>
        <option>2020</option>
      </select>
      <Button onClick={() => setIsOpen(true)}>add column</Button>
      <>
        <span>Sort by Name: </span>
        <select
          onChange={useCallback(
            () => setState((prev) => ({ ...prev, sort: !prev.sort })),
            [setState]
          )}
        >
          <option>ASC</option>
          <option>DESC</option>
        </select>
      </>
      <Modal isOpen={isOpen} closeModal={closeModal}>
        <div className="flex flex-col items-center">
          <div>
            <input
              onChange={(e) => toggleColumn(e)}
              type="checkbox"
              id="methane"
              checked={state.columns.includes('methane')}
            />
            <label htmlFor="methane">Methane</label>
          </div>
          <div className="mb-2">
            <input
              onChange={(e) => toggleColumn(e)}
              type="checkbox"
              id="oil_co2"
            />
            <label htmlFor="oil_co2">Oil_co2</label>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default Header;
