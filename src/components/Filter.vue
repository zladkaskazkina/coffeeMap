<template>
  <div
    class="filterComponent d-flex flex-column align-items-center justify-content-center"
  >
    <h1 class="m-3">Select filters</h1>
    <div
      class="filterList d-flex flex-column flex-md-row flex-md-wrap align-items-center justify-content-center"
    >
      <div class="icon btn btn-light">
        <img src="../assets/img/milk.png" alt="VegiMilk" />Alternative milk
      </div>

      <div class="icon btn btn-light">
        <img src="../assets/img/decaf.png" alt="Decaf" />Decaf coffee
      </div>

      <div class="icon btn btn-light">
        <img src="../assets/img/soup.png" alt="Hot Food" />Hot food
      </div>

      <div class="icon btn btn-light">
        <img src="../assets/img/disabled.png" alt="Wheelchair" />Barrier-free
      </div>

      <div class="icon btn btn-light">
        <img src="../assets/img/laptop.png" alt="Freelance Friendly" />Freelance
        friendly
      </div>

      <div class="icon btn btn-light">
        <img src="../assets/img/baby.png" alt="Family Friendly" />Family
        friendly
      </div>

      <div class="icon btn btn-light">
        <img src="../assets/img/pawprint.png" alt="Pet friendly " />Pet friendly
      </div>

      <div class="icon btn btn-light">
        <img src="../assets/img/outdoors.png" alt="Outside seating " />Outside
        seating
      </div>
    </div>
    <router-link class="find btn m-5 w-50" to="/">Save filters</router-link>
  </div>
</template>

<script>
export default {
  name: "FilterCoffee",
  data() {
    return {};
  },
  methods: {
    filterIt() {},

    // filterPlaces(places, filter) {

    //   const filteredPlaces = [];

    //   places.forEach(place => {
    //     let result = false;
    //     if (filter.nonDairy === place.nonDairy) result = result && true;
    //     if (result === true) {
    //       filteredPlaces.push(place);
    //     }
    //   });

    //   // const filteredPlaces = places.filter(...)

    //   return filteredPlaces;
    // },
  },
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
  margin-right: 0.5rem;
}
.icon {
  width: 100%;
  margin: 0.5rem;
  padding: 0.5rem;
  padding-left: 2rem;
  display: flex;
  align-items: center;
}
.find {
  background-color: #cd6e48;
  color: #eff0f4;
}

.icon:hover {
  background-color: #f9be60;
}

.selected {
  background-color: #ffdd8f;
}

@media only screen and (min-width: 768px) {
  .icon {
    width: 46%;
  }
}

@media only screen and (min-width: 1024px) {
  .filterComponent {
    width: 1000px;
  }
}
</style>
