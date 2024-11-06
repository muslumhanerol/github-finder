// 1.Adım AppContext.js klasörü oluşturuldu, ardından import ve vağlam oluşturulup dışarı export edildi. App.js de tüm yapıyı AppContext.Provider içine alıyoruz.

import { createContext } from "react";
const AppContext = createContext(); //Bağlam oluşturuldu.
export { AppContext }; //Dışarı export edildi.