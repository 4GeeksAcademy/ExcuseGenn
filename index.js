window.onload = function () {
    document.querySelector("#btn").addEventListener("click", () => {
        document.querySelector("#DOG").innerHTML = randomNumberGiver();
    });
};

let randomNumberGiver = () => {
    let pronouns = ['the'];
    let nouns = ['hamster','teacher','mob'];
    let adjs = ['swiftly', 'rapidly','slowly'];
    let verbs = ['stole', 'ate', 'demolished'];
    let pronouns2 = ["her", "my","his"]; 
    let nouns2 = ['project','homework'];

    let randomPronoun = Math.floor(Math.random() * pronouns.length);
    let randomNoun = Math.floor(Math.random() * nouns.length);
    let randomAdj = Math.floor(Math.random() * adjs.length);
    let randomVerb = Math.floor(Math.random() * verbs.length);
    let randomPronoun2 = Math.floor(Math.random() * pronouns2.length);
    let randomNoun2 = Math.floor(Math.random() * nouns2.length);

   return `${pronouns[randomPronoun]} ${nouns[randomNoun]} ${adjs[randomAdj]} ${verbs[randomVerb]} ${pronouns2[randomPronoun2]} ${nouns2[randomNoun2]}`;
    //     return pronouns[randomPronoun] 
//     + " " + nouns[randomNoun]
//     + " " + adjs[randomAdj]
//     + " " + verbs[randomVerb]
//     + " " + pronouns2[randomPronoun2]
//     + " " + nouns2[randomNoun2];
};