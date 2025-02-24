<template>
  <form
    class="container flex flex-col gap-4 my-5"
    style="min-height: 80vh"
    @submit.prevent="submitForm"
  >
    <div>
      <label class="text-base block">Ad place</label>
      <select
        type="text"
        placeholder="Ad place"
        class="px-4 py-2 text-base rounded-md bg-white border border-gray-400 w-full outline-primary"
        v-model="form.name"
      >
        <option
          v-for="option in nameOptions"
          :key="option.value"
          :value="option.value"
        >
          {{ option.text }}
        </option>
      </select>
    </div>
    <template v-if="form.onlyMobile">
      <div>
        <label class="text-base block">Title</label>
        <input
          type="text"
          v-model="form.title"
          class="px-4 py-2 text-base rounded-md bg-white border border-gray-400 w-full outline-primary"
        />
      </div>
      <div>
        <label class="text-base block">Content Title</label>
        <input
          type="text"
          v-model="contentType"
          class="px-4 py-2 text-base rounded-md bg-white border border-gray-400 w-full outline-primary"
        />
      </div>
      <div>
        <label class="text-base block">Content type</label>
        <select
          type="text"
          placeholder="Ad place"
          class="px-4 py-2 text-base rounded-md bg-white border border-gray-400 w-full outline-primary"
          v-model="form.name"
        >
          <option
            v-for="option in typeOptions"
            :key="option.value"
            :value="option.value"
          >
            {{ option.text }}
          </option>
        </select>
      </div>
      <div>
        <label class="text-base block">{{
          contentType ? "Ad content" : "Video embed URL"
        }}</label>
        <client-only v-if="contentType">
          <vue-editor id="editor" v-model="form.content" />
        </client-only>
        <input
          v-else
          v-model="form.content"
          type="text"
          class="px-4 py-2 text-base rounded-md bg-white border border-gray-400 w-full outline-primary"
        />
      </div>
      <div>
        <label class="text-base block">Button Text</label>
        <client-only v-if="contentType">
          <vue-editor id="editor" v-model="form.content" />
        </client-only>
        <input
          v-else
          v-model="form.button_title"
          type="text"
          class="px-4 py-2 text-base rounded-md bg-white border border-gray-400 w-full outline-primary"
        />
      </div>

      <div>
        <label class="text-base block">Link</label>
        <input
          v-model="form.url"
          type="text"
          class="px-4 py-2 text-base rounded-md bg-white border border-gray-400 w-full outline-primary"
        />
      </div>
    </template>
    <template v-else-if="headMode">
      <div>
        <label class="text-base block">Head code</label>
        <textarea
          id="textarea"
          v-model="form.head_code"
          placeholder="Put html code"
          rows="3"
          max-rows="6"
          class="px-4 py-2 text-base rounded-md bg-white border border-gray-400 w-full outline-primary"
        ></textarea>
      </div>
    </template>
    <template v-else-if="slideBottom">
      <div>
        <label class="text-base block">Title</label>
        <input
          v-model="form.slideHead"
          type="text"
          class="px-4 py-2 text-base rounded-md bg-white border border-gray-400 w-full outline-primary"
        />
      </div>
      <div>
        <label class="text-base block">Content Title</label>
        <input
          v-model="form.slideTitle"
          type="text"
          class="px-4 py-2 text-base rounded-md bg-white border border-gray-400 w-full outline-primary"
        />
      </div>
      <div>
        <label class="text-base block">Content type</label>
        <select
          v-model="contentType"
          class="px-4 py-2 text-base rounded-md bg-white border border-gray-400 w-full outline-primary"
        >
          <option
            v-for="option in typeOptions"
            :key="option.value"
            :value="option.value"
          >
            {{ option.text }}
          </option>
        </select>
      </div>
      <div>
        <label class="text-base block">{{
          contentType ? "Ad content" : "Video embed URL"
        }}</label>
        <vue-editor
          v-if="contentType"
          id="editor"
          v-model="form.slideContent"
        />
        <input
          v-else
          v-model="form.slideContent"
          type="text"
          class="px-4 py-2 text-base rounded-md bg-white border border-gray-400 w-full outline-primary"
        />
      </div>

      <div>
        <label class="text-base block">Button Text</label>
        <input
          v-model="form.slideButtonText"
          type="text"
          class="px-4 py-2 text-base rounded-md bg-white border border-gray-400 w-full outline-primary"
        />
      </div>

      <div>
        <label class="text-base block">Link</label>
        <input
          v-model="form.slideButtonUrl"
          type="text"
          class="px-4 py-2 text-base rounded-md bg-white border border-gray-400 w-full outline-primary"
        />
      </div>
    </template>
    <template v-else>
      <div>
        <label class="text-base block">Width</label>
        <input
          v-model="form.width"
          type="text"
          class="px-4 py-2 text-base rounded-md bg-white border border-gray-400 w-full outline-primary"
        />
      </div>
      <div>
        <label class="text-base block">Height</label>
        <input
          v-model="form.height"
          type="text"
          class="px-4 py-2 text-base rounded-md bg-white border border-gray-400 w-full outline-primary"
        />
      </div>
      <div>
        <label class="text-base block">Image URL</label>
        <input
          v-model="form.image"
          type="text"
          class="px-4 py-2 text-base rounded-md bg-white border border-gray-400 w-full outline-primary"
        />
      </div>
      <img
        v-if="form.image"
        :src="form.image"
        alt=""
        :width="form.width"
        :height="form.height"
        style="object-fit: cover"
      />
      <div>
        <label class="text-base block">Link</label>
        <input
          v-model="form.url"
          type="text"
          class="px-4 py-2 text-base rounded-md bg-white border border-gray-400 w-full outline-primary"
        />
      </div>
      <div>
        <label class="text-base block">Google ad code</label>
        <input
          id="textarea"
          v-model="form.ad_code"
          type="text"
          class="px-4 py-2 text-base rounded-md bg-white border border-gray-400 w-full outline-primary"
        />
      </div>
    </template>

    <button
      class="w-full py-3 px-4 text-sm tracking-wide rounded-lg text-white bg-primary hover:opacity-90 outline-none"
      type="submit"
    >
      Done
    </button>
  </form>
</template>

<script>
export default {
  layout: "dashboard",
  data() {
    return {
      form: {
        title: "",
        content_title: "",
        content: "",
        name: "",
        image: "",
        url: "",
        width: "",
        height: "",
        onlyMobile: false,
        status: true,
        button_title: "",
        ad_code: "",
        head_code: "",

        slideTitle: "",
        slideContent: "",
        slideHead: "",
        slideButtonText: "",
        slideButtonUrl: "",
      },
      contentType: true,
      locationOptions: [
        { text: "All Device", value: false },
        { text: "Only mobile", value: true },
      ],
      typeOptions: [
        { text: "Text", value: true },
        { text: "Video", value: false },
      ],
      nameOptions: [
        { text: "Home Head", value: "home_head" },
        { text: "Conversion Head", value: "conversion_head" },
        { text: "Home Top", value: "home_top" },
        { text: "Home Left", value: "home_left" },
        { text: "Home Right", value: "home_right" },
        { text: "Home Bottom", value: "home_bottom" },
        { text: "Conversion Top", value: "conversion_top" },
        { text: "Conversion Left", value: "conversion_left" },
        { text: "Conversion Right", value: "conversion_right" },
        { text: "Conversion Bottom", value: "conversion_bottom" },
        { text: "Bottom Slide", value: "bottom_slide" },
      ],
    };
  },
  computed: {
    is_update() {
      return this.$route.query.id;
    },
    headMode() {
      const name = ["home_head", "conversion_head"];
      return name.includes(this.form.name);
    },
    slideBottom() {
      const name = ["bottom_slide"];
      return name.includes(this.form.name);
    },
  },
  watch: {
    headMode(val) {
      if (!val) {
        this.reset();
      }
    },
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      if (this.$route.query.id) {
        const response = await fetch(
          `/api/dashboard/boom-ads/${this.$route.query.id}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Cookie: document.cookie,
            },
          }
        );
        if (response.ok) {
          const data = await response.json();
          this.form = { ...data };
        }
      }
    },

    async submitForm() {
      if (this.is_update) {
        await fetch(`/api/dashboard/boom-ads/${this.$route.query.id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Cookie: document.cookie,
          },
          body: JSON.stringify(this.form),
        });
      } else {
        await fetch("/api/dashboard/boom-ads/create", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Cookie: document.cookie,
          },
          body: JSON.stringify(this.form),
        });
      }
      this.$router.push({ name: "dashboard-boomplay" });
    },
    reset() {
      const name = this.form.name + "";
      this.form = {
        title: "",
        content_title: "",
        content: "",
        name,
        image: "",
        url: "",
        width: "",
        height: "",
        onlyMobile: false,
        status: true,
        button_title: "",
        ad_code: "",
        head_code: "",

        slideTitle: "",
        slideContent: "",
        slideHead: "",
        slideButtonText: "",
        slideButtonUrl: "",
      };
    },
  },
};
</script>
