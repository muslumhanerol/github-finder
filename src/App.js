import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import HomePage from './Pages/HomePage/HomePage.js';
import SearchPage from './Pages/SearchPage/SearchPage.js';

function App() {
  return (
    <>
      <BrowserRouter>
        {/* Sayfanın heryerinden görünmesini istediğimiz componentler BrowserRouter içinde tanımlanır. */}
        <Header />

        {/* Rota tanımlaması yapmak istediğim elementleri Router içine yaz. */}
        <Routes>

          {/* Rotaların tek tek belirlendiği yer Route. */}
          <Route path="/" element={<HomePage />} />
          <Route path='/search' element={<SearchPage />} />

        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
