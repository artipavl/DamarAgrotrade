import { Navigate, Route, Routes } from 'react-router-dom';
import Header from './components/header/header';
import Home from './pages/home/home';

function App() {
  return (
    <>
      <Header />
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/*" element={<Navigate to="/"/>} />
    </Routes>
    </>
  );
}

export default App;
