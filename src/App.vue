<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>
<script>
import Header from "@/components/Header.vue";
export default {
  components: {
    Header,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  box-sizing: border-box;
}

/* basic */
body {
  margin: 0;
}

button {
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
}

a {
  text-decoration: none;
  color: inherit;
}

ul {
  padding-left: 0;
}

li {
  list-style: none;
}
</style>
