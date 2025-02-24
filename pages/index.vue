<template>
  <div></div>
</template>

<script>
export default {
  name: "IndexPage",
  auth: false,
  mounted() {
    this.$router.push({ name: "login" });
  },
};
</script>
