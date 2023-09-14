import { Route, Routes} from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
// import Home from './views/home/Home';
import Footer from './components/footer/Footer';
import './dataBase/firebase'
import PreInscription from './views/preInscription/PreInscription';
import Soon from './views/soon/Soon';
const App = (): JSX.Element => {
  return (
    <div>
      <Navbar/>
      <Routes>
        {/* <Route path='/' element={<Home />} /> */}
        <Route path='/' element={<Soon />} />
        <Route path='/pre-inscripcion' element={<PreInscription />} />
        {/* <Route path="*" element={<PageNotFound />}/> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App
