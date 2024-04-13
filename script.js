function Mutator(name, page) {
    this.name = name;
    this.page = page;
    this.url = `icons/${this.name.replaceAll(" ","").toLowerCase()}.png`
}

let mutatorList = [
    WalInf = new Mutator("Walking Infested", 1),
    Outbre = new Mutator("Outbreak", 1),
    TimWar = new Mutator("Time Warp", 1),
    SpeFre = new Mutator("Speed Freaks", 1),
    Barrie = new Mutator("Barrier", 1),
    Avenge = new Mutator("Avenger", 1),
    EvaMan = new Mutator("Evasive Maneuvers", 1),
    ScoEar = new Mutator("Scorched Earth", 1),
    AliInc = new Mutator("Alien Incubation", 2),
    LonRan = new Mutator("Long Range", 2),
    ConAtt = new Mutator("Concussive Attacks", 2),
    JusDie = new Mutator("Just Die!", 2),
    TemFie = new Mutator("Temporal Field", 2),
    PhoOve = new Mutator("Photon Overload", 3),
    LifLee = new Mutator("Life Leech", 3),
    PowOve = new Mutator("Power Overwhelming", 3),
    Transm = new Mutator("Transmutation", 3),
    Diffus = new Mutator("Diffusion", 3),
    EmiDom = new Mutator("Eminent Domain", 3),
    Inspir = new Mutator("Inspiration", 4),
    HarWil = new Mutator("Hardened Will", 4)
];

function getMutatorIndex() {
    return Math.floor(Math.random() * mutatorList.length);
}

const body = document.querySelector("body");
const cardsContainer = document.querySelector(".cards_container");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {

    if (mutatorList.length === 0) {
        return;
    }

    let mutatorIndex = getMutatorIndex();

    let mutatorCard = document.createElement("div");
    mutatorCard.classList.toggle("mutator_card");
    mutatorCard.classList.toggle("highlighted");
    cardsContainer.appendChild(mutatorCard);

    let mutatorIcon = document.createElement("img");
    mutatorIcon.setAttribute("src", mutatorList[mutatorIndex].url);
    mutatorIcon.setAttribute("alt", mutatorList[mutatorIndex].name);
    mutatorCard.appendChild(mutatorIcon);

    let mutatorName = document.createElement("p");
    mutatorName.textContent = mutatorList[mutatorIndex].name;
    mutatorCard.appendChild(mutatorName);

    let mutatorPage = document.createElement("p");
    mutatorPage.classList.toggle("page_number");
    mutatorPage.textContent = `Page #${mutatorList[mutatorIndex].page}`;
    mutatorCard.appendChild(mutatorPage);

    mutatorList.splice(mutatorIndex, 1);
})