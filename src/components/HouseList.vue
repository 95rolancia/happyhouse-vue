<template>
  <ul class="houseList">
    <div class="btns">
      <button class="sort price" @click="sortByPrice($event)">가격 정렬 ↓</button>
    </div>
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
  methods: {
    sortByPrice($event) {
      if ($event.target.textContent === "가격 정렬 ↓") {
        this.houseList.sort((a, b) => a.dealAmount - b.dealAmount);
        $event.target.textContent = "가격 정렬 ↑";
      } else {
        this.houseList.sort((a, b) => b.dealAmount - a.dealAmount);
        $event.target.textContent = "가격 정렬 ↓";
      }
    },
  },
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
<style>
.houseList {
  position: absolute;
  left: 0;
  z-index: 3;
  height: 50em;
  background-color: whitesmoke;
  border: 0.2px solid darkgray;
  overflow-y: auto;
}

.houseList .title {
  text-align: center;
  font-size: 1.5rem;
  margin-top: 1.7em;
}

.btns {
  display: flex;
  justify-content: center;
  border-bottom: 0.5px solid darkgray;
  padding-bottom: 1em;
}

.sort {
  padding: 0.5em 1em;
  color: white;
  background-color: #8c7569;
  border-radius: 0.2em;
  margin-top: 1em;
  transition: all 100ms ease-in-out;
}

.sort:hover {
  color: white;
  background-color: #55311c;
}

@media screen and (max-width: 24rem) {
  .houseList {
    position: relative;
    margin: 0;
    height: 50em;
    width: 100%;
  }
}
</style>
