import "./css/style.css";

import About from "./Components/About";
import Booking from "./Components/Booking";
import Features from "./Components/Features";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Navigation from "./Components/Navigation";
import Stories from "./Components/Stories";
import Tours from "./Components/Tours";
import Popup from "./Components/Popup";

function App() {
  return (
    <div className="app">
      <Navigation />
      <Header />
      {<main>
        <About />
        <Features />
        <Tours />
        <Stories />
        <Booking />
      </main>}
      <Footer />
      <Popup />
    </div>
  );
}

export default App;
