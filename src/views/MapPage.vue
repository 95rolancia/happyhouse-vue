<template>
  <section class="main">
    <div class="dong">{{ dong }}</div>
    <HouseList :houseList="houseList" :selectedIndex="selectedIndex" />
    <!-- <font-awesome-icon :icon="['fas', 'arrow-left']" class="houseListToggle" @click="toggle" /> -->
    <Map :loc="this.$route.params" :houseList="houseList" @drag="drag" @markerClicked="clicked" />
  </section>
</template>
<script>
import HouseList from "@/components/House/HouseList.vue";
import Map from "@/components/Map.vue";
import { mapActions, mapGetters } from "vuex";
import mapApi from "@/service/mapApi.js";
export default {
  components: {
    Map,
    HouseList,
  },
  data() {
    return {
      selectedIndex: "",
    };
  },
  methods: {
    ...mapActions(["getHouseList", "getLegalInfo"]),
    async drag(loc) {
      let res = await mapApi.getLegalInfo(loc);
      if (this.legalInfo.legalCode !== res.data.legalCode) {
        this.$store.commit("setLegalInfo", res.data);
        await this.getHouseList(loc);
      }
    },
    clicked(index) {
      this.selectedIndex = index;
    },
  },
  async created() {
    const firstLoc = this.$route.params;
    await this.getHouseList(firstLoc);
    await this.getLegalInfo(firstLoc);
  },
  computed: {
    ...mapGetters(["houseList", "legalInfo"]),
    dong() {
      if (this.legalInfo === null) {
        return this.$route.params;
      }
      return this.legalInfo.city + " " + this.legalInfo.gu + " " + this.legalInfo.dong;
    },
  },
};
</script>
<style scoped>
.main {
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 50em;
  background: center/100% no-repeat url("../assets/main_page_background.jpg");
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 8em;
}

.dong {
  position: absolute;
  top: 7em;
  z-index: 3;
  font-size: 1.3rem;
  font-weight: bold;
  padding: 0.3em;
  border: 0.5px solid black;
  border-radius: 0.3em;
  background-color: white;
}

@media screen and (max-width: 24rem) {
  .main {
    flex-direction: column-reverse;
    padding-top: 5.2em;
  }

  .dong {
    position: fixed;
    top: 6em;
    font-size: 0.8rem;
  }

  .houseListToggle {
    position: absolute;
    border: 1px solid darkgray;
    padding: 1em 0.1em;
    color: darkgray;
    background-color: white;
    top: 45%;
    left: 60%;
    z-index: 50;
  }
}
</style>
