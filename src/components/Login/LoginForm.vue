<template>
  <form class="form login" @submit.prevent="submit">
    <div class="form__row">
      <label for="email">아이디</label>
      <input
        type="text"
        id="email"
        v-model="inputUser.user_id"
        placeholder="user@example.com"
        required
      />
    </div>
    <div class="form__row">
      <label for="password">비밀번호</label>
      <input
        type="password"
        id="password"
        v-model="inputUser.user_pass"
        placeholder="********"
        required
      />
    </div>
    <span v-if="showMsg" class="msg"> 아이디나 비밀번호가 틀렸습니다.</span>
    <div class="form__row--btn">
      <button class="btn login">로그인</button>
    </div>
  </form>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      inputUser: {
        user_id: "",
        user_pass: "",
      },
      showMsg: false,
    };
  },
  methods: {
    ...mapActions(["login", "getUser"]),
    async submit() {
      const token = await this.login(this.inputUser);
      console.log(token);
      if (token) {
        await this.getUser();
        this.$emit("close");
        console.log("logined! ", this.user);
      } else {
        this.showMsg = true;
      }
    },
  },
  computed: {
    ...mapGetters(["user"]),
  },
};
</script>
<style scoped>
.form.login {
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

.btn.login {
  padding: 0.5em 1em;
  color: white;
  background-color: #8c7569;
  border-radius: 0.2em;
  margin-top: 1em;
  transition: all 100ms ease-in-out;
}

.btn.login:hover {
  color: white;
  background-color: #55311c;
}

.msg {
  text-align: center;
  color: red;
}
</style>
