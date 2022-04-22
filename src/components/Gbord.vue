<template>
  <div class="components__gameBoard">
    <template v-if="!gameOver">
      <div class="board" v-for="(row, rowIndex) in board.cells" :key="rowIndex">
        <cell
          v-for="(column, columnIndex) in row"
          :key="columnIndex"
          :is-last-row="rowIndex + 1 == board.cells.length"
          :is-last-column="columnIndex + 1 == row.length"
          :value="column"
          @click="performMove(rowIndex, columnIndex)"
        />
      </div>
      <p> {{ `Player ${this.board.player} turn to move.` }}</p>
    </template>
    <template v-else>
      <h4>GAME OVER</h4>
      <p>{{ gameOverText }}</p>
      <div>
        start
    Player x  Star is  {{StarX}}
    Player O   Star is {{StarO}}
      </div>
      <div>
        <button class="btn" @click="restart">Try game!</button>
        <button class="btn" @click="restartStar">Restart Stars</button>
      </div>
    </template>
  </div>
</template>
<style>
.btn{
color: white;
background-color: chocolate;
width: 104px;
height: 41px;
border-radius: 15px;
margin: 20px;
}

</style>
<script>
import Cell from "./Call.vue";
import Board from "../Board";

export default {
  name: "GameBoard",
  components: {
    Cell,
  },
  data() {
    return {
      board: new Board(),
      gameOver: false,
      gameOverText: null,
      StarX:0,
      StarO:0
    };
  },
  methods: {
    performMove(row, column) {
      if (this.gameOver) {
        return;
      }

      this.board.markCell(row, column);
      this.$forceUpdate();

      if (!this.board.hasGameOver()) {
        return;
      }

      this.gameOver = true;

      if (this.board.hasPlayerWin("X")) {
        this.gameOverText = "Player X win!";
        this.StarX += 1
      } else if (this.board.hasPlayerWin("O")) {
        this.gameOverText = "Player O win!";
        this.StarO += 1
      } else {
        this.gameOverText = "Draw!";
      }
    },
    restart() {
      this.board = new Board();
      this.gameOver = false;
      this.gameOverText = null;
    },
    restartStar(){
      this.StarX = 0
      this.StarO = 0
    }
  },
};
</script>

<style lang="scss" scoped>
.components__gameBoard {
  margin: 0 auto;

  .board {
    display: flex;
    justify-content: center;
  }
}
</style>