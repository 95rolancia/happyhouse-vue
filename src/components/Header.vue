<template>
  <header class="header">
    <Logo />
    <Nav ref="nav" />
    <section class="header-right" ref="headerRight">
      <Login />
      <Signup />
    </section>
    <font-awesome-icon :icon="['fas', 'bars']" class="hamburger" @click="toggle" />
  </header>
</template>
<script>
import Logo from "./Logo.vue";
import Nav from "./Nav.vue";
import Login from "./Login/Login.vue";
import Signup from "./Signup/Signup.vue";
export default {
  components: {
    Logo,
    Nav,
    Login,
    Signup,
  },
  methods: {
    toggle() {
      this.$refs.nav.$el.classList.toggle("visible");
      this.$refs.headerRight.classList.toggle("visible");
    },
  },
};
</script>
<style>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  color: whitesmoke;
  padding: 1em 0em;
}

.header-right {
  display: flex;
}

.header-right.visible {
  display: flex;
}

.hamburger {
  position: absolute;
  top: 1.5em;
  right: 1.2em;
  font-size: 1.5rem;
  color: whitesmoke;
  display: none;
  cursor: pointer;
  transition: all 200ms ease-out;
}

.hamburger:hover {
  transform: scale(1.1);
  color: orange;
}

@media screen and (max-width: 48rem) {
  .header {
    flex-direction: column;
    align-items: flex-start;
  }

  .header-right {
    width: 100%;
    justify-content: center;
    margin-left: 1.2em;
    display: none;
  }

  .hamburger {
    display: block;
  }
}
</style>
