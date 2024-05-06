import { useState } from "react";
import "./App.css";
import Section from "./components/section";
import Galery from "./components/galeria";
import Header from "./components/header";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <Header />
      <div className="content">
      <Section
        title={"Evento de Bolos"}
        description={"Bolos deliciosos"}
        date={"08/05/2024"}
        hour={"14:30"}
        local={"Em Breve"}
        image={"./banner1.png"}
      />
      <Galery />
      </div>
      <Footer />
    </>
  );
}

export default App;
