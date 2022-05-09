import { BrowserRouter as Router } from 'react-router-dom';
import { appInitialState, AppProvider, appReducer } from './contexts/app-context';

import { Navigation } from 'navigation';

function App() {
  return (
    <AppProvider reducer={appReducer} initialState={appInitialState}>
      <Router>
        <Navigation />
      </Router>
    </AppProvider>
  );
}

export default App;
