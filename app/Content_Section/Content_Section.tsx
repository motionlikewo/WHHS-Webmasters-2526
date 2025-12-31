import React from "react";

interface Content_Section_Props {
    children ?: React.ReactNode;
    title : string;
}

function Content_Section({ children,title } : Content_Section_Props){ 
const childexists = React.Children.count(children) > 0;
return<div>
    
      
        <section id = {'section'+title} >
            <h2>{title}</h2>
            {childexists ? children : <p> This is the {title} section.</p> }   
            <br></br>
            <hr className="secetionbreak"></hr>
        </section>


</div>

} export default Content_Section;