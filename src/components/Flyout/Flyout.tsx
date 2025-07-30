import { useAppSelector, useAppDispatch } from '@/hooks/useStore';

import { clearAllItems } from '@/store/characterSlice';

import Button from '../Button/Button';

import useTheme from '@/hooks/useTheme';

function Flyout() {
  const lenghtSelectedCards = useAppSelector(
    (state) => state.selectedCharacters.results.length
  );
  const dispatch = useAppDispatch();
  const { darkTheme } = useTheme();

  return (
    !!lenghtSelectedCards && (
      <div
        className={`${darkTheme ? 'bg-blue-900' : 'bg-blue-600'} flex justify-center items-center rounded-t-2xl`}
      >
        <span className="text-2xl">selected {lenghtSelectedCards} items</span>
        <Button onClick={() => dispatch(clearAllItems())}>Unselect all</Button>
        <Button>Download</Button>
      </div>
    )
  );
}

export default Flyout;
