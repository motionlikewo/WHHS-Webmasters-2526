//run with {node dataFetch.cjs}
const fs = require('fs');

const API_KEY = 'AIzaSyCpbI6ABrKBiEFENHRXcPrGP3M9ISP0Q2c';
const LOCATION = '28.5383,-81.3792';
const RADIUS = '10000'; // 10km
const TYPE = 'food_bank';

async function getResources() {
  const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${LOCATION}&radius=${RADIUS}&type=${TYPE}&key=${API_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    const simplifiedData = data.results.map(place => ({
      id: place.place_id,
      name: place.name,
      lat: place.geometry.location.lat,
      lng: place.geometry.location.lng,
      address: place.vicinity,
      rating: place.rating
    }));

    fs.writeFileSync('./src/data/resources.json', JSON.stringify(simplifiedData, null, 2));
    console.log('Success! Local resources updated.');
  } catch (error) {
    console.error('Error fetching from Google servers:', error);
  }
}

getResources();