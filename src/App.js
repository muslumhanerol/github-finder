import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import HomePage from './Pages/HomePage/HomePage.js';
import SearchPage from './Pages/SearchPage/SearchPage.js';
import Footer from './Pages/Footer/Footer.js';
import { AppContext } from './Contexts/AppContext.js';
import { useState } from 'react';
import { Axios } from 'axios';

function App() {
  //Arama sonuçlarının içinde tutulacağı state. Yeni aram ayapılıp güncellendiğinde hemen render. Başlanğıç değeri boş dizi.
  const [users, setUsers] = useState([]);

  const searchUsers = (keyword) => {
    Axios
      .get('https://api.github.com/users') //Bu adresten verileri çek.
      .then((response) => { //Veriler çekildikten, get isteğinden sonra buradaki kodları çalıştır.

      })
  }

  return (
    <>
      <AppContext.Provider>
        <BrowserRouter>
          {/* Sayfanın heryerinden görünmesini istediğimiz componentler BrowserRouter içinde tanımlanır. */}
          <Header />

          {/* Rota tanımlaması yapmak istediğim elementleri Router içine yaz. */}
          <Routes>

            {/* Rotaların tek tek belirlendiği yer Route. path=url adresi element=açılacak sayfa. */}
            <Route path="/" element={<HomePage />} />
            <Route path='/search' element={<SearchPage />} />

          </Routes>
          <Footer />
        </BrowserRouter>
      </AppContext.Provider>
    </>
  );
}

export default App;
