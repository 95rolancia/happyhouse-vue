<template>
  <form class="container" @submit.prevent="write">
    <div class="form__row">
      <input class="title" type="text" v-model="board.title" placeholder="제목" required />
    </div>
    <div class="form__row">
      <textarea
        class="content"
        v-model="board.content"
        name=""
        cols="30"
        rows="10"
        placeholder="내용"
        required
      ></textarea>
    </div>
    <div class="write-btn-container">
      <button class="write-btn">등록</button>
    </div>
  </form>
</template>
<script>
import boardApi from "@/service/boardApi.js";
export default {
  data() {
    return {
      board: {
        title: "",
        content: "",
      },
    };
  },
  methods: {
    async write() {
      const board = {
        board_title: this.board.title,
        board_content: this.board.content,
      };
      await boardApi.writeBoard(board);
      alert("게시글이 작성되었습니다.");
      this.$router.push("/qna");
    },
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
