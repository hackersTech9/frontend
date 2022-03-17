import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from 'Pages/LoginPage';
import MainPage from "Pages/MainPage";
import NotFoundPage from "Pages/NotFoundPage";

function AppRouter() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPage />}/>
        <Route path='/home' element={<MainPage />}/>
        <Route path='*' element={<NotFoundPage />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter