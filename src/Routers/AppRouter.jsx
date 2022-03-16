import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from 'Pages/LoginPage';
import MainPage from "Pages/MainPage";
import { NotFound } from "Components/NotFound/NotFoundComponent";

function AppRouter() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPage />}/>
        <Route path='/home' element={<MainPage />}/>
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter