let latitude = 21;
let longitude = 41;

var x = document.getElementById("demo");
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;

    mapboxgl.accessToken = 'pk.eyJ1Ijoicm9tYW5la2xpIiwiYSI6ImNrc3BybmNnaDA2N3czMnRoeGU5ODVtdmcifQ.2pe8ZRcAKFcBbGA9_f7ZiA';
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/romanekli/cksxjct3m6nwg18pfmhyuusra',
        center: [longitude, latitude],
        zoom: 8
    });

    const popup1 = new mapboxgl.Popup({ offset: 25 }).setText(
        'Stade Vélodrome.'
    );

    const popup2 = new mapboxgl.Popup({ offset: 25 }).setText(
        'Stade Maurice David.'
    );

    const marker = new mapboxgl.Marker({ "color": "black" })
        .setLngLat([longitude, latitude])
        .addTo(map);

    const marker1 = new mapboxgl.Marker({ "color": "#fcbf31" })
        .setLngLat([5.394641, 43.269605])
        .setPopup(popup1)
        .addTo(map);

    const marker2 = new mapboxgl.Marker({ "color": "#fcbf31" })
        .setLngLat([5.423159, 43.52366])
        .setPopup(popup2)
        .addTo(map);

}




