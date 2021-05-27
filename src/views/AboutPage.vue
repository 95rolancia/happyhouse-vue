<template>
  <section class="main">
    <p>20, 30대를 위해 조금이나마 도움이 되었으면 좋겠습니다. <br /></p>
  </section>
</template>
<script>
export default {};
</script>
<style scoped>
.main {
  height: 100vh;
  background: center/cover no-repeat url("../assets/main_page_background.jpg");
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  color: whitesmoke;
}

@media screen and (max-width: 24rem) {
  p {
    width: 80%;
    text-align: center;
  }
}
</style>
