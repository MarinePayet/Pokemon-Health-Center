import { Machine } from "./machine.js";
import { Pokemon } from "./pokemon.js";
// Instance de la Machine a soigné les Pokeymaunes //
const machine = new Machine(6);
// List de nos instances de Pokeymaunes //
const pokedex = {
    pikachu: new Pokemon("Pikachu", "Pikaaaachhuuuu", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png", 150),
    salameche: new Pokemon("Salameche", "Salaaameche", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png", 200),
    carapuce: new Pokemon("Carapuce", "Carapuuuce", "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png", 90),
    evoli: new Pokemon("Evoli", "Evoliii", "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/133.png", 110),
    canartichau: new Pokemon("Canarticho", "Canartichoooo", "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/083.png", 300),
    psykokwak: new Pokemon("Psykokwak", "Psykokwaaak", "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/054.png", 100),
    ptitard: new Pokemon("Ptitard", "Ptitaaaard", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/060.png", 100),
    morpeko: new Pokemon("Morpeko", "Ptitaaaard", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/877.png", 100),
    dedenne: new Pokemon("Dedenne", "Ptitaaaard", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/702.png", 100),
    pashmilla: new Pokemon("Pashmilla", "Ptitaaaard", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/573.png", 100),
    cochignon: new Pokemon("Cochignon", "Ptitaaaard", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/221.png", 100),
    grainipiot: new Pokemon("Grainipiot", "Ptitaaaard", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/273.png", 100),
    galegon: new Pokemon("Galegon", "Ptitaaaard", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/305.png", 100),
    chochodile: new Pokemon("Chochodile", "Ptitaaaard", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/909.png", 250),
    croquine: new Pokemon("Croquine", "Ptitaaaard", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/761.png", 100),
    larvibule: new Pokemon("Larvibule", "Ptitaaaard", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/736.png", 100),
    skelénox: new Pokemon("Skelénox", "Ptitaaaard", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/355.png", 100),
    scrutella: new Pokemon("Scrutella", "Ptitaaaard", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/574.png", 120),
    tortipouss: new Pokemon("Tortipouss", "Ptitaaaard", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/387.png", 100),
    roudoudou: new Pokemon("Roudoudou", "Ptitaaaard", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/039.png", 100),
    bulbizarre: new Pokemon("Bulbizarre", "Bulbiiii", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png", 105),
    melofee: new Pokemon("Mélofée", "Mélooooofée", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/035.png", 150),
    goupix: new Pokemon("Goupix", "Goupiiiix", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/037.png", 200),
    caninos: new Pokemon("Caninos", "Caniiiinos", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/058.png", 100),
    racaillou: new Pokemon("Racaillou", "Racaillouuuu", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/074.png", 100),
    ponyta: new Pokemon("Ponyta", "Popoponyta", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/077.png", 190),
    otaria: new Pokemon("Otaria", "Otariiia", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/086.png", 140),
    tadmorv: new Pokemon("Tadmorv", "Tadmoooooorv", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/088.png", 260),
    onix: new Pokemon("Onix", "Oniiiiix", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/095.png", 100),
    lipoutou: new Pokemon("Lipoutou", "Lipoutoupoutou", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/124.png", 100)
};
function randomNumber() {
    return Math.floor(Math.random() * 200);
}
pokedex.pikachu.wound(randomNumber());
pokedex.canartichau.wound(randomNumber());
pokedex.psykokwak.wound(randomNumber());
pokedex.carapuce.wound(randomNumber());
pokedex.ptitard.wound(randomNumber());
pokedex.evoli.wound(randomNumber());
pokedex.salameche.wound(randomNumber());
pokedex.morpeko.wound(randomNumber());
pokedex.dedenne.wound(randomNumber());
pokedex.pashmilla.wound(randomNumber());
pokedex.cochignon.wound(randomNumber());
pokedex.grainipiot.wound(randomNumber());
pokedex.galegon.wound(randomNumber());
pokedex.chochodile.wound(randomNumber());
pokedex.croquine.wound(randomNumber());
pokedex.larvibule.wound(randomNumber());
pokedex.skelénox.wound(randomNumber());
pokedex.scrutella.wound(randomNumber());
pokedex.tortipouss.wound(randomNumber());
pokedex.roudoudou.wound(randomNumber());
pokedex.bulbizarre.wound(randomNumber());
pokedex.melofee.wound(randomNumber());
pokedex.goupix.wound(randomNumber());
pokedex.caninos.wound(randomNumber());
pokedex.racaillou.wound(randomNumber());
pokedex.ponyta.wound(randomNumber());
pokedex.otaria.wound(randomNumber());
pokedex.tadmorv.wound(randomNumber());
pokedex.onix.wound(randomNumber());
pokedex.lipoutou.wound(randomNumber());
// Variable qui accumule les Pokeymaunes bléssés ou hors jeux //
let woundedPokemon = [];
let emergencyList = [];
let isWaiting = [];
// Fonction de remplissage des listes de Pokeymaunes bléssés ou hors jeux //
function isWounded() {
    Object.keys(pokedex).forEach(function (pokemon) {
        if (pokedex[pokemon].pv < pokedex[pokemon].maxPv) {
            if (!woundedPokemon.includes(pokemon)) {
                woundedPokemon.push(pokemon);
                emergencyList.push(pokemon);
            }
        }
    });
}
isWounded();
function heal(list) {
    for (let i = 0; i < list.length; i++) {
        list[i].pv = list[i].maxPv;
    }
}
const backgroundElt = document.querySelector(".background");
const cards = document.querySelector(".cards");
backgroundElt.style.width = "800px";
backgroundElt.style.height = "600px";
function calcHealthPerc(pv, maxPv) {
    let currentLife = Math.round((pv / maxPv) * 100) * 100 / 100;
    return currentLife + 'px';
}
function createPokemonCard(pokemon) {
    const card = document.createElement("div");
    card.classList.add("card");
    cards === null || cards === void 0 ? void 0 : cards.appendChild(card);
    const cardHeader = document.createElement("div");
    cardHeader.classList.add("card-header");
    card.appendChild(cardHeader);
    const cardImg = document.createElement("div");
    cardImg.style.backgroundImage = `url(${pokemon.image})`;
    cardImg.classList.add("card-img");
    card.appendChild(cardImg);
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    card.appendChild(cardBody);
    const cardTitle = document.createElement("h2");
    cardTitle.innerHTML = `${pokemon.name}`;
    cardTitle.classList.add("card-title");
    cardBody.appendChild(cardTitle);
    const cardHealthContainer = document.createElement("div");
    cardHealthContainer.classList.add("bar");
    cardBody.appendChild(cardHealthContainer);
    pokemon._healthContainer = document.createElement("div");
    pokemon._healthContainer.classList.add("health");
    cardHealthContainer.appendChild(pokemon._healthContainer);
    pokemon._healthContainer.style.width = calcHealthPerc(pokemon.pv, pokemon.maxPv);
    const cardScreamContainer = document.createElement("div");
    cardScreamContainer.classList.add("screamCont");
    cardBody.appendChild(cardScreamContainer);
    pokemon._screamContainer = document.createElement("div");
    pokemon._screamContainer.classList.add("scream");
    cardScreamContainer.appendChild(pokemon._screamContainer);
    // pokemon._screamContainer.innerHTML= pokemon.scream;
    let actualLifeInNumber = Number(pokemon._healthContainer.style.width.replace(/[^0-9]/g, ''));
    if (actualLifeInNumber < 20) {
        pokemon._healthContainer.style.backgroundColor = '#DA2528';
    }
    else if (actualLifeInNumber > 20 && actualLifeInNumber < 60) {
        pokemon._healthContainer.style.backgroundColor = '#F1C40F';
    }
    cardImg.style.width = "100px";
    cardImg.style.height = "100px";
}
let listWounded = [];
function listWoundedPokemon() {
    for (let i = 0; i < woundedPokemon.length; i++) {
        if (!listWounded.includes(pokedex[woundedPokemon[i]])) {
            createPokemonCard(pokedex[woundedPokemon[i]]);
            listWounded.push(pokedex[woundedPokemon[i]]);
            if (listWounded.length === machine.storage) {
                return;
            }
        }
    }
}
const backgroundPatientsElt = document.querySelector(".backgroundPatients");
const cardPatients = document.querySelector(".cardPatients");
backgroundPatientsElt.style.height = "600px";
function createWaitingListCard(pokemon) {
    const card = document.createElement("div");
    card.classList.add("card", "m-1");
    cardPatients === null || cardPatients === void 0 ? void 0 : cardPatients.appendChild(card);
    const cardHeader = document.createElement("div");
    cardHeader.classList.add("card-header");
    card.appendChild(cardHeader);
    const cardImg = document.createElement("div");
    cardImg.style.backgroundImage = `url(${pokemon.image})`;
    cardImg.classList.add("card-img");
    card.appendChild(cardImg);
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body", "m-0", "p-0");
    card.appendChild(cardBody);
    const cardTitle = document.createElement("p");
    cardTitle.innerHTML = `${pokemon.name}`;
    cardTitle.classList.add("card-title");
    cardBody.appendChild(cardTitle);
    cardImg.style.width = "50px";
    cardImg.style.height = "50px";
}
function waitingList() {
    for (let i = 0; i < emergencyList.length; i++) {
        if (!isWaiting.includes(pokedex[emergencyList[i]])) {
            createWaitingListCard(pokedex[emergencyList[i]]);
            isWaiting.push(pokedex[emergencyList[i]]);
        }
        if (isWaiting.length === 10) {
            return;
        }
    }
}
waitingList();
// les fonctions des boutons //
const btnMachineElmt = document.querySelector(".button-machine");
const music = new Audio('./assets/PokeCenter2.mp3');
let button;
btnMachineElmt.addEventListener("click", () => {
    if (button) {
        heal(listWounded);
        for (let i = 0; i < listWounded.length; i++) {
            setTimeout(() => {
                const pokemon = listWounded[i];
                if (!pokemon._healthContainer)
                    return;
                pokemon._healthContainer.style.width = '100%';
                pokemon._healthContainer.style.backgroundColor = '#00c517';
            });
        }
        ;
        btnMachineElmt.setAttribute('disabled', '');
        setTimeout(() => { btnMachineElmt.textContent = "Who is wounded ?"; }, 3000);
        setTimeout(() => { cards.innerHTML = ""; }, 3000);
        for (let i = 0; i < listWounded.length; i++) {
            const pokeScream = listWounded[i];
            setTimeout(() => {
                if (pokeScream._screamContainer) {
                    pokeScream._screamContainer.innerHTML = `${pokeScream.scream}`;
                }
            }, 2000);
        }
        setTimeout(() => { btnMachineElmt.removeAttribute('disabled'); }, 3000);
        music.play();
        button = false;
    }
    else {
        woundedPokemon = [];
        listWounded = [];
        emergencyList = [];
        isWaiting = [];
        btnMachineElmt.textContent = "Heal them all !";
        cards.innerHTML = "";
        cardPatients.innerHTML = "";
        isWounded();
        emergencyList = emergencyList.slice(machine.storage);
        waitingList();
        listWoundedPokemon();
        if (woundedPokemon.length === 0) {
            const win = document.createElement("div");
            win.classList.add("win");
            cards.appendChild(win);
            win.textContent = "They are all healed !";
            return btnMachineElmt.textContent = "";
        }
        button = true;
    }
});
//# sourceMappingURL=app.js.map