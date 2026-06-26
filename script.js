let score = 0;
let upgradeCost = 10;
const clickBtn = document.getElementById("click-btn")
const scoreDisplay = document.getElementById("score")
const upgruder = document.getElementById("buy-upgrade-btn")
clickBtn.addEventListener("click", function() {
    scoreDisplay.textContent = "Очки: " + score;
    score = score + 1;
    console.log(score);
});
upgruder.addEventListener("click", function() {
    if (score >= upgradeCost) {
        score = score - upgradeCost;
        setInterval(function() {
            score = score + 1;
            scoreDisplay.textContent = "Очки: " + score;
}, 1000);
        } else {
            alert("Не хватает очков!");
    }   
});
