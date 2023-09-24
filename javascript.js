
const op = document.querySelector("#output");
const b1 = document.getElementById("1");
b1.addEventListener('click', but1);
const b2 = document.getElementById("2");
b2.addEventListener('click', but2);
const b3 = document.getElementById("3");
b3.addEventListener('click', but3);
const b4 = document.getElementById("4");
b4.addEventListener('click', but4);
const b5 = document.getElementById("5");
b5.addEventListener('click', but5);
const b6 = document.getElementById("6");
b6.addEventListener('click', but6);
const b7 = document.getElementById("7");
b7.addEventListener('click', but7);
const b8 = document.getElementById("8");
b8.addEventListener('click', but8);
const b9 = document.getElementById("9");
b9.addEventListener('click', but9);
const b0 = document.getElementById("0");
b0.addEventListener('click', but0);
const bdivide = document.getElementById("÷");
bdivide.addEventListener('click', butdivide);
const btimes = document.getElementById("x");
btimes.addEventListener('click', buttimes);
const bminus = document.getElementById("-");
bminus.addEventListener('click', butminus);
const bplus = document.getElementById("+");
bplus.addEventListener('click', butplus);
const bequals = document.getElementById("=");
bequals.addEventListener('click', butequals);
const bpercent = document.getElementById("%");
bpercent.addEventListener('click', butpercent);
const bclear = document.getElementById("c");
bclear.addEventListener('click', butclear);
const bdot = document.getElementById(".");
bdot.addEventListener('click', butdot);

# handout: begin-exclude

function but1() {
    let val = 1;
    op.value += val;
}

function but2() {
    let val = 2;
    op.value += val;
}

function but3() {
    let val = 3;
    op.value += val;
}

function but4() {
    let val = 4;
    op.value += val;
}

function but5() {
    let val = 5;
    op.value += val;
}

function but6() {
    let val = 6;
    op.value += val;
}

function but7() {
    let val = 7;
    op.value += val;
}

function but8() {
    let val = 8;
    op.value += val;
}

function but9() {
    let val = 9;
    op.value += val;
}

function but0() {
    let val = 0;
    op.value += val;
}

function butplus() {
    let val = "+";
    op.value += val;
}

function butminus() {
    let val = "-";
    op.value += val;
}

function buttimes() {
    let val = "*";
    op.value += val;
}

function butdivide() {
    let val = "/";
    op.value += val;
}

function butpercent() {
    let val = "%";
    op.value += val;
}

function butclear() {  
    op.value = null;
}

function butequals() {
    op.value = eval(op.value);
}

function butdot() {
    let val = ".";
    op.value += val;
}

# handout: end-exclude


