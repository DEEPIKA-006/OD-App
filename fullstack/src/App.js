import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Banner from './Header.jsx';
import LoginPage from './login.jsx';
import SignupPage from './sigup.jsx';
import CollegeEventForm from './addevents.jsx';
import EventForm from './EventForm.jsx';
import Stafflog from './stafflogin.jsx';
import StaffeventForm from './staffevents.jsx';
import UserProfile from './profile.jsx';
const App = ()=>{
  return(
    <> 
    <BrowserRouter>
      <Routes>
        <Route path="/Home" element={<><Banner /></>}></Route>
        <Route path="/staffevent" element={<><Banner /><StaffeventForm /></>}></Route>
        <Route path="/idea" element={<><Banner /><CollegeEventForm /></>}></Route>
        <Route path="/user" element={<><Banner /><UserProfile /></>}></Route>
        <Route path="/Event" element={<><Banner /><EventForm /></>}></Route>
        <Route path="/Login" element={<><LoginPage /></>}></Route>
        <Route path="/staffLogin" element={<><Stafflog /></>}></Route>
        <Route path="/Signup" element={<><SignupPage /></>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App