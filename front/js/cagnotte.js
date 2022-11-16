let path = window.location.pathname;
let page = path.split("/").pop();

axios.get("https://jo-pour-tous-api.jo4marseille.fr//api/donation/amount/" + page.slice(0, -5))
.then(data => {
    let info = data.data;

    document.getElementById("cagnotte").innerHTML = info.amount + "€";
    document.getElementById("contributor").innerHTML = info.contributor;

    let don = info.amount;
    let objetctif = 5000;
    let poursentage = (don*100)/objetctif
    console.log(poursentage);
    document.getElementById("progress-bar").style.width= poursentage +"%"

})

function rebours(){
    let date_act = new Date()
    let date_fin = new Date('July 25, 2024 23:59:59')
    let total_secondes = (date_fin - date_act) / 1000
    let compteur = 0;

    if(total_secondes > 0){

        let nb_jours = Math.floor(total_secondes / (60 * 60 * 24));
        let nb_heures = Math.floor((total_secondes - (nb_jours * 60 * 60 * 24)) / (60 * 60));
        let nb_minutes = Math.floor((total_secondes - ((nb_jours * 60 * 60 * 24 + nb_heures * 60 * 60))) / 60);
        let nb_secondes = Math.floor(total_secondes - ((nb_jours * 60 * 60 * 24 + nb_heures * 60 * 60 + nb_minutes * 60)));
        compteur =  nb_jours +"Jour "+ nb_heures +"H "+ nb_minutes  +"min "+ nb_secondes+"s";
    }
    document.getElementById("comp").innerHTML=compteur;
    setTimeout("rebours();",1000);

}
rebours();