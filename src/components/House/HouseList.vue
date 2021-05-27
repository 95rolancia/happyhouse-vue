<template>
  <ul class="houseList">
    <House v-for="(house, index) in houseList" :key="index" :house="house" ref="house" />
    <div v-if="houseList && houseList.length === 0" class="house">
      <div class="title">매물이 없습니다.</div>
    </div>
  </ul>
</template>
<script>
import House from "./House.vue";

export default {
  props: ["houseList", "selectedIndex"],
  components: { House },
  watch: {
    selectedIndex() {
      this.$refs.house[this.selectedIndex].$el.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
      this.$refs.house.forEach((house) => {
        if (house.$el.classList.contains("active")) {
          house.$el.classList.remove("active");
        }
      });
      this.$refs.house[this.selectedIndex].$el.classList.add("active");
    },
  },
};
</script>
<style scoped>
.houseList {
  z-index: 3;
  height: 100vh;
  background-color: whitesmoke;
  border: 0.2px solid darkgray;
  overflow-y: auto;
  margin: 0;
}

.houseList .title {
  text-align: center;
  font-size: 1.5rem;
  margin-top: 1.7em;
}

@media screen and (max-width: 24rem) {
  .houseList {
    position: relative;
    margin: 0;
    height: 50em;
    width: 100%;
    border: none;
  }
}
</style>
