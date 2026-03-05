//run with {node dataFetch.cjs}
require('dotenv').config();

const fs = require('fs');
const API_KEY = process.env.APIkey;
var LOCATION = '28.5383,-81.3792';
var RADIUS = '10000'; // 10km
var TYPE = 'food_bank'; //resource you are searching for

async function getResources() { //ahhhh
  const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${LOCATION}&radius=${RADIUS}&type=${TYPE}&key=${API_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

      const simplifiedData = data.results.map(place => (
        {
          id: place.place_id,
          name: place.name,
          lat: place.geometry.location.lat,
          lng: place.geometry.location.lng,
          address: place.vicinity,
          rating: place.rating || "N/A",
          category: place.types[0] // Gets primary category
        }
      ));

    fs.writeFileSync('./src/data/resources.json', JSON.stringify(simplifiedData, null, 2));
    console.log('Success! Local resources updated.');
  } catch (error) { //error catch
    console.error('Error fetching from Google servers:', error);
  }

}



getResources();