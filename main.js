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

    verification(symbol) {
        isWinner= false
        for(let i = 0; i < 3; i++) {
            for(let j = 0; j < 3 ; j++){
                // parcour d'une ligne 
                if(this.plateau[i][j] != symbol){
                    break;
                
            }
            isWinner = true; 
        }

    }
}   

let jeu = new Game;