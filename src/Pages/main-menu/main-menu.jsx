import React from "react";

//Image
import exampleImage from "../../Image_Slider/Test_Images/US.png";

//Header
import Header from "./Header/header";
import "./Header/header.css";

//CSS
import "./main-menu.css";

//Content Preview
import Content from "./Content_Preview/Content_Preview";
import "./Content_Preview/Content_Preview.css";

//Image Slider
import "../../Image_Slider/Image_Slider.css";
import ImageSlider from "../../Image_Slider/Image_Slider";
import i1 from "../../Image_Slider/Test_Images/FLHSMV.png";
import i2 from "../../Image_Slider/Test_Images/WH.png";
import i3 from "../../Image_Slider/Test_Images/US.png";

export function meta() {
  return [
    { title: "Sunshine Central" },
    { name: "description", content: "Welcome to Sunshine Central!" },
  ];
}

const tabs = ["Home", "Spotlight", "Tourism", "Resources"];

export default function Home() {
  return (
    <div className="main-menu-container"> 
      <Header title="SunShine Central" tabs={tabs} />
      
      <Content title={tabs[0]} />
      <Content title={tabs[1]} />
      <Content title={tabs[2]} />
      <Content title={tabs[3]} />
      
      <ImageSlider images={[i1, i2, i3]} />

      <h1 className="main-menu-header">Welcome to Sunshine Central!</h1>
      <img src={exampleImage} alt="Example" className="main-menu-image" />
      <p className="main-menu-text">test paragraph.</p>
    </div>
  );
}
