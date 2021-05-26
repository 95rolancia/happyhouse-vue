<template>
  <li class="house">
    <!-- {{ house }} -->
    <div class="house-price">
      <div v-if="house.houserent_fee === 0">
        <span>전세</span>
        <span>{{ house.houserent_deposit }}</span>
      </div>
      <div v-else>
        <span>월세</span>
        <span>{{ house.houserent_deposit }}</span>
        <span>{{ house.houserent_fee }}</span>
      </div>
    </div>
    <div class="house-info">
      <div class="house-name">이름 : {{ house.houserent_name }}</div>
      <div class="house-floor">층수 : {{ house.houserent_floor }}층</div>
      <div class="house-address">주소 : {{ house.houserent_address }}</div>
      <!-- <div class="house-time">등록날짜 : {{ house.registration.slice(0, 10) }}</div> -->
    </div>
  </li>
</template>
<script>
// import { numberWithCommas } from "@/utils/util.js";
export default {
  props: ["house"],
  // computed: {
  //   housePrice() {
  //     return numberWithCommas(this.house.dealAmount);
  //   },
  // },
};
</script>
<style>
.house {
  width: 16em;
  height: 8em;
  padding: 1em;
  background-color: whitesmoke;
  border-bottom: 0.2px solid darkgray;
}

.house.active {
  background-color: darkcyan;
}

.house-price {
  font-size: 1.2rem;
  color: #5c9eea;
}

@media screen and (max-width: 24rem) {
  .house {
    width: 100%;
    font-size: 0.8rem;
  }
}
</style>
