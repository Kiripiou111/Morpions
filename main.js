const tablo= document.getElementById("id_tableau");

class Game {
    constructor() {
        this.plateau = [];
        this.initTableau(this.plateau);
    }

    initTableau() {
        this.plateau = []; // juste pour vider 
        for (let i = 0; i < 3; i++) {
            this.plateau.push([]);
            for (let j = 0; j < 3; j++) {
                this.plateau[i].push("");
            }
        }
    }

    placementPion(x, y, symbol) {
        if (this.plateau[x][y] == "") {
            this.plateau[x][y] = symbol;
        }
    }

    verification() {
        isWinner= false
        // ligne semblable ?
        for(let i = 0; i < 3; i++) {
            for(let j = 0; j < 3 ; j++){
                symbol = this.plateau[i][0];
                if(this.plateau[i][j] != symbol){
                    break;
                }
            isWinner = true;
            }
        }
        // colonne semblable ?
        for(let i = 0; i < 3; i++) {
            for(let j = 0; j < 3 ; j++){
                this.plateau[i][0];
                if(this.plateau[j][i] != symbol){
                    break;       
                }
            isWinner = true;
            }
        }
        // diagonales semblables ?
        if (this.plateau[0][0] == this.plateau[1][1] == this.plateau[2][2]) {
            isWinner = true;
        }
        if (this.plateau[0][2] == this.plateau[1][1] == this.plateau[2][0]) {
            isWinner = true;
        }

    }
}  

let jeu = new Game;
tablo.addEventListener("click", e => {
    caseTableau = e.target
    console.log(caseTableau)



});