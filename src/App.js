import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login'

import { Routes, Route } from 'react-router-dom';


import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Expenses from './components/Expenses';
import Tools from './components/Tools';





function App() {
  return <>
    <Header />
    <ToastContainer
      position="top-right"
      autoClose={3000}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      pauseOnHover
    />
    <ToastContainer />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/expenses" element={<Expenses />} />
      <Route path="/tools" element={<Tools />} />
    </Routes>
    <Footer />
  </>

    ;
}

export default App;
