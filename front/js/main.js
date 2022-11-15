
const select = document.querySelector("name")

const monHeader = new Headers();

monHeader.append('Content-Type', 'application/json');

const myInit = { method: 'GET',
               headers: monHeader
                };

fetch("/categories.json", myInit)
.then(async function(response) {
    const score = await response.json();
    console.log(score)
  return score.sportCollectif;
  

})
.then(function(sportCollectif) {
    for (const element of sportCollectif){
        const input = document.createElement("input");
         input.type = "checkbox"
         input.id = element._id
         const label= document.createElement("label");
         label.append(element.name)
         label.setAttribute("for", element._id)
         const div = document.querySelector("#name")
           div.append(label)
         div.append(input)
    }
    
     awaitMySon()
   
  });
//   Sport Individuel

fetch("/categories.json", myInit)
  .then(async function(response) {
    const score = await response.json();
    console.log(score)
  return score.sportIndividuel;
  

})
.then( function( sportIndividuel) {
    for (const element of sportIndividuel){
        const input = document.createElement("input");
         input.type = "checkbox"
         input.id = element._id
         input.className = "box"
         const label= document.createElement("label");
         label.append(element.name)
         label.setAttribute("for", element._id)
         const div = document.querySelector("#sport")
           div.append(label)
         div.append(input) 
    }
    awaitMySon()
   
  });
function awaitMySon() {
    const checkboxListener = document.getElementsByClassName("box")
    Array.from(checkboxListener).forEach(checkbox => {
        checkbox.addEventListener("change", function(e){
            console.log("je clique", e);
            if (e.target.checked) {
                console.log("ici", e.target.checked);
            window.localStorage.setItem(e.target.id, true)
            }else{
            window.localStorage.setItem(e.target.id, false)
            }
        });
    });
}

window.addEventListener('storage', () => {
   
    console.log(JSON.parse(window.localStorage.getItem('listener')));
  });






