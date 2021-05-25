<template>
  <li class="house">
    <!-- {{ house }} -->
    <div class="house-price">
      <span class="house-price-type">
        {{ house.rentMoney ? "월세" : "전세" }}
      </span>
      <span class="house-price-deposit">
        {{ housePrice }}
      </span>
      <span v-if="house.rentMoney" class="house-price-rent">/{{ house.rentMoney }}</span>
    </div>
    <div class="house-info">
      <div class="house-name">이름 : {{ house.aptName }}</div>
      <div class="house-floor">층수 : {{ house.floor }}층</div>
      <div class="house-address">주소 : {{ house.dong }} {{ house.jibun }}</div>
      <div class="house-time">등록날짜 : {{ house.registration.slice(0, 10) }}</div>
    </div>
  </li>
</template>
<script>
import { numberWithCommas } from "@/utils/util.js";
export default {
  props: ["house"],
  computed: {
    housePrice() {
      return numberWithCommas(this.house.dealAmount);
    },
  },
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
