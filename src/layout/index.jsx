import React from "react";
import { Helmet } from '@dr.pogodin/react-helmet';
import Topbar from "./topbar";
import Footer from "./footer";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>Zelion Store</title>
      </Helmet>
      <Topbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;