window.onload = function () {
    document.querySelector("#btn").addEventListener("click", () => {
        document.querySelector("#DOG").innerHTML = randomnumberGiver();
    });
    console.log("Hello");
};

let randomnumberGiver = () => {
    let pronoun = ['the'];
    let noun = ['hamster','teacher','mob'];
    let adj = ['swiftly', 'rapidly','slowly'];
    let verb = ['stole', 'ate', 'demolished'];
    let pronoun2 = ["her", "my","his"]; 
    let noun2 = ['projecct','homework'];

    let randomPronoun = Math.floor(Math.random() * pronoun.length);
    let randomNoun = Math.floor(Math.random() * noun.length);
    let randomAdj = Math.floor(Math.random() * adj.length);
    let randomVerb = Math.floor(Math.random() * verb.length);
    let randomPronoun2 = Math.floor(Math.random() * pronoun2.length);
    let randomNoun2 = Math.floor(Math.random() * noun2.length);

    return pronoun[randomPronoun] 
    + " " + noun[randomNoun]
    + " " + adj[randomAdj]
    + " " + verb[randomVerb]
    + " " + pronoun2[randomPronoun2]
    + " " + noun2[randomNoun2];
};