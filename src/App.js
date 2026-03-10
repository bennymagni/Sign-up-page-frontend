import { useState } from "react";
import Login from "./Login";
import axios from "axios";


function App() {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');

  const submitData = async (event) => {

    event.preventDefault();
    const url = 'https://sign-up-page-backend-two.vercel.app'
    //const formdata = new FormData(document.querySelector('#loginForm'))
    const userdata = {
      firstName,
      lastName,
      emailAddress
    }
    try {
      const result = await axios.post(url, userdata)
      console.log('Data sent successfully ', result.data)
    } catch (error) {
      console.error(`Data not sent : ${error.message}`)
    } finally{
      setFirstName('')
      setLastName('')
      setEmailAddress('')
    }
  }

  return (
    <div className="App">
      <div className="formClass">
        <Login 
            firstName={firstName}
            lastName={lastName}
            emailAddress={emailAddress}
            setFirstName={setFirstName}
            setLastName={setLastName}
            setEmailAddress={setEmailAddress}
            submitData = {submitData}
            />
      </div>
    </div>
  );
}

export default App;
