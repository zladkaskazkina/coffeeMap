<template>
  <div class="filterComponent d-flex flex-column align-items-center justify-content-center">
    <h1 class="m-3">Select filters</h1>
    <div
      class="filterList d-flex flex-column flex-md-row flex-md-wrap align-items-center justify-content-center"
    >
      <div class="icon btn btn-light" @click="milkSelect" :class="{'selected': milkSelected}">
        <img src="../assets/img/milk.png" alt="VegiMilk" />Alternative milk
      </div>

      <div class="icon btn btn-light" @click="decafSelect" :class="{'selected': decafSelected}">
        <img src="../assets/img/decaf.png" alt="Decaf" />Decaf coffee
      </div>

      <div class="icon btn btn-light" @click="foodSelect" :class="{'selected': foodSelected}">
        <img src="../assets/img/soup.png" alt="Hot Food" />Hot food
      </div>

      <div class="icon btn btn-light" @click="barrierSelect" :class="{'selected': barrierSelected}">
        <img src="../assets/img/disabled.png" alt="Wheelchair" />Barrier-free
      </div>

      <div
        class="icon btn btn-light"
        @click="freelanceSelect"
        :class="{'selected': freelanceSelected}"
      >
        <img src="../assets/img/laptop.png" alt="Freelance Friendly" />Freelance friendly
      </div>

      <div class="icon btn btn-light" @click="familySelect" :class="{'selected': familySelected}">
        <img src="../assets/img/baby.png" alt="Family Friendly" />Family friendly
      </div>

      <div class="icon btn btn-light" @click="petSelect" :class="{'selected': petSelected}">
        <img src="../assets/img/pawprint.png" alt="Pet friendly " />Pet friendly
      </div>

      <div class="icon btn btn-light" @click="outdoorSelect" :class="{'selected': outdoorSelected}">
        <img src="../assets/img/outdoors.png" alt="Outside seating " />Outside seating
      </div>
    </div>
    <div class="find btn m-5 w-50">Save filters</div>
  </div>
</template>

<script>
export default {
  name: "FilterCoffee",
  data() {
    return {
      milkSelected: false,
      decafSelected: false,
      foodSelected: false,
      barrierSelected: false,
      freelanceSelected: false,
      familySelected: false,
      petSelected: false,
      outdoorSelected: false
    };
  },
  methods: {
    milkSelect() {
      this.milkSelected = !this.milkSelected;
    },
    decafSelect() {
      this.decafSelected = !this.decafSelected;
    },
    foodSelect() {
      this.foodSelected = !this.foodSelected;
    },
    barrierSelect() {
      this.barrierSelected = !this.barrierSelected;
    },
    freelanceSelect() {
      this.freelanceSelected = !this.freelanceSelected;
    },
    familySelect() {
      this.familySelected = !this.familySelected;
    },
    petSelect() {
      this.petSelected = !this.petSelected;
    },
    outdoorSelect() {
      this.outdoorSelected = !this.outdoorSelected;
    }
  }
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
  @media only screen and (min-width: 992px) {
    .filterComponent {
      margin: 0 150px;
    }
  }
}
</style>