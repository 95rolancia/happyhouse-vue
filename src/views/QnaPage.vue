<template>
  <section class="qna">
    <h1>QNA Page</h1>
    <div class="write-container">
      <router-link to="/qna/write"><button class="write-btn">글쓰기</button></router-link>
    </div>
    <router-view></router-view>
  </section>
</template>
<script>
export default {};
</script>
<style scoped>
.qna {
  height: 100vh;
  background: center/cover no-repeat url("../assets/main_page_background.jpg");
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
}

h1 {
  color: whitesmoke;
  margin: 0;
  margin-top: 5em;
}

.write-container {
  text-align: center;
  margin: 1em;
}

.write-btn {
  background-color: transparent;
  color: whitesmoke;
  border: 1px solid whitesmoke;
  border-radius: 2em;
  padding: 0.5em;
  transition: all 200ms ease-in-out;
}

.write-btn:hover {
  color: darkslateblue;
  background-color: whitesmoke;
}
</style>
