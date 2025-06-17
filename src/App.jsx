import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from '@dr.pogodin/react-helmet';

import HomePage from "./home";
import ProductPage from "./product";
import Layout from "./layout"; // ✅ layout/index.jsx
import './style.css';
import ProductContextProvider from "./CartContext.jsx";
import MyCart from "./cart";
import ContactPage from "./pages/ContactPage.jsx"; // if created
import ProfilePage from "./pages/ProfilePage.jsx"; // if created

const App = () => {
  return (
    <BrowserRouter>
      <HelmetProvider>
        <ProductContextProvider>
          <Layout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/cart" element={<MyCart />} />
              <Route path="/product/:id" element={<ProductPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/profile" element={<ProfilePage />} />
            </Routes>
          </Layout>
        </ProductContextProvider>
      </HelmetProvider>
    </BrowserRouter>
  );
};

export default App;
