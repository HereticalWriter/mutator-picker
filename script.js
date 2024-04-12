let mutatorList = [
    "Walking Infested (page 1)",
    "Outbreak (page 1)",
    "Time Warp (page 1)",
    "Speed Freaks (page 1)",
    "Barrier (page 1)",
    "Avenger (page 1)",
    "Evasive Maneuvers (page 1)",
    "Scorched Earth (page 1)",
    "Alien Incubation (page 2)",
    "Long Range (page 2)",
    "Concussive Attacks (page 2)",
    "Just Die! (page 2)",
    "Temporal Field (page 2)",
    "Photon Overload (page 3)",
    "Life Leech (page 3)",
    "Power Overwhelming (page 3)",
    "Transmutaion (page 3)",
    "Diffusion (page 3)",
    "Eminent Domain (page 3)",
    "Inspiration (page 4)",
    "Hardened Will (page 4)"
];

function getMutator() {
    return Math.floor(Math.random() * mutatorList.length);
}

const body = document.querySelector("body");
const btn = document.querySelector("button");

let used = [];
btn.addEventListener("click", () => {
    let newMutator = document.createElement("p");
    let number = getMutator();
    while (used.includes(number)) {
        number = getMutator();
    }
    used.push(number);

    newMutator.textContent = mutatorList[number];
    body.appendChild(newMutator);
})