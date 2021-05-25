<template lang="">
  <PaginatedList :list-array="pageArray" />
</template>
<script>
import axios from "axios";
import PaginatedList from "./PaginatedList.vue";
export default {
  name: "simple-pagination",
  components: {
    PaginatedList,
  },
  data() {
    return {
      pageArray: [],
    };
  },
  created() {
    axios
      .get("http://sample.bmaster.kro.kr/contacts")
      .then((response) => {
        console.log(response);
        this.pageArray = response.data.contacts;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style scoped>
h1 {
  color: #454545;
  text-align: center;
}
</style>
