import { BrowserRouter } from 'react-router-dom';
import MozHouseLayout from './components/mozhouse/MozHouseLayout';
import './style/global.css';

function App() {
  return (
    <BrowserRouter>
      <MozHouseLayout />
    </BrowserRouter>
  )
}

export default App
