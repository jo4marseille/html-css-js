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
        center: [5.381944, 43.261061],
        zoom: 12
    });

    map.loadImage(
        'data:image/png;base64,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',
        (error, image) => {
            if (error) throw error;

// Add the image to the map style.
            map.addImage('anneau', image);

// Add a data source containing one point feature.
            map.addSource('point', {
                'type': 'geojson',
                'data': {
                    'type': 'FeatureCollection',
                    'features': [
                        {
                            'type': 'Feature',
                            'geometry': {
                                'type': 'Point',
                                'coordinates': [5.394641, 43.269605]
                            }
                        }
                    ]
                }
            });
            map.addLayer({
                'id': 'points',
                'type': 'symbol',
                'source': 'point', // reference the data source
                'layout': {
                    'icon-image': 'anneau', // reference the image
                    'icon-size': 0.1
                }
            });
        });

    const popup1 = new mapboxgl.Popup({offset: 25}).setText(
        'Base du Roucas Blanc - 12 min'
    );

    const popup2 = new mapboxgl.Popup({offset: 25}).setText(
        'Stade Vélodrome - 10 min'

    );

    const olympics = {
        type: 'FeatureCollection',
        features: [
            {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [5.371536, 43.266659]
                },
                properties: {
                    title: 'Mapbox',
                    description: 'Roucas Blanc',
                    popup:popup1
                }
            },
            {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [5.394641, 43.269605]
                },
                properties: {
                    title: 'Mapbox',
                    description: 'Vélodrome',
                    popup: popup2
                }
            }
        ]
    };

    for (const feature of olympics.features) {
        const el = document.createElement('div');
        el.className = 'marker';

        new mapboxgl.Marker(el)
            .setLngLat(feature.geometry.coordinates)
            .setPopup(feature.properties.popup)
            .addTo(map);
    }


     const marker1 = new mapboxgl.Marker({ "color": "#000000" })
         .setLngLat([5.381944, 43.261061])
         .addTo(map);


}




