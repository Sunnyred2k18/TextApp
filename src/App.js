//import logo from './logo.svg';
import './App.css';
//import About from './Components/About';
import Navbar from './Components/Navbar';
import { useState } from 'react';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#2e3338';
      showAlert("Dark mode has been enabled !", "Success")
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled !", "Success")
    }
  }
  return (
    <>
      <Navbar title="Navbar" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className='container mb-3'>
        {/* <Routes> */}

          {/*<Route path="/about">
            <About/>
  </Route>*/}
          { /*  <Route path='/about' element={<About />} /> */}

          {/*  <Route path='/' element={<TextForm showAlert={showAlert} heading="Enter your text to analyze" mode={mode} />} /> */}

          {/*<Route path="/">
          
</Route>*/}
          <TextForm showAlert={showAlert} heading="Enter your text to analyze" mode={mode} />

        {/* </Routes> */}
      </div>

      {/*<div>
         <About/>
  </div>*/}

    </>
  );
}

export default App;
