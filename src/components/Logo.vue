<template>
  <h1 class="title" @click="goToMain">Happy House</h1>
</template>
<script>
export default {
  methods: {
    goToMain() {
      this.$router.push("/");
    },
  },
};
</script>
<style scoped>
.title {
  display: inline-block;
  font-size: 1.5rem;
  margin-left: 1em;
  color: dark;
  cursor: pointer;
  min-width: 9.6rem;
}
</style>
