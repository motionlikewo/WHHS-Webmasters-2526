 sqlite = require("sqlite3").verbose()
const sql3 = sqlite

const DB = new sql3.Database("./mydata.db",sqlite.OPEN_READWRITE,connected)

function connected(err){
if(err){
    console.log(err.message)
    
}
console.log("Database connected")
}
let sql = 'CREATE TABLE IF NOT EXISTS locations(id INTEGER PRIMARY KEY, name TEXT NOT NULL, category TEXT NOT NULL, location TEXT NOT NULL, description TEXT NOT NULL,phone TEXT NOT NULL ) ';
DB.run(sql,[],(err)=>{ 
    if(err){
        console.log("Error making table")
        console.log(err.message)
         
        } 
    console.log("Table Created")})



const express = require("express");
const app = express(); 
app.use(express.json());



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

    //res.json(resources);
const sql = "SELECT * FROM locations"
let data = {locations:[]}

try{
DB.all(sql,[],(err,rows)=>{
  if (err){throw err}
  rows.forEach(row => {
    data.locations.push({
    id:          row.id,
    name:        row.name,
    category:    row.category,
    location:    row.location,
    description: row.description,
    phone:       row.phone

    })
  })
res.json(data)
console.log(data)
})



}
catch(err){
  console.log(err)
  res.status(467)
  res.send('{"status": "${err.message}"}')
}


})
app.post('/api',(req,res)=>{

    //res.json(resources);
    const sql = "INSERT INTO locations(name , category, location , description ,phone ) VALUES(?,?,?,?,?)"
    console.log('Test')
    console.log(req.body)

try{
DB.run(sql,[req.body.name , req.body.category, req.body.location, req.body.description , req.body.phone],function(err){

 if (err){throw err}
 res.status(201)
 let id = {status:201 , message :"New location add with ID of" + this.lastID}
res.json(id)
  

})


}
catch(err){
  console.log(err)
  res.status(468)
  res.send(err.message)
}
})


/*
app.get("/api",(req,res)=>{

    res.json({names:["Nick","Ted","Bob"]});
})
*/
app.listen(8080,()=>{
    console.log("Server Started on port http://localhost:8080/");
})


