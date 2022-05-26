const quitgame = document.getElementById('quitgame');
const Obutton = document.getElementById('O');
const Delbutton = document.getElementById('X');
let OX = 'O';

for (var i = 1; i < 11; i++) {
    for (var j = 1; j < 11; j++) {
        eval("const col" + j + "row" + i + " = document.getElementById('" + "col" + j + "row" + i + "');");
    }
}

for (var i = 1; i < 11; i++) {
    for (var j = 1; j < 11; j++) {
        eval("col" + j + "row" + i + ".addEventListener('click', () => {if (OX == 'O') {" + "col" + j + "row" + i + ".style.background = 'none'; " + "col" + j + "row" + i + ".style.backgroundColor = 'black';}" + "else if(OX == 'X') {" + "col" + j + "row" + i + ".style.backgroundColor = '#dde2e4';" + "col" + j + "row" + i + ".style.background = 'url(./X_icon.png)';}});");
    }
}

quitgame.addEventListener('click', () => {
    if(confirm("Really left?")) window.location.href = 'index.html';
});

Obutton.addEventListener('click', () => {
    if (OX == 'X') Delbutton.style.backgroundColor = '#dde2e4';
    OX = 'O';
    Obutton.style.backgroundColor = 'red';
})

Delbutton.addEventListener('click', () => {
    if (OX == 'O') Obutton.style.backgroundColor = '#dde2e4';
    OX = 'X';
    Delbutton.style.backgroundColor = 'blue';
})

Confirm.addEventListener('click', () => {
    alert('sus');
});