import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/header/header';
import Home from './pages/home/home';
import Footer from './components/footer/footer';
import styled from 'styled-components';
import Tovar from './pages/tovar/tovar';
import Thanks from './pages/thanks/thanks';
import Return from './pages/return/return';
import Pay from './pages/pay/pay';
import Order from './pages/order/order';
import News from './pages/news/news';
import LogIn from './pages/logIn/logIn';
import Contacts from './pages/contacts/contacts';
import Registration from './pages/registration/registration';
import Catalog from './pages/catalog/catalog';
import Cabinet from './pages/cabinet/cabinet';
import About from './pages/about/about';
import Partners from './pages/partners/partners';
import Team from './pages/team/team';
import Dogovir from './pages/dogovir/dogovir';
import NavLine from './components/navLine/navLine';

export const AppBox = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

function App() {
  const location = useLocation();
  return (
    <AppBox>
      <Header />
      <main>
        {location.pathname.length > 1 && <NavLine />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/dogovir" element={<Dogovir />} />
          <Route path="/cabinet" element={<Cabinet />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/logIn" element={<LogIn />} />
          <Route path="/news" element={<News />} />
          <Route path="/order" element={<Order />} />
          <Route path="/pay" element={<Pay />} />
          <Route path="/return" element={<Return />} />
          <Route path="/thanks" element={<Thanks />} />
          <Route path="/tovar" element={<Tovar />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </main>
      <Footer />
    </AppBox>
  );
}

export default App;
