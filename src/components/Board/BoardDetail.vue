<template>
  <section class="board-detail">
    <header class="header">
      <div>{{ board.board_title }}</div>
      <div class="writer">장준혁</div>
    </header>
    <div class="content">{{ board.board_content }}</div>
    <div class="btns">
      <button class="btn" @click="updateBoard">수정</button>
      <button class="btn">삭제</button>
    </div>
  </section>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  created() {
    this.$store.dispatch("getBoard", this.$route.params.boardId);
  },
  methods: {
    updateBoard() {
      this.$router.push({
        name: "Update",
        params: { boardId: this.board.board_no },
      });
    },
  },
  computed: {
    ...mapGetters(["board"]),
  },
};
</script>
<style scoped>
.board-detail {
  display: flex;
  flex-direction: column;
  width: 40em;
  height: 35em;
  margin-top: 1em;
  border: 1px solid whitesmoke;
}
.board-detail div {
  color: whitesmoke;
}

.header {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  font-size: 1.5rem;
  color: whitesmoke;
  /* border-bottom: 1px solid whitesmoke; */
  border: 0.5px solid whitesmoke;
  margin: 0.4em;
  padding: 0.5em;
}

.writer {
  margin: 0.5em;
  font-size: 1rem;
}

.content {
  border: 0.5px solid whitesmoke;
  height: 100%;
  padding: 1em;
  margin: 0.5em;
}

.btns {
  padding: 0.3em;
  text-align: center;
}

.btn {
  background-color: transparent;
  color: whitesmoke;
  border: 1px solid whitesmoke;
  border-radius: 2em;
  padding: 1em;
  transition: all 200ms ease-out;
}

.btn:hover {
  color: darkslateblue;
  background-color: whitesmoke;
}
</style>
