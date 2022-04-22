<template>
  <div id="app">
    <h1>Tic Tac Toe</h1>
    <game-board />
  </div>
</template>

<script>
import GameBoard from "./components/Gbord.vue";

export default {
  name: "App",
  components: {
    GameBoard,
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  color: white;
}
</style>
