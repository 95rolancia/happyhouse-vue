import boardApi from "@/service/boardApi.js";

const board = {
  state: {
    boardList: [
      {
        board_id: 1,
        board_title: "안녕",
        board_content: "1",
      },
      {
        board_id: 2,
        board_title: "안녕",
        board_content: "2",
      },
      {
        board_id: 3,
        board_title: "안녕",
        board_content: "3",
      },
    ],
    board: {},
  },
  mutations: {
    setBoardList(state, payload) {
      state.boardList = payload;
    },
    setBoard(state, payload) {
      state.board = payload;
    },
    writeBoard(state, payload) {
      state.boardList.push(payload);
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
    writeBoard: async ({ commit }, board) => {
      try {
        const res = await boardApi.writeBoard(board);
        if (res.status !== 200) {
          throw new Error("서버가 이상합니다.");
        }
        commit("writeBoard", board);
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
