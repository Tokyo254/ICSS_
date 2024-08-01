import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";


import ScrollToTopOnPageChange from "./components/ScrollToTopOnPageChange";
import BackToTop from "./components/BackToTop";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <ScrollToTopOnPageChange />
        <BackToTop />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
