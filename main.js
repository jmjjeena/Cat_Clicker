let moves = 0;
let clickCount = document.getElementById('moves');

function onClick() {
    moves++;
    clickCount.innerHTML = "Clicks: " + moves;
}