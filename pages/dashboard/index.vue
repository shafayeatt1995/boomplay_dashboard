<template>
  <div></div>
</template>

<script>
export default {
  name: "DashboardPage",
  layout: "dashboard",
  head() {
    return { title: "Dashboard" };
  },
  created() {
    this.$router.push({ name: "dashboard-boomplay" });
  },
};
</script>
