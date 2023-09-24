import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import Auth from "../pages/Auth/auth";

const RoutesApp = () => {
	return(
			<BrowserRouter>
        <Routes>
          <Route path='/home' element={ <Home /> } exact/>
          <Route path='/login' element={ <Auth /> }  />
        </Routes>
      </BrowserRouter>
	)
}

export default RoutesApp;