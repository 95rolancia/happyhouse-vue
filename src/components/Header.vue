<template>
  <header class="header">
    <Logo />
    <Nav />
    <section class="header-right">
      <Login />
      <Signup />
    </section>
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
};
</script>
<style>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header-right {
  display: flex;
}
</style>
