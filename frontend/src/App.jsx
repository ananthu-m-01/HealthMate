import React from 'react'
import { Route, Routes } from "react-router-dom"
import Navbar from './components/Navbar.jsx'
import About from "./pages/About.jsx"
import Appointment from './pages/Appointment.jsx'
import Contact from "./pages/Contact.jsx"
import Doctors from "./pages/Doctors.jsx"
import Home from "./pages/Home.jsx"
import Login from './pages/Login.jsx'
import MyAppointments from './pages/MyAppointments'
import MyProfile from './pages/MyProfile.jsx'
const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar/>
      <Routes >
        <Route path="/" element={<Home/>}></Route>
        <Route path="/doctors" element={<Doctors/>}></Route>
        <Route path="/doctors/:speciality" element={<Doctors/>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/my-profile" element={<MyProfile></MyProfile>}></Route>
        <Route path='/my-appointments' element={<MyAppointments></MyAppointments>}></Route>
        <Route path='/appointment/:docId' element={<Appointment></Appointment>}></Route>
      </Routes>
    </div>
  )
}

export default App
