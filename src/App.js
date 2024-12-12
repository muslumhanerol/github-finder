import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import HomePage from './Pages/HomePage/HomePage.js';
import SearchPage from './Pages/SearchPage/SearchPage.js';
import Footer from './Pages/Footer/Footer.js';
import { AppContext } from './Contexts/AppContext.js';
import { useEffect, useState } from 'react';
import Axios from 'axios';

function App() {
  //Arama sonuçlarının içinde tutulacağı state. Yeni arama yapılıp güncellendiğinde hemen render. Başlanğıç değeri boş dizi.
  //users değişken setUsers usersın değerini değiştiren fonk. //users=response.data
  const [users, setUsers] = useState([]);

  const [user, setUser] = useState({});

  const [userRepos, setUserRepos] = useState([]); //setUserRepos u kullanarak userRepos çekilen data ile doldurulacak.

  const [isClearButtonShow, setIsClearButtonShow] = useState(false);


  //401 hatası alırsan token değiştir, süresi bitmiştir.
  const token = "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"
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  }

  const searchUsers = (keyword) => {
    Axios
      .get(`https://api.github.com/search/users?q=${keyword}`, config) //Bu adresten verileri çek.
      .then((response) => { //Veriler çekildikten, get isteğinden sonra buradaki kodları çalıştır. response= get işleminin sonucu.
        setUsers(response.data.items);//users=response.data.items
        response.data.items.length == 0 ? setIsClearButtonShow(false) : setIsClearButtonShow(true); //Hepsini sil butonu dizi uzunluğu 0 old. görünmeyecek, değilse görünecek.

      })
  }

  //2. login buraya atanacak.
  const getUser = (userName) => {
    Axios
      .get(`https://api.github.com/users/${userName}`, config) //Burada userName göre aranacak.
      .then(response => { setUser(response.data) });
  }

  const getRepos = (userName) => {
    Axios
      .get(`https://api.github.com/users/${userName}/repos`, config) //Burada userName göre aranacak.
      .then(response => { setUserRepos(response.data) });
  }





  return (
    <>
      {/* mavi {} javascript kodu yazacağımızı söylüyoruz. sarı{} value yi obje olarak istiyoruz demek. */}
      <AppContext.Provider value={{ users, getUser, user, userRepos, getRepos, searchUsers, setUsers, isClearButtonShow, setIsClearButtonShow }}>
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

//UseParams=Routerları tanımlarken url yanında ekstra değişebilecek url bilgileri vermişsek onları obje içinden çıkarıp string olarak almamızı sağlar ör: :login.
//<Route path='/getuser/:login' element={<UserDetailsPage />} />

//Silme nedeni: isme göre arama yapmaya başladım.
// useEffect(() => { //App.js componenti sayfaya bağlandığında, ilk kez yerleştiği sırada searchUsers() çalışsın dedim, yani tüm userler api den çekilerek gösterilir.
//   searchUsers();
// }, []);