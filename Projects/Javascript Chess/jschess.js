var startingPosition = [
	["r", "n", "b", "q", "k", "b", "n", "r"], 
	["p", "p", "p", "p", "p", "p", "p", "p"],
	["", "", "", "", "", "", "", ""], 
	["", "", "", "", "", "", "", ""], 
	["", "", "", "", "", "", "", ""], 
	["", "", "", "", "", "", "", ""], 
	["P", "P", "P", "P", "P", "P", "P", "P"],
	["R", "N", "B", "Q", "K", "B", "N", "R"]
];

boardLayout = startingPosition;

whitePlay = true;

function drawBoard(flipped) {
	var board = "";
	var swap = flipped;
	var divOpen = '<div class="board-item ';
	var divOpenClose = '">';
	var black = "black";
	var white = "white";
	var divClose = '</div>\n';

	piecesLinear = []

	for (i = 0; i < 8; i++) {
		for (j = 0; j < 8; j++) {
			piecesLinear.push(boardLayout[i][j]);
		}
	}

	console.log(piecesLinear);

	var counter = 0;
	for (i = 0; i < 64; i++) {	
		if (counter == 8) {
			counter = 0;
			swap = !swap;
		}

		board += divOpen;

		var check = (counter % 2 == 0);
		var colour = "white";
		if(swap) {
			if (check) {
				colour = black;
			}
		} else {
			if (!check) {
				colour = black;
			}
		}

		board += colour + divOpenClose;

		board += "<p>" + piecesLinear[i] + "</p>";

		board += divClose;

		counter += 1;
	}

	document.getElementById("board").innerHTML = board;
}

function move() {
	var desiredMove = document.getElementById("moveInput").value;

	if (desiredMove.length == 5) {
		var piece = desiredMove[0];
		var currentX = desiredMove[1];
		var currentY = desiredMove[2];
		var squareX = desiredMove[3];
		var squareY = desiredMove[4];

		var pieces = ["r", "n", "b", "q", "k", "p"];
		var squares = ["a", "b", "c", "d", "e", "f"]

		check = ( (pieces.includes(piece.toLowerCase()) == true) && (squares.includes(currentX.toLowerCase()) == true)  && (squares.includes(squareX.toLowerCase()) == true) && (parseInt(currentY) <= 7) && (parseInt(squareY) <= 7) && (currentX + currentY != squareX + squareY));
		console.log(check);
	} else {
		console.log("NO");
	}
}