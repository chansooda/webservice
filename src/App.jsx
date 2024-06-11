import './App.css'
import LoginForm from './components/LoginForm';
import { useState } from 'react';
import Welcome from './components/Welcome';
import Notes from './components/Notes';
import moment from 'moment';
//부모
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [names, setUserName] = useState(''); 
  return (
    <>
      {isLoggedIn ?
      <>
        <Welcome 
          names={names} 
          setUserName={setUserName} 
          setIsLoggedIn={setIsLoggedIn} />
          <Notes />
        </> 
        :
        <>
        <LoginForm 
            styleData={{backgroundColor:"violet", color:'pink'}}
            setIsLoggedIn={setIsLoggedIn}
            setUserName={setUserName}
        />
        <Notes />
        </>
      }
      </>
  )
}
    

export default App
