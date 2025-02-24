<template>
  <!-- <div>
    <Nuxt />
  </div> -->
  <div class="relative pt-20 h-screen">
    <header
      class="flex shadow-md py-1 px-4 sm:px-7 bg-white min-h-[70px] tracking-wide z-[110] fixed top-0 w-full"
    >
      <div
        class="flex flex-wrap items-center justify-between gap-4 w-full relative"
      >
        <NuxtLink :to="{ name: 'index' }">
          <img src="/og-image.jpeg" alt="logo" class="h-16" />
        </NuxtLink>

        <div
          id="collapseMenu"
          class="max-lg:hidden lg:!block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50"
        >
          <button
            id="toggleClose"
            class="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-3 fill-black"
              viewBox="0 0 320.591 320.591"
            >
              <path
                d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                data-original="#000000"
              ></path>
              <path
                d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                data-original="#000000"
              ></path>
            </svg>
          </button>

          <div
            class="max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50"
          >
            <div
              class="flex items-center max-lg:flex-col-reverse max-lg:ml-auto gap-8"
            >
              <div class="dropdown-menu relative flex shrink-0 group">
                <i
                  class="far fa-circle-user rounded-full border-2 border-gray-300 cursor-pointer text-2xl size-10 flex justify-center items-center"
                ></i>

                <div
                  class="dropdown-content hidden group-hover:block shadow-md p-2 bg-white rounded-md absolute top-9 right-0 w-56"
                >
                  <div class="w-full">
                    <button
                      class="text-sm text-gray-800 cursor-pointer flex items-center p-2 rounded-md hover:bg-gray-100 dropdown-item transition duration-300 ease-in-out w-full"
                      @click="logout"
                    >
                      <i class="fa-solid fa-power-off mr-3"></i>
                      Logout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          id="toggleOpen"
          class="lg:hidden !ml-7 outline-none"
          @click="showMenu = !showMenu"
        >
          <svg
            class="w-7 h-7"
            fill="#000"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
    </header>

    <div>
      <div class="flex items-start">
        <Sidebar />

        <section class="main-content w-full overflow-auto p-6">
          <Nuxt />
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DashboardLayout",
  methods: {
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
