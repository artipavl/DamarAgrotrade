import { Navigate, Route, Routes } from 'react-router-dom';
import Header from './components/header/header';
import Home from './pages/home/home';
import Footer from './components/footer/footer';
import styled from 'styled-components';

export const AppBox = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

function App() {
  return (
    <AppBox>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </main>
      <Footer />
    </AppBox>
  );
}

export default App;
