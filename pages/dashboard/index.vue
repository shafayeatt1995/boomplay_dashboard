<template>
  <div class="">Ami anik</div>
</template>

<script>
export default {
  name: "DashboardPage",
  layout: "dashboard",
  head() {
    return { title: "Dashboard" };
  },
  mounted() {
    this.$router.push({ name: "dashboard-boomplay" });
  },
};
</script>
