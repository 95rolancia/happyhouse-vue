<template>
  <form class="container" @submit.prevent="write">
    <div class="form__row">
      <input class="title" type="text" v-model="newBoard.title" />
    </div>
    <div class="form__row">
      <textarea
        class="content"
        v-model="newBoard.content"
        name=""
        id=""
        cols="30"
        rows="10"
      ></textarea>
    </div>
    <div class="write-btn-container">
      <button class="write-btn">등록</button>
    </div>
  </form>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      newBoard: {
        title: "",
        content: "",
      },
    };
  },
  created() {
    this.$store.dispatch("getBoard", this.$route.params.boardId);
    console.log(this.board);
    this.newBoard.title = this.board.title;
    this.newBoard.content = this.board.content;
    console.log(this.newBoard);
  },
  computed: {
    ...mapGetters(["board"]),
  },
};
</script>
<style scoped>
.container {
  display: flex;
  flex-direction: column;
  margin-top: 1em;
}

.form__row {
  display: flex;
  margin-bottom: 0.3em;
}

.title,
.content {
  width: 100%;
}

.title {
  font-size: 1.5rem;
  padding: 0.2em;
}

.content {
  font-size: 1.1rem;
  padding: 0.2em;
}

.write-btn-container {
  text-align: center;
  padding: 0.2em;
}

.write-btn {
  width: 5em;
  color: whitesmoke;
  padding: 0.3em;
  border-radius: 1em;
  border: 1px solid whitesmoke;
  outline: none;
  background-color: transparent;
}
</style>
