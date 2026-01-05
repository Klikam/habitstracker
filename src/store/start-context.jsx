import { createContext } from 'react';

export const StartContext = createContext({
  start: null,
  handleSetNextWeek: () => {},
  handleSetPreviousWeek: () => {},
});
