import { useContext } from 'react';

import { StartContext } from '../store/start-context';

export default function Navigation() {
  const { handleSetNextWeek, handleSetPreviousWeek } = useContext(StartContext);
  const buttonStyle =
    'px-6 py-2 bg-amber-200 m-2.5 rounded-2xl border-2 hover:bg-amber-300';
  return (
    <nav>
      <button className={buttonStyle}>Add habit</button>
      <button onClick={handleSetPreviousWeek} className={buttonStyle}>
        Previous week
      </button>
      <button onClick={handleSetNextWeek} className={buttonStyle}>
        Next week
      </button>
    </nav>
  );
}
