import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login'
import { Routes, Route } from 'react-router-dom';

function App() {
  return <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register  />} />
    </Routes>
    <Footer />
  </>

    ;
}

export default App;
