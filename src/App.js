import { Route, Routes } from 'react-router-dom';
import Footer from './components/common/Footer';
import Header from './components/common/Header';
import Home from './components/Home';
import Shop from './components/Shop';

function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/shop' element={<Shop />} />
    </Routes>
    <Footer />
    
    </>
    
  );
}

export default App;
