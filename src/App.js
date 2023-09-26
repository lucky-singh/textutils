import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState('light');
  const [modeText, setModeText] = useState('dark');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(()=>{
      setAlert(null)
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      setModeText('light');
      document.body.style.backgroundColor = '#042743';
      showAlert('Dark mode has been enabled.', 'success');
    } else {
      setMode('light');
      setModeText('dark');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been enabled.', 'success');
    }
  };
  return (
    <>
      <Navbar
        title='Text Utils'
        mode={mode}
        toggleMode={toggleMode}
        modeText={modeText}
      />
      <Alert alert={alert}></Alert>
      <div className='container'>
        <TextForm heading='Enter the text to analyze' mode={mode} showAlert={showAlert}/>
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
