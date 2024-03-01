import { BrowserRouter, Routes,Route } from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import UploadVideo from './pages/UploadVideo/UploadVideo';

function App() {

  return (
    <div className="App">
      
      <BrowserRouter>
      <Header />
      <Routes>
      <Route path="/" element={<HomePage />} /> 
      <Route path="/:id" element={<HomePage />} />
       <Route path="/uploadvideo" element={<UploadVideo />} />
      </Routes>
      </BrowserRouter>
     
     
    </div>
  );

}

export default App;
