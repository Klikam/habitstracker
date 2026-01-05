import HabitsTable from './components/HabitsTable';
import Navigation from './components/Navigation';
import StartContextProvider from './store/start-context-provider';

function App() {
  return (
    <StartContextProvider>
      <Navigation />
      <HabitsTable />
    </StartContextProvider>
  );
}

export default App;
