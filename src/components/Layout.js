import React, { useEffect, useState } from "react";
import Header from "./header";
import Footer from "./footer";

function Layout({ children }) {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  const [dark, setDark] = useState(false);
  const darkHandler = () => {
    setDark((prev) => !prev);
  };

  return (
    <div>
      <Header dark={dark} darkHandler={darkHandler} />

      <div className="container font-mont">{children}</div>

      <Footer />
    </div>
  );
}

export default Layout;
