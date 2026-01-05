import { useState } from 'react';

import { StartContext } from './start-context';

export default function StartContextProvider({ children }) {
  const [start, setStart] = useState(new Date('2026-01-05'));

  const _modifyWeek = days =>
    setStart(prev => {
      const newDate = new Date(prev);
      newDate.setDate(newDate.getDate() + days);
      return newDate;
    });

  const handleSetNextWeek = () => _modifyWeek(7);
  const handleSetPreviousWeek = () => _modifyWeek(-7);

  const startCtxValue = { start, handleSetNextWeek, handleSetPreviousWeek };

  return (
    <StartContext.Provider value={startCtxValue}>
      {children}
    </StartContext.Provider>
  );
}
