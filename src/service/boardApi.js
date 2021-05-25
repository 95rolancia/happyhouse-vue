import axios from "./axios.js";

export default {
  getBoardList() {
    return axios({
      url: `/board`,
      method: "get",
    });
  },
  getBoard(boardId) {
    return axios({
      url: `/board/${boardId}`,
      method: "get",
    });
  },
  writeBoard(board) {
    return axios({
      url: "/board",
      data: board,
      method: "post",
    });
  },
};
