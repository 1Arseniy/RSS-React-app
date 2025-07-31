import { clearAllItems } from '@/store/characterSlice';

import downloadFile from '@/utils/downloadFile';

import Button from '../Button/Button';

import useTheme from '@/hooks/useTheme';

import { useAppDispatch, useAppSelector } from '@/store';

function Flyout() {
  const selectedCards = useAppSelector(
    (state) => state.selectedCharacters.results
  );
  const dispatch = useAppDispatch();
  const { darkTheme } = useTheme();

  return (
    !!selectedCards.length && (
      <div
        className={`${darkTheme ? 'bg-blue-900' : 'bg-blue-600'} flex justify-center items-center rounded-t-2xl`}
      >
        <span className="text-2xl">selected {selectedCards.length} items</span>
        <Button onClick={() => dispatch(clearAllItems())}>Unselect all</Button>
        <Button
          onClick={() =>
            downloadFile(
              JSON.stringify(selectedCards),
              `${selectedCards.length}_items`
            )
          }
        >
          Download
        </Button>
      </div>
    )
  );
}

export default Flyout;
