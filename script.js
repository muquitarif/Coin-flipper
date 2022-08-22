let coin = document.getElementById("flip-coin");
let flip = document.getElementById("flip-again");

let tossResult = document.getElementById("result");

function flipAgain() {
    coin.style.pointerEvents = 'unset';
    coin.src = "./images/Flip_coin.png"
    tossResult.innerHTML = "";
    document.getElementById('flip-again-btn').style.display = "none";
}

coin.addEventListener("click", function (event) {
    let toss = Math.floor(Math.random() * 2);
    let result;

    if (toss == 1) {
        result = "Tails";
        coin.src = "images/Tails.png";
        coin.style.pointerEvents = 'none';
    } else {
        coin.src = "images/Heads.png"
        result = "Heads";
        coin.style.pointerEvents = 'none';
    }

    tossResult.innerHTML = `It's ${result}.`
    flip.innerHTML = `<button id="flip-again-btn">Want to Flip Again?</button>`
    flip.addEventListener("click", flipAgain);
});
