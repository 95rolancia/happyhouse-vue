<template>
  <form class="house-add-form" @submit.prevent="houseAdd">
    <div class="form__row">
      <label for="email">시/군/구</label>
      <Autocomplete type="houseAddForm" :select="select" @change="updateInput" />
    </div>
    <div class="form__row">
      <label for="houseName">건물 이름</label>
      <input type="text" id="houseName" placeholder="건물 이름" v-model="houseName" />
    </div>
    <div class="form__row">
      <label for="area">면적</label>
      <div>
        <input class="input" type="text" id="area" placeholder="면적" v-model="area" />
        <div class="unit">m^2</div>
      </div>
    </div>
    <div class="form__row">
      <label for="floor">층수</label>
      <input type="number" id="floor" placeholder="층수" v-model="floor" />
    </div>
    <div class="form__row">
      <label for="deposit">보증금</label>
      <input type="number" id="deposit" placeholder="보증금" v-model="deposit" step="10000" />
    </div>
    <div class="form__row">
      <label for="fee">월세</label>
      <input type="number" id="fee" placeholder="월세" v-model="fee" step="10000" />
    </div>
    <div class="form__row">
      <button class="signup-btn">등록</button>
    </div>
  </form>
</template>
<script>
import Autocomplete from "@/components/Autocomplete.vue";
import { houseApi } from "@/service/api.js";
export default {
  name: "search-form",
  components: {
    Autocomplete,
  },
  data() {
    return {
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
      const [a, b, c] = this.select.split(" ");
      console.log(a, b, c);
      const house = {
        city: a,
        gu: b,
        dong: c,
        aptName: this.houseName,
        area: this.area,
        floor: this.floor,
        deposit: this.deposit,
        fee: this.fee,
      };

      await houseApi.addHouse(house);
      this.$emit("close");
    },
  },
};
</script>
<style scoped>
.signup-form {
  display: flex;
  flex-direction: column;
}

.form__row {
  display: flex;
  flex-direction: column;
  margin-bottom: 1.2em;
}

label {
  text-align: start;
  color: #14cba8;
  margin-bottom: 0.5em;
}

.form__row input {
  font-size: 1rem;
  padding: 0.5em;
  outline: none;
}

.input-email {
  width: 80%;
}

.duplicate-btn {
  border: 1px solid black;
  height: 2.6em;
  margin-left: 0.1em;
  border-radius: 0.5em;
  transition: all 200ms ease-out;
}

.duplicate-btn:hover {
  color: white;
  background-color: teal;
}

.signup-btn {
  height: 3em;
  margin-left: 0;
  border-radius: 1em;
  color: black;
  border: 0.5px solid black;
  background-color: whitesmoke;
}

.signup-btn:hover {
  color: white;
  background-color: teal;
}

.prefer li {
  text-align: start;
  list-style: none;
}

.msg {
  color: red;
  margin-bottom: 0.7em;
}

.msg.ValidPwd,
.msg.ValidEmail {
  color: blue;
}

.house-add-form .input {
  font-size: 1rem;
}

.input {
  flex-basis: 8;
}

.unit {
  display: inline-block;
  flex-basis: 2;
}
</style>
