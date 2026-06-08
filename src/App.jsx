import { BrowserRouter } from 'react-router-dom';
import MozHouseLayout from './components/mozhouse/MozHouseLayout';
import ScrollProvider from './components/context/ScrollContext';

function App() {
  return (
    <BrowserRouter>
      <ScrollProvider>
        <MozHouseLayout />
      </ScrollProvider>
    </BrowserRouter>
  )
}

export default App
