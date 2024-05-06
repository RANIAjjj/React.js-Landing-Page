import './App.css'
import {Route, Routes } from 'react-router-dom'
import Landing from './components/landing/Landing'
import About from './components/landing/About'
import Nav from './components/landing/Nav'
import Footer from './components/landing/Footer'
import Service from './components/landing/Service'
import Contact from './components/landing/Contact'
import Shipping from './components/landing/Shipping'
import Payment from './components/landing/Payment'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
 

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Landing/>}/>
        <Route exact path="/about" element={<About/>}/>
        <Route exact path="/service" element={<Service/>}/>
        <Route exact path="/contact" element={<Contact/>}/>
        <Route exact path="/shipping" element={<Shipping/>}/>
        <Route exact path="/payment" element={<Payment/>}/>
      </Routes>
      <Footer/>
      <ToastContainer/>
    </>
  )
}

export default App
