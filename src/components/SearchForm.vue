<template>
  <div class="search-container">
    <form class="search-form" @submit.prevent="search">
      <Autocomplete :select="select" @change="updateInput" />
      <button class="search-btn">
        <font-awesome-icon :icon="['fas', 'search']" />
      </button>
    </form>
  </div>
</template>
<script>
import Autocomplete from "./Autocomplete.vue";
import mapApi from "@/service/mapApi.js";
export default {
  components: {
    Autocomplete,
  },
  data() {
    return {
      select: "",
    };
  },
  methods: {
    async search() {
      try {
        const loc = await mapApi.getLoc(this.select);
        this.$router.push({
          name: "MapPage",
          params: { ...loc.data },
        });
      } catch (error) {
        console.log(`error : `, error);
      }
    },
    updateInput(value) {
      this.select = value;
    },
  },
};
</script>
<style scoped>
.search-form {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45em;
  background-color: white;
  border-radius: 3em;
}

.search-btn {
  display: flex;
  color: white;
  background-color: darkslateblue;
  font-size: 1.5rem;
  padding: 0.5em;
  border-radius: 50%;
}

@media screen and (max-width: 24rem) {
  .search-form {
    width: 22em;
  }

  .search-btn {
    font-size: 1rem;
  }
}
</style>
