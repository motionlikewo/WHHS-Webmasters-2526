/*

Example Code


 Getting Locations

const res = fetch("http://localhost:8080/api/locations", {
  method: "GET"
  })
  console.log(res)
  res = object with locations value which contains an array of locations and data

  res.locations[i].id
  res.locations[i].name
  res.locations[i].category
  res.locations[i].address
  res.locations[i].description
  res.locations[i].phone


Sumbitting submissions

 const data = {name:"Test" ,category :"test" , address:"test" , description:"test"  , phone:"test", hours:'test'}

const res =  fetch("http://localhost:8080/api/submit", {
  method: "POST",
  body: JSON.stringify(data),
  headers: {
    "Content-Type": "application/json",
  }
 
});
*/

 // res = which contains an id of object created 


  

