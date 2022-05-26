const quitgame = document.getElementById('quitgame');
const Obutton = document.getElementById('O');
const Xbutton = document.getElementById('X');
const Confirm = document.getElementById('confirm');
let OX = 'O';

let boardarr = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

for (var i = 1; i < 11; i++) {
    for (var j = 1; j < 11; j++) {
        eval("const col" + j + "row" + i + " = document.getElementById('" + "col" + j + "row" + i + "');");
    }
}

for (var i = 1; i < 11; i++) {
    for (var j = 1; j < 11; j++) {
        eval("col" + j + "row" + i + ".addEventListener('click', () => {if (OX == 'O') {col" + j + "row" + i + ".style.backgroundColor = 'black'; boardarr[" + (i-1) + "][" + (j-1) + "] = 1;" + 
        "}" + "else if(OX == 'X') {" + "col" + j + "row" + i + ".style.backgroundColor = '#dde2e4'; boardarr[" + (i-1) + "][" + (j-1) + "] = 0;}});");
    }
}

quitgame.addEventListener('click', () => {
    if(confirm("Really left?")) window.location.href = 'index.html';
});

Obutton.addEventListener('click', () => {
    if (OX == 'X') Xbutton.style.backgroundColor = '#dde2e4';
    OX = 'O';
    Obutton.style.backgroundColor = 'red';
})

Xbutton.addEventListener('click', () => {
    if (OX == 'O') Obutton.style.backgroundColor = '#dde2e4';
    OX = 'X';
    Xbutton.style.backgroundColor = 'blue';
})

Confirm.addEventListener('click', () => {
    for (var i = 0; i < 10; i++) {
        for (var j = 0; j < 10; j++) {
            // eval("const col" + j + "row" + i + " = document.getElementById('" + "col" + j + "row" + i + "');");
            console.log(boardarr[i][j]);
        }
    }
});

// 