/*--------------------------------------------------------------------------------
    
    Map-Provider
    Kunal Mittal

-----------------------------------------------------------------------------------*/
'use strict';

function onEvent(event, selector, callback) {
    return selector.addEventListener(event, callback);
}

function getElement(selector, parent = document) {
    return parent.getElementById(selector);

}

function select(selector, parent = document) {
    return parent.querySelector(selector);
}


function onEvent (event, selector, callback) {
    return selector.addEventListener(event,callback);
}
function  select(selector, parent = document){
    return parent.querySelector(selector);
    }


const modal = select('.section');
const morebtn = select('.more-btn');
const text = select('.text');
 
let n = 0;
const content = ['Want to Explore?','Locate yourself, have fun!' ,'We want to inspire adventure', 'We offer a better understanding of our world','Based in Winnipeg'];

function lets()  {
modal.classList.add('lessdelay');
}
function lets2(){
    morebtn.classList.add('is-visible');
}

window.addEventListener('load', () =>{

lets();
lets2();
});

onEvent('click', morebtn, function () {
    morebtn.innerText = (n === 2) ? 'Again?' : 'More'; 
 if ( n === 3) {
  text.innerHTML = content[ n = 0 ];
 return;
}

text.innerHTML = content[ ++n ];

});
mapboxgl.accessToken = 'pk.eyJ1Ijoia3VuYWxtaXR0YWwiLCJhIjoiY2xiZ3J2bzEzMGEzejNwbW1idHVrYmt2ayJ9.1JMJDm081dXamlqHXNMYWg';

function getLocation(position) {
    const { altitude, latitude, longitude } = position.coords;

    console.log(
        `Altitude: ${altitude ? altitude : 'not avialable'}\n` +
        `Latitude: ${latitude}\n` +
        `Longitude: ${longitude}`
    );
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v12',
        attributionControl: true,
        center: [longitude, latitude],
        zoom: 9
    })
    .addControl(new mapboxgl.AttributionControl({
        customAttribution: 'Map design by me'
    }));
    // Set marker options.
    const marker = new mapboxgl.Marker({
        color: "#000",
        draggable: false
        }).setLngLat([longitude, latitude])
        .addTo(map);

       
}

// getCurrentPosition() passes a 'PositionError' object to its 'failure' callback
function errorHandler(error) {
    console.log(error.message);
}

const options = {
    enableHighAccuracy: true
};

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
        getLocation,
        errorHandler,
        options);
} else {
    console.log('Geolocation is not supported by your browser');
}



