import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import General from './components/General.jsx';
import Education from './components/Education.jsx';
import Experience from './components/Experience.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <General/>
      <Education/>
      <Experience/>
    </>
  )
}

export default App
