<template>
  <ul class="nav">
    <router-link to="/home"><li class="nav-item">Loan</li></router-link>
    <router-link to="/qna"><li class="nav-item">Q&A</li></router-link>
    <router-link to="/about"><li class="nav-item">About</li></router-link>
  </ul>
</template>
<script>
export default {};
</script>
<style scoped>
.nav {
  display: flex;
  padding-left: 0;
}

.nav-item {
  font-size: 1.2rem;
  padding: 0.2em 1em;
  margin: 1em;
}
</style>
