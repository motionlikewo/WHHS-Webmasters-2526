const express = require("express");
const app = express(); 
const mongoose = require("mongoose")

mongoose.connect('mongodb://localhost/locations')

 const resources = { data:[
  {
    id: 1,
    name: "Sunshine State Food Bank",
    category: "Food Assistance",
    location: "Orlando",
    description: "Providing fresh produce and canned goods to Central Florida families.",
    phone: "407-555-0101"
  },
  {
    id: 2,
    name: "Everglades Conservation Corps",
    category: "Environment",
    location: "Miami",
    description: "Volunteer opportunities to protect Florida's wetlands and wildlife.",
    phone: "305-555-0199"
  },
  {
    id: 3,
    name: "Florida Youth Tech Initiative",
    category: "Education",
    location: "Tampa",
    description: "After-school coding and robotics programs for high school students.",
    phone: "813-555-0123"
  },
  {
    id: 4,
    name: "Gulf Coast Mental Health",
    category: "Health",
    location: "Pensacola",
    description: "Free and low-cost counseling services for residents.",
    phone: "850-555-0144"
  },
  {
    id: 5,
    name: "Space Coast Senior Support",
    category: "Senior Services",
    location: "Melbourne",
    description: "Transportation and meal delivery for seniors in Brevard County.",
    phone: "321-555-0188"
  },
  {
    id: 6,
    name: "Jacksonville Housing Alliance",
    category: "Housing",
    location: "Jacksonville",
    description: "Emergency shelter and affordable housing placement.",
    phone: "904-555-0166"
  }
]};

app.get('/api',(req,res)=>{

    res.json(resources);
})

/*
app.get("/api",(req,res)=>{

    res.json({names:["Nick","Ted","Bob"]});
})
*/
app.listen(8080,()=>{
    console.log("Server Started on port http://localhost:8080/");
})
