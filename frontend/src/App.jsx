import { Routes,Route,BrowserRouter } from 'react-router-dom'
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import ServicePage from './pages/ServicePage';
import ContactUsPage from './pages/ContactUsPage';

function App() {


  return (
    <>
      <div>
      <BrowserRouter>
        <Routes>
          <Route  path='/' element={<HomePage />}/>
          <Route  path='/about' element={<AboutUsPage />}/>
          <Route  path='/service' element={<ServicePage />}/>
          <Route  path='/contact' element={<ContactUsPage />}/>
        </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App;
