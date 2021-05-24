<template>
  <div class="container-btn signup">
    <button class="signup-btn" @click="toggleModal">Sign up</button>
    <LoginModal v-if="showModal" @close="toggleModal">
      <template slot="header">
        <h1>Welcome!</h1>
        <font-awesome-icon :icon="['fas', 'window-close']" @click="toggleModal" />
      </template>
      <SignupForm @close="toggleModal" />
    </LoginModal>
  </div>
</template>
<script>
import LoginModal from "../Login/LoginModal.vue";
import SignupForm from "./SignupForm.vue";
export default {
  components: {
    LoginModal,
    SignupForm,
  },
  data() {
    return {
      showModal: false,
    };
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
    },
  },
};
</script>
<style>
.signup-btn {
  font-size: 1.2rem;
  margin: 0em 1em;
  min-width: 9rem;
  color: white;
  background-color: orange;
  padding: 0.5em 2em;
  border: 1px solid whitesmoke;
  border-radius: 2em;
  transition: all 200ms ease-out;
}

.signup-btn:hover {
  background-color: white;
  color: teal;
}
</style>
