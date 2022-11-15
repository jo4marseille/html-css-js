function getLocation() {
    var checkbox = document.getElementById('geolocation');
    console.log(checkbox)
    if (checkbox.checked === true) {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            x.innerHTML = "Geolocation is not supported by this browser.";
        }
    } else {
        console.log('delete geolocation');
    }
}

selectedTags = [];

function showPosition(position) {
    console.log(position);
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
}

const spans = document.getElementsByClassName("tag");

const spanPressed = e => {
    if (e.target.classList.contains('selected')) {
        e.target.classList.remove('selected');
        return;
    }

    selectedTags.push(e.target.id);
    e.target.classList.add('selected');
}

for (let span of spans) {
    span.addEventListener("click", spanPressed);
}

var checkList = document.getElementById('list1');
checkList.getElementsByClassName('anchor')[0].onclick = function(evt) {
    if (checkList.classList.contains('visible'))
        checkList.classList.remove('visible');
    else
        checkList.classList.add('visible');
}
