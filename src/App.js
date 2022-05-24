import Header from "./components/Header";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BusinessInfo from "./components/BusinessInfo";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<BusinessInfo />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
