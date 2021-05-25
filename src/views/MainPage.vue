<template>
  <section class="main">
    <Loading />
    <SearchForm />
    <Footer />
  </section>
</template>
<script>
import SearchForm from "@/components/SearchForm";
import Footer from "@/components/Layout/footer";
import Loading from "@/components/Loading";
export default {
  components: {
    SearchForm,
    Footer,
    Loading,
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
