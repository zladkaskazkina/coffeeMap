<template>
  <div
    class=" filterComponent d-flex flex-column align-items-center justify-content-center"
  >
    <h1 class="m-3">Select filters</h1>
    <div
      class="filterList d-flex flex-column flex-md-row flex-md-wrap align-items-center justify-content-center"
    >
      <label
        class="icon btn btn-light"
        v-for="(filter, index) in state.filterLabels"
        :key="index"
        :class="{ selected: state.filters[filter.key] }"
      >
        <img :src="`../assets/img/${filter.icon}.png`" />{{ filter.label }}
        <input
          type="checkbox"
          v-model="state.filters[filter.key]"
          v-show="false"
        />
      </label>
    </div>
    <div class="d-flex ">
      <router-link class="find btn m-5" to="/">Save filters</router-link>
    </div>
  </div>
</template>

<script>
import { state } from "../utils/state.js";

export default {
  name: "FilterCoffee",
  data() {
    return {
      state,
    };
  },
  methods: {},
};
</script>

<style scoped>
/*colors: 
lightbrown: #cd6e48
yellow: #f9be60
*/

* {
  box-sizing: border-box;
}
.filterComponent {
  padding-top: 40px;
  margin: 0 auto;
}

.filterList {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

img {
  width: 2rem;
  height: 2rem;
  margin-right: 1rem;
  opacity: 0.7;
}

.icon {
  width: 100%;
  margin: 0.5rem;
  padding: 0.5rem;
  padding-left: 1rem;
  display: flex;
  align-items: center;
  box-shadow: 1px 1px 10px 0px #163b6929;
}
.find {
  background-color: #cd6e48;
  color: #eff0f4;
}
.clean:hover {
  background-color: #5bc4c5;
}
.icon:hover {
  background-color: #5bc4c5;
}

.selected {
  background-color: #d1a184;
  border-color: #d1a184;
}

@media only screen and (min-width: 768px) {
  .icon {
    width: 46%;
  }
  .filterComponent {
    width: 700px;
  }
}
</style>
