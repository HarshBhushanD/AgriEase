import './App.css';
import Login from './components/Login';
import Home from './screens/Home';
import LearnMore from './screens/LearnMore';
import Services from './screens/services';
import CropHealth from './screens/cropHealth'


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Farming from './screens/Farming';
import Contact from './screens/contact';
import ProfilePage from './screens/Profile';
import ImageUpload from './screens/ImageM';
import ConsultPage from './screens/consult';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/learnmore" element={<LearnMore/>}/>
        <Route path="/crophealth" element={<CropHealth/>}/>
        <Route path="/farming" element={<Farming/>}/>
        <Route path="/contact" element={<Contact/>}/>
       <Route path="/profile" element={<ProfilePage/>}/>
       <Route path="/image" element={<ImageUpload/>}/>
       <Route path="/consult" element={<ConsultPage/>}/>


      </Routes>
    </Router>
  );
}

export default App;
