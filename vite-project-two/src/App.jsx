import { useState } from "react";
import NavBar from "./pages/NavBar";
import Slider from "./pages/mainSection/Slider";
import Section from "./pages/mainSection/Section";
import ImageSlider from "./pages/mainSection/Slider";

function App() {
  return (
    <div className="bg-black h-screen w-full flex flex-col">
      <NavBar />
      <div className="flex-grow flex ">
        <Section />
      </div>
      <ImageSlider />
    </div>
  );
}

export default App;
