<template>
  <div class="container login">
    <button class="btn login" @click="toggleModal">Login</button>
    <LoginModal v-if="showModal" @close="toggleModal">
      <template slot="header">
        <h1>Welcome!</h1>
        <font-awesome-icon :icon="['fas', 'window-close']" @click="toggleModal" />
      </template>
      <LoginForm @close="toggleModal" />
    </LoginModal>
  </div>
</template>
<script>
import LoginModal from "./LoginModal.vue";
import LoginForm from "./LoginForm.vue";
export default {
  components: {
    LoginModal,
    LoginForm,
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
.fa-window-close {
  position: absolute;
  top: 1em;
  right: 1em;
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 200ms ease-in-out;
}
.fa-window-close:hover {
  color: red;
}
</style>
<style scoped>
.btn.login {
  font-size: 1.2rem;
  color: white;
  background-color: orange;
  padding: 0.5em 2em;
  border: 1px solid whitesmoke;
  border-radius: 2em;
  transition: all 200ms ease-out;
}

.btn.login:hover {
  background-color: whitesmoke;
  color: teal;
}
</style>
