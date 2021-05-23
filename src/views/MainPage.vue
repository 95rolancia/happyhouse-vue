<template>
  <section class="main">
    <Footer />
  </section>
</template>
<script>
import Footer from "@/components/footer";
export default {
  components: {
    Footer,
  },
};
</script>
<style scoped>
.main {
  height: 50em;
  background: center/cover no-repeat url("../assets/main_page_background.jpg");
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
}

@media screen and (max-width: 48rem) {
  .main {
    height: 40em;
    background: 58% / cover no-repeat url("../assets/main_page_background.jpg");
  }
}
</style>
