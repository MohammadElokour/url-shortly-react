import React from "react";
import "@material-tailwind/react/tailwind.css";
import "./index.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";

function App() {
  return (
    <div className="m-auto max-w-5xl overflow-hidden">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
