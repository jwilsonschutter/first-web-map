mapboxgl.accessToken = 'pk.eyJ1IjoiamFtZXN3aWxzb25zY2h1dHRlciIsImEiOiJja2xiamw0dTIwcjZlMm5xZXR1Z2oyNTZ0In0.ykjwA7KZIseTEFrKv-4aDw';

var options = {
  container: 'mapcountainer',
  style: 'mapbox://styles/mapbox/dark-v10',
  center: [-74.0060, 40.7128],
  zoom: 10
};

var map = new mapboxgl.Map(options);

var navigators = new mapboxgl.NavigationControl();
map.addControl(navigators, 'bottom-right');

//adding a marker

var bigParky = [
  {
    name: 'PELHAM BAY PARK',
    point: [-73.8104, 40.8677],
    info: 'In the Last Quarter of 2020 this park had 152 Felonies, making it the most dangerous park in NYC as of the last quarter of 2020',
    ranky: '1'
  },
  {
    name: 'VAN CORTLANDT PARK',
    point: [-73.88825, 40.8972],
    info: 'In the Last Quarter of 2020 this park had 15 Felonies, making it the second most dangerous park in NYC as of the last quarter of 2020',
    ranky: '2'
  },
  {
    name: 'ROCKAWAY BEACH AND BOARDWALK',
    point: [-73.79084, 40.5888],
    info: 'In the Last Quarter of 2020 this park had 7 Felonies, making it the third most dangerous park in NYC as of the last quarter of 2020',
    ranky: '3'
  },
  {
    name: 'FRESHKILLS PARK',
    point: [-74.1880, 40.5772],
    info: 'In the Last Quarter of 2020 this park had 6 Felonies, making it the fourth most dangerous park in NYC as of the last quarter of 2020',
    ranky: '4'
  },
  {
    name: 'FLUSHING MEADOWS CORONA PARK',
    point: [-73.8428, 40.7400],
    info: 'In the Last Quarter of 2020 this park had 5 Felonies, making it the fith most dangerous park in NYC as of the last quarter of 2020',
    ranky: '5'
  }
]


bigParky.forEach(function(bigParky) {
console.log(bigParky.name, bigParky.point, bigParky.info, bigParky.ranky)

var markercolor = '#004a5a'

if (bigParky.ranky === '2'){
  markercolor = '#007b7e'
}

if (bigParky.ranky === '3'){
  markercolor = '#07b089'
}

if (bigParky.ranky === '4'){
  markercolor = '#55e383'
}

if (bigParky.ranky === '5'){
  markercolor = '#d1ffc9'
}

new mapboxgl.Marker({
color: markercolor
})
  .setLngLat(bigParky.point)
  .setPopup(new mapboxgl.Popup().setHTML(`
    <div style="">
      <h3 style="color: #4682b4;
      font-family: sans-serif;
      font-size: 20px;
      text-align: center">${bigParky.name}</h3>
      <p><b>${bigParky.info}</b></p>
    </div>`))
  .addTo(map);
});

document.getElementById('center').addEventListener('click', function() {
  map.flyTo({
    center: [-74.0060, 40.7128],
    zoom: 10,
    speed: 0.2,
    curve: 1,
    essential: true
  })
});


  //set up dummy data
// the sethmtl changes it to data.name it's pretty chill
//forEach sets an array, so the first time the function runs it's equal to a certain object, the 2nd time it's the next, 3rd it's the next


document.getElementById('toplegend').addEventListener('click', function() {
  var remove = document.getElementById("onlegend");
  if (remove.style.display === "none") {
    remove.style.display = "block";
  } else {
    remove.style.display = "none";
  }
});

/*shoutout to w3 schools for teaching me this https://www.w3schools.com/howto/howto_js_toggle_hide_show.asp*/
