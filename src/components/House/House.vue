<template>
  <li class="house">
    <!-- {{ house }} -->
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
      <div class="house-address">
        주소 : {{ house.houserent_address.slice(1, house.houserent_address.length - 1) }}
      </div>
      <!-- <div class="house-time">등록날짜 : {{ house.registration.slice(0, 10) }}</div> -->
    </div>
  </li>
</template>
<script>
import { numberWithCommas } from "@/utils/util.js";
export default {
  props: ["house"],
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
  display: flex;
  flex-direction: column;
  width: 16em;
  padding: 1em;
  background-color: whitesmoke;
  border-bottom: 0.2px solid darkgray;
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
}
</style>
