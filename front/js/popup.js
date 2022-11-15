let btn = document.getElementById("sendDonation");
let radios_btn = document.getElementsByClassName("form-check-input");
const form = document.getElementById("donation_form");
let formData = new FormData(form);

for (let i = 0; i < radios_btn.length; i++) {
    let radio_btn = radios_btn[i];
    radio_btn.addEventListener("click", (e) => {
        checkAmount(e);
    })
}

function checkAmount(e) {
    if(e.target.value !== undefined){
        btn.removeAttribute("disabled")
    }
}

btn.onclick = function sendDonation() {

    const formDataObj = {};

    formData.forEach((value, key) => (formDataObj[key] = value));

    formDataObj["sport"] = btn.getAttribute("data-sport");

    console.log(formDataObj)

    axios.post("http://localhost:3000/api/donation", formDataObj)
        .then(data => {
            console.log(data);
            location.reload();
        })

}