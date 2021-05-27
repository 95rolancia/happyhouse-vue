<template>
  <section class="main">
    <div class="house-container">
      <div class="btns">
        <button class="sort btn" @click="sortByDeposit($event)">전세 가격 ↓</button>
        <button class="sort btn" @click="sortByFee($event)">월세 가격 ↓</button>
        <button class="sort btn" @click="sortByScore($event)">종합 점수 ↓</button>
        <button class="sort btn" @click="showOptions">옵션</button>
      </div>
      <ul class="filter-menu hide" ref="filterMenu">
        <span class="close" @click="showOptions">X</span>
        <div class="houseRentType">
          <li v-for="item in houseRentType" :key="item">
            <input
              type="checkbox"
              :id="item"
              :value="item"
              v-model="checkedHouseRentType"
              checked
            />
            <label :for="item">{{ item }}</label>
          </li>
        </div>
        <div class="houseType">
          <li v-for="item in houseType" :key="item">
            <input type="checkbox" :id="item" :value="item" v-model="checkedHouseType" />
            <label :for="item">{{ item }}</label>
          </li>
        </div>
      </ul>
      <HouseList :houseList="filteredHouseList" :selectedIndex="selectedIndex" />
    </div>
    <div class="dong">{{ dong }}</div>
    <Map
      :loc="this.$route.params"
      :houseList="filteredHouseList"
      @drag="drag"
      @markerClicked="clicked"
    />
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
      houseRentType: ["전세", "준전세", "준월세", "월세"],
      houseType: ["아파트", "오피스텔", "다세대/연립"],
      checkedHouseRentType: ["전세", "준전세", "준월세", "월세"],
      checkedHouseType: ["아파트", "오피스텔", "다세대/연립"],
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
    sortByDeposit($event) {
      if ($event.target.textContent === "전세 가격 ↓") {
        this.houseList.sort((a, b) => a.houserent_deposit - b.houserent_deposit);
        $event.target.textContent = "전세 가격 ↑";
      } else {
        this.houseList.sort((a, b) => b.houserent_deposit - a.houserent_deposit);
        $event.target.textContent = "전세 가격 ↓";
      }
    },
    sortByFee($event) {
      if ($event.target.textContent === "월세 가격 ↓") {
        this.houseList.sort((a, b) => a.houserent_fee - b.houserent_fee);
        $event.target.textContent = "월세 가격 ↑";
      } else {
        this.houseList.sort((a, b) => b.houserent_fee - a.houserent_fee);
        $event.target.textContent = "월세 가격 ↓";
      }
    },
    sortByScore($event) {
      if ($event.target.textContent === "종합 점수 ↓") {
        this.houseList.sort((a, b) => a.jisu - b.jisu);
        $event.target.textContent = "종합 점수 ↑";
      } else {
        this.houseList.sort((a, b) => b.jisu - a.jisu);
        $event.target.textContent = "종합 점수 ↓";
      }
    },
    showOptions() {
      this.$refs.filterMenu.classList.toggle("hide");
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
    filteredHouseList() {
      const filtered = this.houseList
        .filter((house) => this.checkedHouseRentType.includes(house.houserent_rentType))
        .filter((house) => this.checkedHouseType.includes(house.houserent_buildTypeName))
        .filter((house) => this.checkedHouseType.includes(house.houserent_buildTypeName));
      return filtered;
    },
  },
};
</script>
<style scoped>
.main {
  position: absolute;
  padding-top: 8em;
  z-index: -1;
  width: 100%;
  height: 100vh;
  background: center/100% no-repeat url("../assets/main_page_background.jpg");
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
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

.house-container {
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.btns {
  z-index: 55;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  width: 100%;
  background-color: whitesmoke;
  border-right: 0.5px solid darkgray;
  padding-bottom: 1em;
}

.btn {
  font-size: 0.8rem;
  width: 7.4em;
  margin: 0.1em;
  padding: 0.5em 1em;
  color: white;
  background-color: #8c7569;
  border-radius: 0.2em;
  margin-top: 1em;
  transition: all 100ms ease-in-out;
}

.btn:hover {
  color: white;
  background-color: #55311c;
}

.filter-menu {
  position: absolute;
  right: 0;
  top: 6em;
  left: 50%;
  z-index: 10;
  display: flex;
  flex-direction: column;
  background-color: white;
  border-top: 0.2px solid darkgray;
  border-left: 0.2px solid darkgray;
  border-right: 0.2px solid darkgray;
}

.filter-menu.hide {
  display: none;
}

.filter-menu > div {
  border-bottom: 0.5px solid darkgray;
}

.filter-menu div {
  padding: 1em;
}

.close {
  position: absolute;
  top: 0.7em;
  right: 1em;
  font-size: 1.2rem;
  cursor: pointer;
}

.close:hover {
  color: red;
}

label {
  padding-left: 0.2em;
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

  .house-container {
    height: 50%;
    width: 100%;
  }

  .btn {
    font-size: 0.7rem;
  }
}
</style>
