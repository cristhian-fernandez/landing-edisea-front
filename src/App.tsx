import { Route, Routes} from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './views/home/Home';
import Footer from './components/footer/Footer';
const App = (): JSX.Element => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path="*" element={<PageNotFound />}/> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App
