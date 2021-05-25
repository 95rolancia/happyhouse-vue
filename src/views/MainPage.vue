<template>
  <div>
    <section class="main">
      <SearchForm />
    </section>
    <Footer />
  </div>
</template>
<script>
import SearchForm from "@/components/SearchForm";
import Footer from "@/components/Layout/footer";
export default {
  components: {
    SearchForm,
    Footer,
  },
};
</script>
<style scoped>
.main {
  /* height: 50em; */
  height: 100vh;
  background: center/cover no-repeat url("../assets/main_page_background.jpg");
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
}

@media screen and (max-width: 48rem) {
  .main {
    height: 40em;
    background: 58% / cover no-repeat url("../assets/main_page_background.jpg");
  }
}
</style>
