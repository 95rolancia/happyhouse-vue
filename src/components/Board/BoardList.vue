<template lang="">
  <PaginatedList :list-array="boardList" />
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import PaginatedList from "./PaginatedList.vue";
export default {
  name: "simple-pagination",
  components: {
    PaginatedList,
  },
  created() {
    this.getBoardList();
  },
  methods: {
    ...mapActions(["getBoardList"]),
  },
  computed: {
    ...mapGetters(["boardList"]),
  },
};
</script>

<style scoped>
h1 {
  color: #454545;
  text-align: center;
}
</style>
