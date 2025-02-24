<template>
  <div class="container mx-auto">
    <div class="flex flex-col items-center justify-center min-h-screen">
      <div class="max-w-md w-full">
        <div class="p-8 rounded-2xl bg-white shadow">
          <div class="w-full flex justify-center">
            <img src="/og-image.jpeg" class="h-20" />
          </div>
          <form class="mt-8 space-y-4" @submit.prevent="submit">
            <div>
              <label class="text-gray-800 text-sm mb-2 block">User name</label>
              <div class="relative flex items-center">
                <input
                  name="username"
                  type="text"
                  required
                  class="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-primary"
                  placeholder="Enter user name"
                  v-model="form.email"
                />
                <i
                  class="far fa-circle-user absolute right-4 text-gray-400"
                ></i>
              </div>
            </div>

            <div>
              <label class="text-gray-800 text-sm mb-2 block">Password</label>
              <div class="relative flex items-center">
                <input
                  name="password"
                  :type="showPassword ? 'text' : 'password'"
                  required
                  class="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-primary"
                  placeholder="Enter password"
                  v-model="form.password"
                />
                <i
                  class="far absolute right-4 text-gray-400 cursor-pointer"
                  :class="showPassword ? 'fa-eye-slash' : 'fa-eye'"
                  @click="showPassword = !showPassword"
                ></i>
              </div>
              <p v-if="error" class="text-rose-500 text-sm mt-1">
                Email and password not matched
              </p>
            </div>

            <div class="flex flex-wrap items-center justify-between gap-4">
              <div class="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  class="h-4 w-4 shrink-0 text-primary focus:ring-primary border-gray-300 rounded"
                />
                <label
                  for="remember-me"
                  class="ml-3 block text-sm text-gray-800"
                >
                  Remember me
                </label>
              </div>
            </div>

            <div class="!mt-8">
              <button
                type="submit"
                class="w-full py-3 px-4 text-sm tracking-wide rounded-lg text-white bg-primary hover:opacity-90 focus:outline-none"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginPage",
  auth: "guest",
  head() {
    return { title: "Login" };
  },
  data() {
    return {
      showPassword: false,
      form: {
        email: "",
        password: "",
      },
      error: false,
    };
  },
  methods: {
    async submit() {
      try {
        this.error = false;
        this.loading = true;
        await this.$auth.loginWith("cookie", { data: this.form });
        this.$router.push({ name: "dashboard" });
      } catch (error) {
        this.error = true;
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>
