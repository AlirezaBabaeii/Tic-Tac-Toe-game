export default class Board {
    constructor() {
      this.player = "X";
      this.cells = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
      ];
    }
  
    markCell(row, column) {
      if (this.cells[row][column] !== "") {
        return;
      }
      this.cells[row][column] = this.player;
      this.switchPlayer();
    }
  
    hasGameOver() {
      return (
        this.hasAnyPossibleMoves().length === 0 ||
        this.hasPlayerWin("X") ||
        this.hasPlayerWin("O")
      );
    }
  
    hasAnyPossibleMoves() {
      let moves = [];
  
      this.cells.forEach((row, rowIndex) => {
        row.forEach((column, columnIndex) => {
          if (column === "") {
            moves.push({ row: rowIndex, column: columnIndex });
          }
        });
      });
  
      return moves;
    }
  
    hasPlayerWin(player) {
      // Horizontal rows
      for (let i = 0; i < 3; i++) {
        if (
          this.cells[0][i] === player &&
          this.cells[1][i] === player &&
          this.cells[2][i] === player
        ) {
          return true;
        }
      }
  
      // Vertical rows
      for (let i = 0; i < 3; i++) {
        if (
          this.cells[i][0] === player &&
          this.cells[i][1] === player &&
          this.cells[i][2] === player
        ) {
          return true;
        }
      }
  
      // Diagonals
      if (
        this.cells[0][0] === player &&
        this.cells[1][1] === player &&
        this.cells[2][2] === player
      ) {
        return true;
      }
      if (
        this.cells[2][0] === player &&
        this.cells[1][1] === player &&
        this.cells[0][2] === player
      ) {
        return true;
      }
  
      return false;
    }
  
    switchPlayer() {
      this.player = this.player === "X" ? "O" : "X";
    }
  }
  