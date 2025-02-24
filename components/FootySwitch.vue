<template>
  <label v-if="inner_text" class="text-footy-switch">
    <input v-model="selected" type="checkbox" :disabled="disabled" />
    <span class="text-footy-switch-slider" :class="{ whitebg: whitebg }">{{
      inner_text
    }}</span>
  </label>
  <label v-else class="footy-switch">
    <input v-model="selected" type="checkbox" :disabled="disabled" />
    <span class="footy-switch-slider" :class="{ whitebg: whitebg }"></span>
  </label>
</template>

<script>
export default {
  props: {
    label: String,
    inner_text: String,
    id: String,
    value: null,
    whitebg: Boolean,
    disabled: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    selected: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      },
    },
  },
};
</script>

<style>
.footy-switch {
  position: relative;
  display: inline-block;
  width: 52px;
  height: 24px;
}

.footy-switch input {
  display: none;
}

.footy-switch .footy-switch-slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #b4c2b4;
  border-radius: 40px;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.footy-switch .footy-switch-slider.whitebg {
  background-color: #e9ecef;
}

.footy-switch .footy-switch-slider:before {
  position: absolute;
  content: "";
  height: 20px;
  width: 20px;
  background-color: #b4c2b4;
  border: 4px solid #fff;
  border-radius: 50%;
  left: 2px;
  bottom: 2px;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.footy-switch input:not(:checked) ~ .footy-switch-slider:before {
  box-shadow: 0px 2px 4px #eaf1ea;
}

.footy-switch input:checked ~ .footy-switch-slider:before {
  @apply bg-primary;
}

.footy-switch input:checked + .footy-switch-slider {
  @apply bg-primary;
}

.footy-switch input:checked + .footy-switch-slider:before {
  -webkit-transform: translateX(28px);
  transform: translateX(28px);
}

.footy-switch input:not(:checked):disabled + .footy-switch-slider {
  opacity: 0.5;
}
</style>

<style scoped>
.text-footy-switch input {
  display: none;
}

.text-footy-switch input:checked + .text-footy-switch-slider {
  @apply bg-primary;
  color: #fff;
  padding-right: 34px;
  padding-left: 10px;
}

.text-footy-switch input:checked + .text-footy-switch-slider:before {
  right: 5px;
  @apply bg-primary;
  right: 5px;
}

.text-footy-switch-slider {
  position: relative;
  background-color: #e9ecef;
  color: #222;
  padding-right: 10px;
  padding-left: 34px;
  border-radius: 20px;
  font-size: 14px;
  height: 30px;
  line-height: 30px;
  transition: 0.4s;
}

.text-footy-switch-slider:before {
  position: absolute;
  content: "";
  background-color: #e9ecef;
  border: 4px solid #fff;
  border-radius: 50%;
  height: 22px;
  width: 22px;
  top: 4px;
  right: calc(100% - 26px);
  margin-left: -5px;
  transition: 0.4s;
}
</style>
