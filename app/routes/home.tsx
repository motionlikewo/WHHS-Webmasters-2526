import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import Header from "../Header/header";
import "../Header/header.css";

import Content from "../Content_Preview/Content_Preview";
import "../Content_Preview/Content_Preview.css";

import "../Image_Slider/Image_Slider.css";
import ImageSlider from "../Image_Slider/Image_Slider"; 

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}
const tabs = ["Home","Spotlight","Tourism","Resources"];
import i1 from "../Image_Slider/Test_Images/FLHSMV.png";
import i2 from "../Image_Slider/Test_Images/WH.png";
import i3 from "../Image_Slider/Test_Images/US.png";
export default function Home() {
  var h = <Header title="SunShine Central" tabs={tabs} />;
 
  return <div> {h} <Welcome /> 
  <Content title={tabs[0]}/> 
  <Content title={tabs[1]}/>  
  <Content title={tabs[2]}/> 
  <Content title={tabs[3]}/>  <ImageSlider images={[i1, i2, i3]}></ImageSlider>

  </div>;
}
