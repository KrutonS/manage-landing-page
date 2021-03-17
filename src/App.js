import "./reset.css";
import "./App.css";

import AppHeader from './appHeader/header';
import Footer from './footer/footer';
import Main from "./main/main";

function App() {
  return (
    <div className="App">
      <AppHeader />
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
