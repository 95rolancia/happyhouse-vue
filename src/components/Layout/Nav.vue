<template>
  <ul class="nav">
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

.nav.visible {
  display: flex;
}

.nav-item {
  font-size: 1.2rem;
  padding: 0.2em 1em;
  margin: 1em;
  color: whitesmoke;
  transition: all 200ms ease-out;
}

.nav-item:hover {
  color: whitesmoke;
  background-color: orange;
  border-radius: 2em;
}

@media screen and (max-width: 48rem) {
  .nav {
    flex-direction: column;
    width: 100%;
    margin: 0;
    display: none;
    text-align: center;
    background-color: inherit;
  }

  .nav-item {
    margin: 0.2em;
    padding: 0.5em;
  }
}
</style>
