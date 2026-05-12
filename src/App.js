import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Navbar from './Shared/Components/Scroll/Navbar/Navbar';
import Footer from './Shared/Components/Footer/Footer';
import Hero from './Shared/Components/Hero/Hero';
import Prouducts from './Shared/Components/Products/Prouducts';
import Landing from './Shared/Components/Landing/Landing';
import States from './Shared/Components/States/States';
import Experience from './Shared/Components/Experience/Experience';
import AboutUs from './Shared/Components/AboutUs/AboutUs';
import Services from './Shared/Components/Services/Services';
import LiveGallery from './Shared/Components/LiveGallery/LiveGallery';
import { Route, Routes } from 'react-router-dom';
import ProductDetails from './Shared/Components/Products/ProductDetails/ProductDetails';
import Terms from './Shared/Routes/Terms';
import Privacy from './Shared/Routes/Privacy';
function App() {

   const {i18n } = useTranslation();
  
  useEffect(() => {
    const isArabic = i18n.language === "ar";

    document.documentElement.lang = isArabic ? "ar" : "en";
    document.documentElement.dir = isArabic ? "rtl" : "ltr";

    document.body.classList.toggle("lang-ar", isArabic);
    document.body.classList.toggle("lang-en", !isArabic);
  }, [i18n.language]);

  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <AboutUs />
              <Services />
              <Prouducts />
              <Landing />
              <States />
              <Experience />
              <LiveGallery />
            </>
          }
        />

        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
