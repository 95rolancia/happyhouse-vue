import boardApi from "@/service/boardApi.js";

const board = {
  state: {
    boardList: [],
    board: {},
  },
  mutations: {
    setBoardList(state, payload) {
      state.boardList = payload;
    },
    setBoard(state, payload) {
      state.board = payload;
    },
  },
  actions: {
    getBoardList: async ({ commit }) => {
      try {
        const res = await boardApi.getBoardList();
        if (res.status !== 200) {
          throw new Error("서버가 이상합니다.");
        }
        commit("setBoardList", res.data);
      } catch (error) {
        console.log(error);
      }
    },
    getBoard: async ({ commit }, boardId) => {
      try {
        const res = await boardApi.getBoard(boardId);
        if (res.status !== 200) {
          throw new Error("서버가 이상합니다.");
        }
        commit("setBoard", res.data);
      } catch (error) {
        console.log(error);
      }
    },
  },
  getters: {
    boardList(state) {
      return state.boardList;
    },
    board(state) {
      return state.board;
    },
  },
};

export default board;
