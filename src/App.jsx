import './App.css';
import { BrowserRouter as Router,  Route } from 'react-router-dom';
import CrazyCodePage from './Crazy';

function App() {
  return (
    <Router>
      <CrazyCodePage />
  );
}

export default App;
