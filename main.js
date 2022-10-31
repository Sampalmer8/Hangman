// PAGE LOAD DRAWING THING
window.addEventListener("load", drawMan);

// CANVAS JAVASCRIPT
let cnv= document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");

cnv.width = 300;
cnv.height = 400;

// LINES FOR HANGER
ctx.lineWidth = 4;
ctx.strokeStyle = "brown";
ctx.beginPath();
ctx.moveTo(25, 350);
ctx.lineTo(150, 350);
ctx.stroke();

ctx.lineWidth = 4;
ctx.strokeStyle = "brown";
ctx.beginPath();
ctx.moveTo(87.5, 350);
ctx.lineTo(87.5, 50);
ctx.stroke();

ctx.lineWidth = 4;
ctx.strokeStyle = "brown";
ctx.beginPath();
ctx.moveTo(87.5, 50);
ctx.lineTo(200, 50);
ctx.stroke();

ctx.lineWidth = 4;
ctx.strokeStyle = "brown";
ctx.beginPath();
ctx.moveTo(200, 50);
ctx.lineTo(200, 80);
ctx.stroke();

// CLICKING LETTER JAVASCRIPT

// LETTER EVENT LISTENERS
document.getElementById("A").addEventListener("click", aClicked);
document.getElementById("B").addEventListener("click", bClicked);
document.getElementById("C").addEventListener("click", cClicked);
document.getElementById("D").addEventListener("click", dClicked);
document.getElementById("E").addEventListener("click", eClicked);
document.getElementById("F").addEventListener("click", fClicked);
document.getElementById("G").addEventListener("click", gClicked);
document.getElementById("H").addEventListener("click", hClicked);
document.getElementById("I").addEventListener("click", iClicked);
document.getElementById("J").addEventListener("click", jClicked);
document.getElementById("K").addEventListener("click", kClicked);
document.getElementById("L").addEventListener("click", lClicked);
document.getElementById("M").addEventListener("click", mClicked);
document.getElementById("N").addEventListener("click", nClicked);
document.getElementById("O").addEventListener("click", oClicked);
document.getElementById("P").addEventListener("click", pClicked);
document.getElementById("Q").addEventListener("click", qClicked);
document.getElementById("R").addEventListener("click", rClicked);
document.getElementById("S").addEventListener("click", sClicked);
document.getElementById("T").addEventListener("click", tClicked);
document.getElementById("U").addEventListener("click", uClicked);
document.getElementById("V").addEventListener("click", vClicked);
document.getElementById("W").addEventListener("click", wClicked);
document.getElementById("X").addEventListener("click", xClicked);
document.getElementById("Y").addEventListener("click", yClicked);
document.getElementById("Z").addEventListener("click", zClicked);

// FUNCTIONS FOR CLICKING LETTERS
let drawing = 0;
let score = 0;
let currentEl;

function removeElement() {
    currentEl.remove();
}

function aClicked() {
    drawing++;
    currentEl = document.getElementById("A");
    currentEl.style.color = "red";
    setTimeout(removeElement, 1000);
}

function bClicked() {
    drawing++;
    currentEl = document.getElementById("B");
    currentEl.style.color = "red";
    setTimeout(removeElement, 1000);
}

function cClicked() {
    drawing++;
    currentEl = document.getElementById("C");
    currentEl.style.color = "red";
    setTimeout(removeElement, 1000);
}

function dClicked() {
    drawing++;
    currentEl = document.getElementById("D");
    currentEl.style.color = "red";
    setTimeout(removeElement, 1000);
}

function eClicked() {
    score++;
    document.getElementById("E").style.color = "green";
    document.getElementById("venusE").innerHTML = "e";
}

function fClicked() {
    drawing++;
    currentEl = document.getElementById("F");
    currentEl.style.color = "red";
    setTimeout(removeElement, 1000);
}

function gClicked() {
    drawing++;
    currentEl = document.getElementById("G");
    currentEl.style.color = "red";
    setTimeout(removeElement, 1000);
}

function hClicked() {
    drawing++;
    currentEl = document.getElementById("H");
    currentEl.style.color = "red";
    setTimeout(removeElement, 1000);
}

function iClicked() {
    drawing++;
    currentEl = document.getElementById("I");
    currentEl.style.color = "red";
    setTimeout(removeElement, 1000);
}

function jClicked() {
    drawing++;
    currentEl = document.getElementById("J");
    currentEl.style.color = "red";
    setTimeout(removeElement, 1000);
}

function kClicked() {
    drawing++;
    currentEl = document.getElementById("K");
    currentEl.style.color = "red";
    setTimeout(removeElement, 1000);
}

function lClicked() {
    drawing++;
    currentEl = document.getElementById("L");
    currentEl.style.color = "red";
    setTimeout(removeElement, 1000);
}

function mClicked() {
    drawing++;
    currentEl = document.getElementById("M");
    currentEl.style.color = "red";
    setTimeout(removeElement, 1000);
}

function nClicked() {
    score++;
    document.getElementById("N").style.color = "green";
    document.getElementById("venusN").innerHTML = "n";
}

function oClicked() {
    drawing++;
    currentEl = document.getElementById("O");
    currentEl.style.color = "red";
    setTimeout(removeElement, 1000);
}

function pClicked() {
    drawing++;
    currentEl = document.getElementById("P");
    currentEl.style.color = "red";
    setTimeout(removeElement, 1000);
}

function qClicked() {
    drawing++;
    currentEl = document.getElementById("Q");
    currentEl.style.color = "red";
    setTimeout(removeElement, 1000);
}

function rClicked() {
    drawing++;
    currentEl = document.getElementById("R");
    currentEl.style.color = "red";
    setTimeout(removeElement, 1000);
}

function sClicked() {
    score++;
    document.getElementById("S").style.color = "green";
    document.getElementById("venusS").innerHTML = "s";
}

function tClicked() {
    drawing++;
    currentEl = document.getElementById("T");
    currentEl.style.color = "red";
    setTimeout(removeElement, 1000);
}

function uClicked() {
    score++;
    document.getElementById("U").style.color = "green";
    document.getElementById("venusU").innerHTML = "u";
}

function vClicked() {
    score++;
    document.getElementById("V").style.color = "green";
    document.getElementById("venusV").innerHTML = "V";
}

function wClicked() {
    drawing++;
    currentEl = document.getElementById("W");
    currentEl.style.color = "red";
    setTimeout(removeElement, 1000);
}

function xClicked() {
    drawing++;
    currentEl = document.getElementById("X");
    currentEl.style.color = "red";
    setTimeout(removeElement, 1000);
}

function yClicked() {
    drawing++;
    currentEl = document.getElementById("Y");
    currentEl.style.color = "red";
    setTimeout(removeElement, 1000);
}

function zClicked() {
    drawing++;
    currentEl = document.getElementById("Z");
    currentEl.style.color = "red";
    setTimeout(removeElement, 1000);
}
// DRAW THE MAN

function drawMan() {
    if (drawing >= 1) {
        ctx.strokeStyle = "#d2b48c";
        ctx.beginPath();
        ctx.arc(200, 110, 30, 0, 2 * Math.PI);
        ctx.stroke();
    }

    if (drawing >= 2) {
        ctx.lineWidth = 4;
        ctx.strokeStyle = "#d2b48c";
        ctx.beginPath();
        ctx.moveTo(200, 140);
        ctx.lineTo(200, 230);
        ctx.stroke();
    }

    if (drawing >= 3) {
        ctx.lineWidth = 4;
        ctx.strokeStyle = "#d2b48c";
        ctx.beginPath();
        ctx.moveTo(200, 230);
        ctx.lineTo(175, 280);
        ctx.stroke();
    }

    if (drawing >= 4) {
        ctx.lineWidth = 4;
        ctx.strokeStyle = "#d2b48c";
        ctx.beginPath();
        ctx.moveTo(200, 230);
        ctx.lineTo(225, 280);
        ctx.stroke();
    }

    if (drawing >= 5) {
        ctx.lineWidth = 4;
        ctx.strokeStyle = "#d2b48c";
        ctx.beginPath();
        ctx.moveTo(200, 170);
        ctx.lineTo(230, 215);
        ctx.stroke();
    }

    if (drawing >= 6) {
        ctx.lineWidth = 4;
        ctx.strokeStyle = "#d2b48c";
        ctx.beginPath();
        ctx.moveTo(200, 170);
        ctx.lineTo(170, 215);
        ctx.stroke();
    }

    if (drawing === 6) {
        document.getElementById("title").innerHTML = "YOU LOSE!!! The word was Venus.";
    }

    if (score === 5) {
        document.getElementById("title").innerHTML = "CONGRATULATIONS!!! YOU WIN!";
    }
    requestAnimationFrame(drawMan);
}