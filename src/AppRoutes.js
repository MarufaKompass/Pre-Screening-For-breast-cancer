import React from 'react'
import { Route, Routes } from "react-router-dom";
import Home from './pages/home';
import MyAccount from './pages/myAccount/MyAccount';
import Questionnaire from './pages/questionnaire/Questionnaire';


export default function AppRoutes() {
  return (
    <>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/myaccount" element={<MyAccount />} />
      <Route path="/questionnaire" element={<Questionnaire />} />

      {/* <Route path="appointment" element={<Appointment />} />
      <Route path="lobby" element={<Lobby />} />
      <Route path="payroll" element={<Payroll />} />
      <Route path="/processing" element={<Processing />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/solutions" element={<Solutions />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} /> */}
    </Routes>
  </>
  )
}
