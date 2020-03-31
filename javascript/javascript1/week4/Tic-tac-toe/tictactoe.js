function startGame() {

    for (let i = 1; i <= 9; i++) {
        clearBox(i);
    }
    document.turn = "X";
    document.winner = null;
    setMessage(document.turn + " get's to start.")
}

function setMessage(msg) {
    document.getElementById("message").innerText = msg;
}

function nextMove(square) {
    if (document.winner != null) {
        setMessage(document.turn + " already won.");
    } else if (square.innerText == '') {
        square.innerText = document.turn;
        switchTurn();
    } else {
        setMessage("Pick another square");
    }
}

function switchTurn() {
    if (checkForWinner(document.turn)) {
        setMessage("congrats " + document.turn + ", you won!!");
        document.winner = document.turn;
    } else if (document.turn == "X") {
        document.turn = "O";
        setMessage(document.turn + " get's to start.");
    } else {
        document.turn = "X"
        setMessage(document.turn + " get's to start.");
    }
}

function checkForWinner(move) {
    let result = false;
    if (checkBoxes(1, 2, 3, move) ||
        checkBoxes(4, 5, 6, move) ||
        checkBoxes(7, 8, 9, move) ||
        checkBoxes(1, 4, 7, move) ||
        checkBoxes(2, 5, 8, move) ||
        checkBoxes(3, 6, 9, move) ||
        checkBoxes(1, 5, 9, move) ||
        checkBoxes(3, 5, 7, move)) {
        result = true;
    }
    return result;
}


function checkBoxes(a, b, c, move) {
    let result = false;
    if (getBox(a) == move && getBox(b) == move && getBox(c) == move) {
        result = true;
    }
    return result;
}

function getBox(number) {
    return document.getElementById("s" + number).innerText;
}

function clearBox(number) {
    document.getElementById("s" + number).innerText = "";
}