let btn = document.getElementById("sendDonation");

btn.onclick = function sendDonation() {

    const form = document.getElementById("donation_form");
    let formData = new FormData(form);
    const formDataObj = {};

    formData.forEach((value, key) => (formDataObj[key] = value));

    formDataObj["sport"] = btn.getAttribute("data-sport");

    console.log(formDataObj)

    axios.post("http://localhost:3000/api/donation", formDataObj)
        .then(data => {
            console.log(data);
        })

}