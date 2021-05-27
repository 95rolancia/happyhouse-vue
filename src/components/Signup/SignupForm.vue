<template>
  <form class="form signup" @submit.prevent="signup">
    <div class="form__row">
      <label for="email">이메일</label>
      <div class="email">
        <input type="email" id="email" v-model="email" placeholder="user@example.com" required />
        <button class="btn duplicate" @click.prevent="handleEmailDuplicateCheck">중복</button>
      </div>
    </div>
    <span v-if="showEmailMsg" class="msg email" :class="{ validEmail: isValidEmail }">
      {{ isValidEmail ? "사용할 수 있는 이메일입니다." : "사용할 수 없는 이메일입니다." }}</span
    >
    <div class="form__row">
      <label for="pwdFirst">비밀번호</label>
      <input type="password" id="pwdFirst" v-model="pwdFirst" placeholder="********" />
    </div>
    <div class="form__row">
      <label for="pwdSecond">비밀번호 확인</label>
      <input
        type="password"
        id="pwdSecond"
        v-model="pwdSecond"
        placeholder="********"
        @keyup="pwdDuplicateCheck"
      />
    </div>
    <span
      v-if="pwdSecond.length >= 1"
      class="msg pwd"
      :class="{ validPwd: isValidPwd, validPwd2: isValidPwd2 }"
      >{{
        isValidPwd2
          ? "사용할 수 있는 비밀번호입니다."
          : isValidPwd
          ? "길이는 6자 ~ 20자, 대문자 하나이상 포함!"
          : "비밀번호가 일치하지 않습니다."
      }}</span
    >
    <div class="form__row">
      <fieldset class="prefer">
        <legend>선호 하는 편의시설</legend>
        <li>
          <input type="checkbox" value="커피점/카페" id="커피점/카페" @change="change($event)" />
          <label for="커피점/카페">커피점/카페</label>
          <div v-if="cafeChecked">
            <Multiselect
              v-model="selectedCafeList"
              placeholder="선호하는 순서대로 선택해주세요."
              label="name"
              track-by="code"
              :options="cafeList"
              :multiple="true"
              :taggable="true"
              @tag="addTag"
            />
          </div>
        </li>
        <li>
          <input type="checkbox" value="편의점" id="편의점" @change="change($event)" />
          <label for="편의점">편의점</label>
          <div v-if="convenienceChecked">
            <Multiselect
              v-model="selectedConvenienceList"
              placeholder="선호하는 순서대로 선택해주세요."
              label="name"
              track-by="code"
              :options="convenienceList"
              :multiple="true"
              :taggable="true"
              @tag="addTag"
            />
          </div>
        </li>
      </fieldset>
    </div>
    <div class="form__row--btn">
      <button class="btn signup">회원 가입</button>
    </div>
  </form>
</template>
<script>
import { pwdEqualCheck, checkPassword } from "@/utils/util.js";
import userApi from "@/service/userApi.js";
import Multiselect from "vue-multiselect";

export default {
  name: "signup-form",
  components: {
    Multiselect,
  },
  data() {
    return {
      email: "",
      showEmailMsg: false,
      isValidEmail: false,
      pwdFirst: "",
      pwdSecond: "",
      isValidPwd: false,
      isValidPwd2: false,
      cafeChecked: false,
      convenienceChecked: false,
      selectedCafeList: [],
      cafeList: [
        { name: "스타벅스", code: "star" },
        { name: "투썸플레이스", code: "twosome" },
        { name: "이디야", code: "ediya" },
        { name: "빽다방", code: "back" },
        { name: "커피빈", code: "bean" },
      ],
      selectedConvenienceList: [],
      convenienceList: [
        { name: "GS25", code: "gs" },
        { name: "CU", code: "cu" },
        { name: "세븐일레븐", code: "seven" },
        { name: "이마트24", code: "emart" },
        { name: "미니스톱", code: "mini" },
      ],
    };
  },
  methods: {
    async handleEmailDuplicateCheck() {
      const res = await userApi.emailDuplicateCheck(this.email);
      if (res.data === "can use") {
        this.isValidEmail = true;
      } else if (res.data === "cannot use") {
        this.isValidEmail = false;
      }
      this.showEmailMsg = true;
    },
    pwdDuplicateCheck() {
      if (pwdEqualCheck(this.pwdFirst, this.pwdSecond)) this.isValidPwd = true;
      else this.isValidPwd = false;

      if (checkPassword(this.pwdSecond) && this.isValidPwd) this.isValidPwd2 = true;
      else this.isValidPwd2 = false;
    },
    addTag(newTag) {
      const tag = {
        name: newTag,
        code: newTag.substring(0, 2) + Math.floor(Math.random() * 10000000),
      };
      this.options.push(tag);
      this.value.push(tag);
    },
    async signup() {
      const checkedPrefers = {
        cafe: this.selectedCafeList,
        convenience: this.selectedConvenienceList,
      };
      const user = {
        user_id: this.email,
        user_pass: this.pwdSecond,
        checkedPrefers: checkedPrefers,
      };

      try {
        const res = await userApi.signup(user);
        console.log(res);
        alert("회원가입 성공!");
        this.$emit("close");
      } catch (error) {
        console.log(error);
      }
    },
    change(a) {
      if (a.target.defaultValue === "커피점/카페") {
        this.cafeChecked = !this.cafeChecked;
      } else if (a.target.defaultValue === "편의점") {
        this.convenienceChecked = !this.convenienceChecked;
      }
    },
  },
};
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style scoped>
.form__row {
  display: flex;
  flex-direction: column;
  margin-bottom: 1.2em;
}

.email {
  display: flex;
  justify-content: space-between;
}

#email {
  width: 75%;
}

label {
  color: #14cba8;
  margin-bottom: 0.5em;
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

.btn.signup,
.btn.duplicate {
  padding: 0.5em 1em;
  color: white;
  background-color: #8c7569;
  border-radius: 0.2em;
  margin-top: 1em;
  transition: all 200ms ease-in-out;
}

.btn.signup:hover,
.btn.duplicate:hover {
  color: white;
  background-color: #55311c;
}

.msg {
  display: inline-block;
  color: red;
  text-align: center;
  margin-bottom: 1em;
}

.msg.validPwd,
.msg.validEmail {
  color: blue;
}

.prefer {
  color: black;
}
</style>
