import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import UploadVideoPage from "./pages/UploadVideoPage/UploadVideoPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/videos/:id" element={<HomePage />} />
          <Route path="/uploadvideo" element={<UploadVideoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
