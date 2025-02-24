<template>
  <div>
    <div>
      <div class="flex items-center w-full justify-between">
        <h3 class="text-3xl font-semibold">Audiomack Ads</h3>
        <NuxtLink
          class="bg-primary text-white rounded-md px-6 py-3"
          :to="{ name: 'dashboard-audiomack-create-update' }"
        >
          <i class="fa-solid fa-plus"></i>
          Create
        </NuxtLink>
      </div>

      <TableResponsive
        :fields="fields"
        :items="loading ? 10 : ads"
        :skeleton="loading"
      >
        <template #image="{ value }">
          <img :src="value" class="object-cover max-h-32" />
        </template>
        <template #status="{ value, item, index }">
          <footy-switch
            :value="value"
            @click.native.prevent="toggle(item, index)"
          ></footy-switch>
        </template>

        <template #actions="{ item }">
          <div class="flex items-center gap-2">
            <NuxtLink
              :to="{
                name: 'dashboard-audiomack-create-update',
                query: { id: item._id },
              }"
              class="bg-primary text-white rounded-md px-6 py-3"
            >
              <i class="fa-solid fa-pen-to-square"></i> Edit</NuxtLink
            >
            <Button
              @click="deleteAd(item._id)"
              class="bg-rose-100 text-rose-600 rounded-md px-6 py-3"
            >
              <span class="text-danger">
                <i class="fa-regular fa-trash-can"></i> Delete
              </span>
            </Button>
          </div>
        </template>
      </TableResponsive>
    </div>
  </div>
</template>

<script>
export default {
  name: "AudiomackPage",
  layout: "dashboard",
  data() {
    return {
      ads: [],
      loading: false,
    };
  },
  computed: {
    fields() {
      return [
        { key: "name", label: "Name", span: "minmax(160PX, 1fr)" },
        { key: "image", label: "Image", span: "minmax(120PX, 1fr)" },
        { key: "status", label: "Status", span: "minmax(100PX, 1fr)" },
        {
          key: "actions",
          label: "Actions",
          span: "minmax(260PX, 1fr)",
        },
      ];
    },
  },
  mounted() {
    this.fetchAds();
  },
  methods: {
    async fetchAds() {
      try {
        this.loading = true;
        const response = await fetch("/api/dashboard/audiomack-ads", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Cookie: document.cookie,
          },
        });
        if (response.ok) {
          const ads = await response.json();
          this.ads = ads;
        } else {
          console.error("Failed to fetch ads");
        }
      } catch (error) {
        console.error(error);
      } finally {
        this.loading = false;
      }
    },

    async deleteAd(id) {
      if (!confirm("Are you sure, you want to delete?")) return;
      await fetch(`/api/dashboard/audiomack-ads/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Cookie: document.cookie,
        },
      });
      this.fetchAds();
    },

    async toggle(item, index) {
      try {
        await fetch(`/api/dashboard/audiomack-ads/status/${item._id}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Cookie: document.cookie,
          },
        });
        this.ads[index].status = !this.ads[index].status;
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style></style>
