<template>
  <header class="header">
    <Logo />
    <Nav />
    <section class="header-right"></section>
  </header>
</template>
<script>
import Logo from "./Logo.vue";
import Nav from "./Nav.vue";
export default {
  components: {
    Logo,
    Nav,
  },
};
</script>
<style>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
