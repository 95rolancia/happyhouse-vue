<template>
  <form class="update-form" @submit.prevent="update">
    <div class="form__row">
      <label for="email">이메일</label>
      <input type="text" id="email" :value="user.user_id" readonly />
    </div>
    <div class="form__row">
      <label for="pwdFirst">비밀번호</label>
      <input type="password" id="pwdFirst" placeholder="********" v-model="pwdFirst" />
    </div>
    <div class="form__row">
      <label for="pwd">비밀번호 확인</label>
      <input
        type="password"
        id="pwdSecond"
        placeholder="********"
        v-model="pwdSecond"
        @keyup="checkPwd"
      />
    </div>
    <span v-show="pwdSecond.length >= 1" class="msg pwd" :class="{ validPwd: isValidPwd }">{{
      isValidPwd ? "비밀번호가 일치합니다." : "비밀번호가 일치하지 않습니다."
    }}</span>
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
    <div class="form__row">
      <button class="btn update">회원 수정</button>
      <button class="btn withdrawl" @click.prevent="handleWithdrawal">회원 탈퇴</button>
    </div>
  </form>
</template>
<script>
import { pwdEqualCheck } from "@/utils/util.js";
import Multiselect from "vue-multiselect";
import { mapGetters, mapActions } from "vuex";
export default {
  components: {
    Multiselect,
  },
  data() {
    return {
      pwdFirst: "",
      pwdSecond: "",
      isValidPwd: false,
      cafeChecked: false,
      convenienceChecked: false,
      selectedCafeList: [],
      cafeList: [
        { name: "스타벅스", code: "star" },
        { name: "투썸플레이스", code: "twosome" },
        { name: "이디야", code: "ediya" },
        { name: "빽다방", code: "back" },
        { name: "메가커피", code: "mega" },
        { name: "커피빈", code: "bean" },
        { name: "할리스", code: "hollys" },
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
    ...mapActions(["updateUser", "withdrawal"]),
    checkPwd() {
      if (pwdEqualCheck(this.pwdFirst, this.pwdSecond)) this.isValidPwd = true;
      else this.isValidPwd = false;
    },
    change(a) {
      if (a.target.defaultValue === "커피점/카페") {
        this.cafeChecked = !this.cafeChecked;
      } else if (a.target.defaultValue === "편의점") {
        this.convenienceChecked = !this.convenienceChecked;
      }
    },
    addTag(newTag) {
      const tag = {
        name: newTag,
        code: newTag.substring(0, 2) + Math.floor(Math.random() * 10000000),
      };
      this.options.push(tag);
      this.value.push(tag);
    },
    async update() {
      const checkedPrefers = {
        cafe: this.selectedCafeList,
        convenience: this.selectedConvenienceList,
      };
      const newUser = {
        user_id: this.user.user_id,
        user_pass: this.pwdSecond,
        checkedPrefers: checkedPrefers,
      };

      const result = await this.updateUser(newUser);

      if (result) {
        alert("성공!");
        this.$emit("close");
      } else {
        alert("실패!");
      }
    },
    async handleWithdrawal() {
      const result = this.withdrawal();
      if (result) {
        alert("회원 탈퇴가 완료되었습니다.");
      } else {
        alert("회원 탈퇴에 실패했습니다.");
      }
    },
  },
  computed: {
    ...mapGetters(["user"]),
  },
};
</script>
<style scoped>
.form__row {
  display: flex;
  flex-direction: column;
  margin-bottom: 1.2em;
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

.btn.update,
.btn.withdrawl {
  padding: 0.5em 1em;
  color: white;
  background-color: #8c7569;
  border-radius: 0.2em;
  margin-top: 1em;
  transition: all 200ms ease-in-out;
}

.btn.update:hover,
.btn.withdrawl:hover {
  color: white;
  background-color: #55311c;
}

.msg {
  display: inline-block;
  color: red;
  text-align: center;
  margin-bottom: 1em;
}

.msg.validPwd {
  color: blue;
}

.prefer {
  color: black;
}
</style>
