const select = document.querySelector("name");

const monHeader = new Headers();

monHeader.append("Content-Type", "application/json");

const myInit = { method: "GET", headers: monHeader };

fetch("/categories.json", myInit)
  .then(async function (response) {
    const score = await response.json();
    console.log(score);
    return score.sportCollectif;
  })
  .then(function (sportCollectif) {
    for (const element of sportCollectif) {
      console.log(element);
      const input = document.createElement("input");
      input.type = "checkbox";
      input.id = element._id;
      input.className = "box";
      const label = document.createElement("label");
      label.append(element.name);
      label.setAttribute("for", element._id);
      const div = document.querySelector("#name");
      div.append(label);
      div.append(input);

    
    }

    awaitMySon();
  });
//   Sport Individuel

fetch("/categories.json", myInit)
  .then(async function (response) {
    const score = await response.json();
    console.log(score);
    return score.sportIndividuel;
  })
  .then(function (sportIndividuel) {
    for (const element of sportIndividuel) {
      const input = document.createElement("input");
      input.type = "checkbox";
      input.id = element._id;
      input.className = "box";
      const label = document.createElement("label");
      label.append(element.name);
      label.setAttribute("for", element._id);
      const div = document.querySelector("#sport");
      div.append(label);
      div.append(input);
    }
    awaitMySon();
  });
function awaitMySon() {
  const checkboxListener = document.getElementsByClassName("box");
  Array.from(checkboxListener).forEach((checkbox) => {
    checkbox.addEventListener("change", function (e) {
      console.log("je clique", e);
      if (e.target.checked) {
        console.log("ici", e.target.checked);
        window.localStorage.setItem(e.target.id, true);
      } else {
        window.localStorage.setItem(e.target.id, false);
      }
      parseLocalStorage()
    });
  });
}

function parseLocalStorage() {
    const ids = Object.keys(window.localStorage);
    console.log('ids', ids);

    document.querySelector("#card").innerHTML = '';

    fetch("/categories.json", myInit)
    .then(async function (response) {
        const score = await response.json();
        console.log(score);
        return score;
        })
    .then((score) => {
        for (const element of score.sportIndividuel.filter(element => window.localStorage.getItem(element._id))) {
            element.objet.forEach((item) => {
                console.log(item);
                const card = document.querySelector("#card")
                const fiche = document.createElement("div")
                const image = document.createElement("image");
                image.src = item.img;
                const title = document.createElement("h2");
                title.innerHTML = item.title;
                const description = document.createElement("div");
                description.innerHTML = item.description;
                fiche.append(image)
                fiche.append(title)
                fiche.append(description)
                card.append(fiche)
                });
        }
        for (const element of score.sportCollectif.filter(element => window.localStorage.getItem(element._id))) {
            element.objet.forEach((item) => {
                console.log(item);
                const card = document.querySelector("#card")
                const fiche = document.createElement("div")
                const image = document.createElement("image");
                image.src = item.img;
                const title = document.createElement("h2");
                title.innerHTML = item.title;
                const description = document.createElement("div");
                description.innerHTML = item.description;
                fiche.append(image)
                fiche.append(title)
                fiche.append(description)
                card.append(fiche)
                });
        }
    })

    ids.forEach(element => {
        if (window.localStorage.getItem(element)) {
            
        }
        
    });
}