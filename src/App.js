import { Route, Routes } from 'react-router-dom';
import Footer from './components/common/Footer';
import Header from './components/common/Header';
import Home from './components/Home';

function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
    <Footer />
    
    </>
    
  );
}

export default App;
