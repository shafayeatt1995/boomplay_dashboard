<template>
  <nav id="sidebar" class="lg:min-w-[250px] w-max max-lg:min-w-8">
    <div
      id="sidebar-collapse-menu"
      style="height: calc(100vh - 72px)"
      class="bg-white shadow-lg h-screen fixed py-6 px-4 top-[70px] left-0 overflow-auto z-[99] lg:min-w-[250px] lg:w-max max-lg:w-0 max-lg:invisible transition-all duration-500 border-r"
    >
      <ul class="space-y-2">
        <li>
          <NuxtLink
            to="/dashboard/boomplay"
            class="text-gray-800 text-sm flex items-center hover:bg-gray-100 rounded-md px-4 py-2 transition-all gap-3"
            :class="{ 'bg-gray-100': routeName('/dashboard/boomplay') }"
          >
            <i class="fa-solid fa-sliders text-lg"></i>
            <span>BoomPlay Ads</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/dashboard/audiomack"
            class="text-gray-800 text-sm flex items-center hover:bg-gray-100 rounded-md px-4 py-2 transition-all gap-3"
            :class="{ 'bg-gray-100': routeName('/dashboard/audiomack') }"
          >
            <i class="fa-solid fa-sliders text-lg"></i>
            <span>Audiomack Ads</span>
          </NuxtLink>
        </li>
        <li>
          <button
            type="button"
            class="text-gray-800 text-sm flex items-center hover:bg-gray-100 rounded-md px-4 py-2 transition-all gap-3 w-full"
            @click="logout"
          >
            <i class="fa-solid fa-power-off text-lg"></i>
            <span>Logout</span>
          </button>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Sidebar",
  computed: {
    link() {
      return this.$route;
    },
  },
  methods: {
    routeName(name) {
      return this.$route.path.startsWith(name);
    },
    async logout() {
      try {
        await this.$auth.logout("cookie");
        this.$router.push({ name: "login" });
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
