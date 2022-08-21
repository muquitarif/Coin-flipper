let coin = document.getElementById("flip-coin");
let flip = document.getElementById("flip-again");
let toss = Math.floor(Math.random() * 2);
let tossResult = document.getElementById("result");

function flipAgain() {
    coin.src = "./images/Flip_coin.png"
    tossResult.innerHTML = "";
    document.getElementById('flip-again-btn').style.display = "none";
}

coin.addEventListener("click", function () {
    let result;

    if (toss == 1) {
        result = "Tails";
        coin.src = "images/Tails.png"
        console.log(toss);
    } else {
        coin.src = "images/Heads.png"
        result = "Heads";
    }

    tossResult.innerHTML = `It's ${result}.`
    flip.innerHTML = `<button id="flip-again-btn">Want to Flip Again?</button>`
    flip.addEventListener("click", flipAgain);
});
