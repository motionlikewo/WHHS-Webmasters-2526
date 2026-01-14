import type { Route } from "./+types/home";
import Header from "../pages/main-menu/Header/header";
import "../pages/main-menu/Header/header.css";
import "../pages/main-menu/main-menu.css";

import Content from "../pages/main-menu/Content_Preview/Content_Preview";
import "../pages/main-menu/Content_Preview/Content_Preview.css";

import "../Image_Slider/Image_Slider.css";
import ImageSlider from "../Image_Slider/Image_Slider"; 

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Sunshine Central" },
    { name: "description", content: "Welcome to Sunshine Central!" },
  ];
}
const tabs = ["Home","Spotlight","Tourism","Resources"];
import i1 from "../Image_Slider/Test_Images/FLHSMV.png";
import i2 from "../Image_Slider/Test_Images/WH.png";
import i3 from "../Image_Slider/Test_Images/US.png";
export default function Home() {
  var h = <Header title="SunShine Central" tabs={tabs} />;
 
  return <div> {h}
  <Content title={tabs[0]}/> 
  <Content title={tabs[1]}/>  
  <Content title={tabs[2]}/> 
  <Content title={tabs[3]}/>  <ImageSlider images={[i1, i2, i3]}></ImageSlider>

  </div>;
}
