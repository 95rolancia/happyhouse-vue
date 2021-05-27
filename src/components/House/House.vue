<template>
  <li class="house">
    <!-- {{ house }} -->
    <div class="score" @mouseenter="scoreHover" @mouseleave="scoreHover">
      종합 점수 : {{ house.jisu }}
    </div>
    <div class="house-buildType">
      <span>{{ house.houserent_buildTypeName }}</span>
    </div>
    <div class="house-price">
      <div v-if="+house.houserent_fee === 0">
        <span>전세</span> &nbsp;
        <span>{{ deposit }}</span>
      </div>
      <div v-else>
        <span>월세</span> &nbsp; <span>{{ deposit }}</span> /
        <span>{{ fee }}</span>
      </div>
    </div>
    <div class="house-info">
      <div class="house-name">이름 : {{ house.houserent_name }}</div>
      <div class="house-floor">층수 : {{ house.houserent_floor }}층</div>
      <div class="house-area">면적 : {{ house.houserent_area }}m<sup>2</sup></div>
      <div class="house-address">주소 : {{ house.houserent_address }}</div>
      <!-- <div class="house-time">등록날짜 : {{ house.registration.slice(0, 10) }}</div> -->
    </div>
    <div class="score_info" ref="scoreInfo">
      <div>반경 500m 시설</div>
      <div>카페 : {{ house.convList[0].coffee }}</div>
      <div>편의점 : {{ house.convList[0].convenience }}</div>
      <div>경찰서 : {{ house.convList[0].police }}</div>
      <div>학군 : {{ house.convList[0].school }}</div>
    </div>
  </li>
</template>
<script>
import { numberWithCommas } from "@/utils/util.js";
export default {
  props: ["house"],
  methods: {
    scoreHover() {
      this.$refs.scoreInfo.classList.toggle("visible");
    },
  },
  computed: {
    deposit() {
      return numberWithCommas(this.house.houserent_deposit);
    },
    fee() {
      return numberWithCommas(this.house.houserent_fee);
    },
  },
};
</script>
<style>
.house {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 16em;
  padding: 1em;
  background-color: whitesmoke;
  border-bottom: 0.2px solid darkgray;
}

.score {
  position: absolute;
  z-index: 1000;
  right: 1em;
  color: blueviolet;
  font-size: 1.2rem;
  text-align: right;
  cursor: pointer;
}

.score_info {
  display: none;
  position: absolute;
  z-index: 5000;
  top: 2em;
  width: 10em;
  background-color: black;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
}

.score_info.visible {
  display: flex;
  flex-direction: column;
}

.score:hover .score {
  background-color: blue;
  color: white;
}

.house.active {
  background-color: #b5ffff;
}

.house-buildType {
  font-weight: bold;
  font-size: 1.1rem;
}

.house-price {
  font-size: 1.1rem;
  color: #5c9eea;
}

@media screen and (max-width: 24rem) {
  .house {
    width: 100%;
    font-size: 0.8rem;
    padding-bottom: 2em;
  }

  .score {
    right: 2em;
  }
}
</style>
