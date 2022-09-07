import { Route, Routes } from 'react-router-dom';
import Header from './components/common/Header';
import Home from './components/Home';

function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
    
    </>
    
  );
}

export default App;
