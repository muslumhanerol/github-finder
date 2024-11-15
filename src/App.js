import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import HomePage from './Pages/HomePage/HomePage.js';
import SearchPage from './Pages/SearchPage/SearchPage.js';
import UserDetailsPage from './Pages/UserDetailsPage/UserDetailsPage.js';
import Footer from './Pages/Footer/Footer.js';
import { AppContext } from './Contexts/AppContext.js';
import { useEffect, useState } from 'react';
import Axios from 'axios';

function App() {
  //Arama sonuçlarının içinde tutulacağı state. Yeni aram ayapılıp güncellendiğinde hemen render. Başlanğıç değeri boş dizi.
  const [users, setUsers] = useState([]); //users değişken setUsers usersın değerini değiştiren fonk.
  //users=response.data
  const searchUsers = (keyword) => {
    Axios
      .get('https://api.github.com/users') //Bu adresten verileri çek.
      .then((response) => { //Veriler çekildikten, get isteğinden sonra buradaki kodları çalıştır. response= get işleminin sonucu.
        setUsers(response.data);//users=response.data
      })
  }

  useEffect(() => { //App.js componenti sayfaya bağlandığında, ilk kez yerleştiği sırada searchUsers() çalışsın dedim.
    searchUsers();
  }, []);

  return (
    <>
      {/* mavi {} javascript kodu yazacağımızı söylüyoruz. sarı{} value yi obje olarak istiyoruz demek. */}
      <AppContext.Provider value={{ users }}>
        <BrowserRouter>
          {/* Sayfanın heryerinden görünmesini istediğimiz componentler BrowserRouter içinde tanımlanır. */}
          <Header />

          {/* Rota tanımlaması yapmak istediğim elementleri Router içine yaz. */}
          <Routes>

            {/* Rotaların tek tek belirlendiği yer Route. path=url adresi element=açılacak sayfa. */}
            <Route path="/" element={<HomePage />} />
            <Route path='/search' element={<SearchPage />} />
            <Route path='/getuser/:login' element={<UserDetailsPage />} />

          </Routes>
          <Footer />
        </BrowserRouter>
      </AppContext.Provider>
    </>
  );
}

export default App;

//UseParams=Routerları tanımlarken url yanında ekstra değişebilecek url bilgileri vermişsek onları obje içinde almamızı sağlar ör: :login.
//<Route path='/getuser/:login' element={<UserDetailsPage />} />