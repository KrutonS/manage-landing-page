import "./reset.css";
import "./App.css";

import { useEffect, useState } from "react";

import AppHeader from "./appHeader/header";
import Footer from "./footer/footer";
import Main from "./main/main";

import { MobileScreenContext } from "./globals";
function useCheckIfMobileState() {
  const queryList = window.matchMedia("(min-width:1440px)");
  const [isMobile, setIsMobile] = useState(!queryList.matches);
  useEffect(() => {
    const listener = () => setIsMobile(!queryList.matches);
    queryList.addEventListener("change", listener);
    return () => queryList.removeEventListener("change", listener);
  });
  return isMobile;
}
function App() {
  return (
    <div className='App'>
      <MobileScreenContext.Provider value={useCheckIfMobileState()}>
        <AppHeader />
        <Main />
        <Footer />
      </MobileScreenContext.Provider>
    </div>
  );
}

export default App;
