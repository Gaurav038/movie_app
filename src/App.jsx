import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { getApiConfiguration } from './store/homeSlice';
import { fetchDataFromApi } from './utils/api';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home'
import Details from "./pages/details/Details.jsx";


function App() {

  const dispatch = useDispatch();
  const { url } = useSelector((state) => state.home);
  
  console.log(url);

    useEffect(() => {
        fetchApiConfig();
        // genresCall();
    }, []);

    const fetchApiConfig = () => {
        fetchDataFromApi("/configuration").then((res) => {
            console.log(res);

            const url = {
                backdrop: res.images.secure_base_url + "original",
                poster: res.images.secure_base_url + "original",
                profile: res.images.secure_base_url + "original",
            };

            dispatch(getApiConfiguration(url));
        });
    };
  

  return (
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:mediaType/:id" element={<Details />} />
        </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
