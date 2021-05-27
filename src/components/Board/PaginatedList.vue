<template>
  <div class="boardList">
    <table class="table">
      <tr>
        <th class="title">제목</th>
        <th class="writer">작성자</th>
        <th class="regdate">작성일</th>
        <th class="views">조회</th>
      </tr>
      <tr v-for="p in paginatedData" :key="p.no">
        <td>
          <router-link :to="{ name: 'Read', params: { boardId: p.board_no } }" class="tr">
            {{ p.board_title }}
          </router-link>
        </td>
        <td>{{ p.user_id }}</td>
        <td>{{ p.board_regdate.slice(0, 10) }}</td>
        <td>{{ p.board_count }}</td>
      </tr>
    </table>
    <div class="btn-cover">
      <button :disabled="pageNum === 0" @click="prevPage" class="page-btn">이전</button>
      <span class="page-count">{{ pageNum + 1 }} / {{ pageCount }} 페이지</span>
      <button :disabled="pageNum >= pageCount - 1" @click="nextPage" class="page-btn">다음</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "paginated-list",
  data() {
    return {
      pageNum: 0,
    };
  },
  props: {
    listArray: {
      type: Array,
      required: true,
    },
    pageSize: {
      type: Number,
      required: false,
      default: 10,
    },
  },
  methods: {
    nextPage() {
      this.pageNum += 1;
    },
    prevPage() {
      this.pageNum -= 1;
    },
  },
  computed: {
    pageCount() {
      let listLeng = this.listArray.length,
        listSize = this.pageSize,
        page = Math.floor(listLeng / listSize);
      if (listLeng % listSize > 0) page += 1;

      /*
      아니면 page = Math.floor((listLeng - 1) / listSize) + 1;
      이런식으로 if 문 없이 고칠 수도 있다!
      */
      return page;
    },
    paginatedData() {
      const start = this.pageNum * this.pageSize,
        end = start + this.pageSize;
      return this.listArray.slice(start, end);
    },
  },
};
</script>

<style scoped>
.boardList {
  width: 70%;
}
table {
  width: 100%;
  border-collapse: collapse;
  color: whitesmoke;
}

.table .title {
  width: 60%;
}

.table .writer {
  width: 10%;
}

.table .regdate {
  width: 20%;
}

.table .views {
  width: 10%;
}

table th {
  font-size: 1.2rem;
}
table tr {
  height: 2rem;
  text-align: center;
  border-bottom: 1px solid whitesmoke;
}
table tr:first-of-type {
  border-top: 2px solid whitesmoke;
}
table tr td {
  padding: 1rem 0;
  font-size: 1.1rem;
}
.btn-cover {
  margin-top: 1.5rem;
  text-align: center;
  color: whitesmoke;
}
.btn-cover .page-btn {
  width: 5rem;
  height: 2rem;
  letter-spacing: 0.5px;
  color: whitesmoke;
}
.btn-cover .page-count {
  padding: 0 1rem;
}
.btn-cover button {
  border: 0.5px solid whitesmoke;
  border-radius: 1em;
}
.tr {
  color: whitesmoke;
}

@media screen and (max-width: 24rem) {
  .boardList {
    width: 90%;
  }
  table th {
    font-size: 1rem;
  }
  table tr td {
    font-size: 0.8rem;
  }
  .table .title {
    width: 50%;
  }

  .table .writer {
    width: 20%;
  }

  .table .regdate {
    width: 30%;
  }
  .btn-cover {
    width: 100%;
  }
}
</style>
