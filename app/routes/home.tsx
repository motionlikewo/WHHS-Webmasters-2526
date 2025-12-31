import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import Header from "../Header/header";
import "../Header/header.css";

import Content from "../Content_Section/Content_Section";
import "../Content_Section/Content_Section.css";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}
const tabs = ["Home","Spotlight","Tourism","Resources"];



export default function Home() {
  var h = <Header title="SunShine Central" tabs={tabs} />;
 
  return <div> {h} <Welcome /> 
  <Content title={tabs[0]}/> 
  <Content title={tabs[1]}/>  
  <Content title={tabs[2]}/> 
  <Content title={tabs[3]}/>  

  </div>;
}
