import { Route, Routes} from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './views/home/Home';
import Footer from './components/footer/Footer';
import './dataBase/firebase'
import PreInscription from './views/preInscription/PreInscription';
import RegistrationList from './views/registrationList/RegistrationList';
import { HelmetProvider } from 'react-helmet-async';
// import Soon from './views/soon/Soon';

const App = (): JSX.Element => {
  return (
    <HelmetProvider>
      <div>
        <Navbar/>
        <Routes>
          {/* <Route path='/' element={<Soon />} /> */}
          {/* <Route path='/' element={<PreInscription />} /> */}
          {/* <Route path='/inicio' element={<Home />} /> */}
          <Route path='/' element={<Home />} />
          <Route path='/pre-inscripcion' element={<PreInscription />} />
          <Route path='/lista-inscritos' element={<RegistrationList />} />
          {/* <Route path="*" element={<PageNotFound />}/> */}
        </Routes>
        <Footer />
      </div>
    </HelmetProvider>
  );
}

export default App
