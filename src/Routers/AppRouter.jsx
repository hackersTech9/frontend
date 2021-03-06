import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from 'Pages/LoginPage';
import MainPage from "Pages/MainPage";
import NotFoundPage from "Pages/NotFoundPage";
import EditUserPage from "Pages/EditUserPage";
import ViewContentPage from "Pages/ViewContentPage";

function AppRouter() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPage />}/>
        <Route path='/home' element={<MainPage />}/>
        <Route path='/edituser' element={<EditUserPage />}/>
        <Route path='/play' element={<ViewContentPage />} />
        <Route path='*' element={<NotFoundPage />}/>
      </Routes>
    </BrowserRouter>
  )
};

export default AppRouter;