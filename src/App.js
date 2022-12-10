import React , {useState, Suspense} from "react";
import Header from "./Layout/Header/Header";
import Home from "./pages/Home/Home";
import './scss/style.scss'
import Layout from "./Layout/Layout";
import About from "./pages/Home/About";
import Catalog from "./pages/Catalog/Catalog";
import { Route, Routes } from "react-router-dom";
import Footer from "./Layout/Footer/Footer";
import Custom from "./pages/Custom/Custom";
import NotFound from "./pages/NotFound/NotFound";
import './i18n'
import Questions from "./pages/Questions/Questions";


function App() {
  return (
  <Suspense fallback={"...loading"}>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route path="" element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="catalog" element={<Catalog/>}/>
        <Route path='questions' element={<Questions/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Route>
      <Route path="custom" element={<Custom/>}/>
    </Routes>
  </Suspense>
  );
}

export default App;
