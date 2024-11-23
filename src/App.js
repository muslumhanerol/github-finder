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
  const token = "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"
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  }
  //Arama sonuçlarının içinde tutulacağı state. Yeni aram ayapılıp güncellendiğinde hemen render. Başlanğıç değeri boş dizi.
  //users değişken setUsers usersın değerini değiştiren fonk. //users=response.data
  const [users, setUsers] = useState([]);

  const [user, setUser] = useState({});


  const searchUsers = (keyword) => {
    Axios
      .get('https://api.github.com/users', config) //Bu adresten verileri çek.
      .then((response) => { //Veriler çekildikten, get isteğinden sonra buradaki kodları çalıştır. response= get işleminin sonucu.
        setUsers(response.data);//users=response.data
      })
  }

  //2. login buraya atanacak.
  const getUser = (userName) => {
    Axios
      .get(`https://api.github.com/users/${userName}`, config) //Burada userName göre aranacak.
      .then(response => { setUser(response.data) });
  }

  useEffect(() => { //App.js componenti sayfaya bağlandığında, ilk kez yerleştiği sırada searchUsers() çalışsın dedim.
    searchUsers();
  }, []);

  return (
    <>
      {/* mavi {} javascript kodu yazacağımızı söylüyoruz. sarı{} value yi obje olarak istiyoruz demek. */}
      <AppContext.Provider value={{ users, getUser, user }}>
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

//UseParams=Routerları tanımlarken url yanında ekstra değişebilecek url bilgileri vermişsek onları obje içinden çıkarıp string olarak almamızı sağlar ör: :login.
//<Route path='/getuser/:login' element={<UserDetailsPage />} />