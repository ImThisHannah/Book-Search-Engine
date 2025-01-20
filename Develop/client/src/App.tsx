import './App.css';
import { Outlet } from 'react-router-dom';

// TO DO: Create an Apollo Provider 
// to make every request work with the Apollo Server.

import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;
