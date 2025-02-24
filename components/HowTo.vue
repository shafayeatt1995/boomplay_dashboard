<template>
  <div>
    <button
      @click="modal = true"
      class="flex text-primary justify-center items-center gap-1 font-medium underline"
    >
      <img src="/images/icons/play.svg" alt="play" loading="lazy" />How to
      download?
    </button>
    <div
      class="fixed top-0 bottom-0 left-0 right-0 bg-black/50 flex justify-center items-center"
      v-if="modal"
    >
      <div>
        <div class="flex justify-end">
          <button @click="modal = false">
            <i class="fa-solid fa-xmark text-white text-2xl"></i>
          </button>
        </div>
        <iframe
          src="https://player.vimeo.com/video/927495094?h=d555c12ff2&title=0&byline=0&portrait=0"
          width="100%"
          class="w-full lg:w-[660px]"
          height="360"
          frameborder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HowTo",
  data() {
    return {
      modal: false,
    };
  },
};
</script>
