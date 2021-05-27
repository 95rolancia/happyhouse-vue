<template>
  <form class="house-add-form" @submit.prevent="houseAdd">
    <fieldset id="radio1">
      <label for="">매물 종류</label>
      <input class="radio" type="radio" value="월세" name="radio1" v-model="rentType" required />
      월세
      <input class="radio" type="radio" value="전세" name="radio1" v-model="rentType" required />
      전세
    </fieldset>
    <fieldset id="radio2">
      <label for="">집 종류</label>
      <input class="radio" type="radio" value="아파트" name="radio2" v-model="houseType" required />
      아파트
      <input
        class="radio"
        type="radio"
        value="다세대/연립"
        name="radio2"
        v-model="houseType"
        required
      />
      다세대/연립 <br />
      <input
        class="radio"
        type="radio"
        value="오피스텔"
        name="radio2"
        v-model="houseType"
        required
      />
      오피스텔
      <input class="radio" type="radio" value="주택" name="radio2" v-model="houseType" required />
      주택
    </fieldset>
    <div class="form__row">
      <label for="email">시/군/구</label>
      <Autocomplete type="houseAddForm" :select="select" @change="updateInput" />
    </div>
    <div class="form__row">
      <label for="houseName">건물 이름</label>
      <input type="text" id="houseName" placeholder="건물 이름" v-model="houseName" required />
    </div>
    <div class="form__row">
      <label for="area">면적</label>
      <div>
        <input class="input" type="text" id="area" placeholder="면적" v-model="area" required />
        <div class="unit">m<sup>2</sup></div>
      </div>
    </div>
    <div class="form__row">
      <label for="floor">층수</label>
      <input type="number" id="floor" placeholder="층수" v-model="floor" required />
    </div>
    <div class="form__row">
      <label for="deposit">보증금</label>
      <input
        type="number"
        id="deposit"
        placeholder="보증금"
        v-model="deposit"
        step="10000"
        required
      />
    </div>
    <div class="form__row">
      <label for="fee">월세</label>
      <input type="number" id="fee" placeholder="월세" v-model="fee" step="10000" required />
    </div>
    <div class="form__row--btn">
      <button class="add-btn">등록</button>
    </div>
  </form>
</template>
<script>
import Autocomplete from "@/components/Autocomplete.vue";
import mapApi from "@/service/mapApi.js";
export default {
  name: "search-form",
  components: {
    Autocomplete,
  },
  data() {
    return {
      rentType: "",
      houseType: "",
      select: "",
      houseName: "",
      area: "",
      floor: "",
      deposit: "",
      fee: "",
    };
  },
  methods: {
    updateInput(value) {
      this.select = value;
    },
    async houseAdd() {
      const house = {
        houserent_rentType: this.rentType,
        houserent_buildTypeName: this.houseType,
        houserent_address: this.select,
        houserent_name: this.houseName,
        houserent_area: this.area,
        houserent_floor: this.floor,
        houserent_deposit: this.deposit,
        houserent_fee: this.fee,
      };
      console.log(house);
      await mapApi.addHouse(house);
      alert("매물 등록이 완료되었습니다.");
      this.$emit("close");
    },
  },
};
</script>
<style scoped>
.signup-form {
  display: flex;
  flex-direction: column;
  width: 18em;
  margin: auto;
}

.form__row {
  display: flex;
  flex-direction: column;
  margin-bottom: 1.2em;
}

label {
  color: #14cba8;
  margin-bottom: 0.5em;
}

#radio1,
#radio2 {
  color: #14cba8;
  border: none;
}

.form__row input {
  font-size: 1rem;
  padding: 0.5em;
  outline: none;
  border: none;
  border-bottom: 1px solid darkgray;
}

.form__row--btn {
  text-align: center;
  margin: 0 auto;
}

.add-btn {
  padding: 0.5em 1em;
  color: white;
  background-color: #8c7569;
  border-radius: 0.2em;
  margin-top: 1em;
  transition: all 100ms ease-in-out;
}

.add-btn:hover {
  color: white;
  background-color: #55311c;
}

.unit {
  display: inline-block;
  flex-basis: 2;
  color: #14cba8;
}
</style>
