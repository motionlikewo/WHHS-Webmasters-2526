import React from "react";

//Image
import exampleImage from "./Image_Slider/Test_Images/US.png";

//Header
import Header from "./Header/header";
import "./Header/header.css";

//CSS
import "./main-menu.css";

//Content Preview
import Content from "./Content_Preview/Content_Preview";
import "./Content_Preview/Content_Preview.css";

//Image Slider
import "app/Image_Slider/Image_Slider.css";
import ImageSlider from "../../Image_Slider/Image_Slider";

export function meta({}: MetaArgs) {
  return [
    { title: "Sunshine Central" },
    { name: "description", content: "Welcome to Sunshine Central!" },
  ];
}
const tabs = ["Home","Spotlight","Tourism","Resources"];
import i1 from "../Image_Slider/Test_Images/FLHSMV.png";
import i2 from "../Image_Slider/Test_Images/WH.png";
import i3 from "../Image_Slider/Test_Images/US.png";
import type { MetaArgs } from "react-router";
export default function Home() {
  var h = <Header title="SunShine Central" tabs={tabs} />;
 
  return <div> {h}
  <Content title={tabs[0]}/> 
  <Content title={tabs[1]}/>  
  <Content title={tabs[2]}/> 
  <Content title={tabs[3]}/>  <ImageSlider images={[i1, i2, i3]}></ImageSlider>

  </div>;
}


const ExamplePage: React.FC = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Welcome to Sunshine Central!</h1>

      <img
        src={exampleImage}
        alt="Example"
        style={styles.image}
      />

      <p style={styles.text}>
        test pagraph.
      </p>
    </div>
  );
};

//export default ExamplePage;

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    maxWidth: "900px",
    margin: "0 auto",
    padding: "2rem",
    textAlign: "center",
  },
  header: {
    marginBottom: "1rem",
  },
  image: {
    width: "100%",
    maxHeight: "350px",
    objectFit: "cover",
    borderRadius: "12px",
    marginBottom: "1.5rem",
  },
  text: {
    fontSize: "1rem",
  },
};
