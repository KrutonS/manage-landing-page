import "./reset.css";
import "./App.css";

import { useEffect, useState } from 'react';

import AppHeader from './appHeader/header';
import Footer from './footer/footer';
import Main from "./main/main";

import { MobileScreenContext, checkIfMobile } from './globals';

function App() {
  const [isMobile, setIsMobile] = useState(checkIfMobile());
  useEffect(() => {
    let timeoutId = null;
    function resizeListener() {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => setIsMobile(checkIfMobile), 200);
      setIsMobile(checkIfMobile);
    }

    window.addEventListener("resize", resizeListener);
    return () => window.removeEventListener("resize", resizeListener);
  });
  return (
    <div className="App">
      <MobileScreenContext.Provider value={isMobile}>
        <AppHeader />
        <Main />
        <Footer />
      </MobileScreenContext.Provider>

    </div>
  );
}

export default App;
