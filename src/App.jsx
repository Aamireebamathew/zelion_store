import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from '@dr.pogodin/react-helmet';
import HomePage from "./home";
import ProductPage from "./product";
import Layout from "./layout"; // layout/index.jsx
import './style.css';
import ProductContextProvider from "./CartContext.jsx";
import WishlistProvider from "./WishlistContext.jsx"; 
import MyCart from "./cart";
import ContactPage from "./pages/ContactPage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import WishlistPage from "./pages/Wishlist.jsx";
import { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <BrowserRouter>
      <HelmetProvider>
        <ProductContextProvider>
          <WishlistProvider> 
            <Toaster position="top-right" />
            <Layout>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/cart" element={<MyCart />} />
                <Route path="/product/:id" element={<ProductPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/wishlist" element={<WishlistPage />} />
              </Routes>
            </Layout>
          </WishlistProvider>
        </ProductContextProvider>
      </HelmetProvider>
    </BrowserRouter>
  );
};

export default App;
