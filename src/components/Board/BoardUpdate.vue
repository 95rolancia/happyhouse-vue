<template>
  <form class="container" @submit.prevent="update">
    <div class="form__row">
      <input class="title" type="text" v-model="title" required />
    </div>
    <div class="form__row">
      <textarea
        class="content"
        v-model="content"
        name=""
        id=""
        cols="30"
        rows="10"
        required
      ></textarea>
    </div>
    <div class="write-btn-container">
      <button class="write-btn">등록</button>
    </div>
  </form>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import boardApi from "@/service/boardApi.js";
export default {
  data() {
    return {
      title: "",
      content: "",
    };
  },
  created() {
    this.getBoard(this.$route.params.boardId);
    this.title = this.board.board_title;
    this.content = this.board.board_content;
  },
  methods: {
    ...mapActions(["getBoard", "updateBoard"]),
    async update() {
      const updateBoard = {
        board_no: this.board.board_no,
        board_title: this.title,
        board_content: this.content,
      };

      try {
        const res = await boardApi.updateBoard(updateBoard);
        if (res.status !== 200) {
          throw new Error("게시글 수정에 실패하였습니다.");
        }
        alert("수정이 완료되었습니다.");
        this.$router.push("/qna");
      } catch (error) {
        alert("수정에 실패하였습니다.");
        console.log(error);
      }
    },
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
