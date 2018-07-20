var chess = document.getElementsByClassName('chess')[0];
var king = "&#9818;",
	queen = "&#9819;",
	rook = "&#9820;",
	bishop = "&#9821;",
	knight = "&#9822;",
	pawn = "&#9823;";
var ul1 = "<ul>",
	ul2 = "</ul>",
	li1 = "<li>",
	li2 = "</li>",
	li3 = "<li></li>";
var arr1 = [rook, knight, bishop, queen, king, bishop, knight, rook]
var num = 8;
var content = "";
for (var i = 0; i < num; i++) {
	var cont = "";
	if (i === 0 || i === (num-1)){
		cont += ul1;
		for (var j = 0; j < arr1.length; j++) {
			cont += li1 + arr1[j] + li2
		}
		cont += ul2;
		content += cont
	} else if (i === 1 || i === (num-2)) {
		cont += ul1;
		for (var k = 0; k < 8; k++) {
			cont += li1 + pawn + li2
		}
		cont += ul2;
		content += cont
	} else {
		cont += ul1;
		for (var k = 0; k < 8; k++) {
			cont += li3
		}
		cont += ul2;
		content += cont
	}
}
chess.innerHTML = content