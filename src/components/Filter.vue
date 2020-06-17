<template>
<div class=" filterComponent d-flex flex-column align-items-center justify-content-center">
  <h1 class="m-3">Select filters</h1>
  <div class="filterList d-flex flex-column flex-md-row flex-md-wrap align-items-center justify-content-center">

    <div class="icon btn btn-light m-2 p-2 pl-4 d-flex align-items-center justify-content-left pl-md-5"
         @click="milkSelect"
         :class="{milkSelected}">
      <img src="../assets/img/milk.png" alt="VegiMilk">Alternative milk</div>   

    <div class="icon btn btn-light m-2 p-2 pl-4 d-flex align-items-center justify-content-left pl-md-5"
         @click="decafSelect"
         :class="{decafSelected}">
      <img src="../assets/img/decaf.png" alt="Decaf">Decaf coffee</div>

    <div class="icon btn btn-light m-2 p-2 pl-4 d-flex align-items-center justify-content-left pl-md-5"
         @click="foodSelect"
         :class="{foodSelected}">
      <img src="../assets/img/soup.png" alt="Hot Food">Hot food</div>

    <div class="icon btn btn-light m-2 p-2 pl-4 d-flex align-items-center justify-content-left pl-md-5"
         @click="barrierSelect"
         :class="{barrierSelected}">
      <img src="../assets/img/disabled.png" alt="Wheelchair">Barrier-free</div>

    <div class="icon btn btn-light m-2 p-2 pl-4 d-flex align-items-center justify-content-left pl-md-5"
         @click="freelanceSelect"
         :class="{freelanceSelected}">
      <img src="../assets/img/laptop.png" alt="Freelance Friendly">Freelance friendly</div>

    <div class="icon btn btn-light m-2 p-2 pl-4 d-flex align-items-center justify-content-left pl-md-5"
         @click="familySelect"
         :class="{familySelected}">
      <img src="../assets/img/baby.png" alt="Family Friendly">Family friendly</div>

    <div class="icon btn btn-light m-2 p-2 pl-4 d-flex align-items-center justify-content-left pl-md-5"
         @click="petSelect"
         :class="{petSelected}">
      <img src="../assets/img/pawprint.png" alt="Pet friendly ">Pet friendly</div>

    <div class="icon btn btn-light m-2 p-2 pl-4 d-flex align-items-center justify-content-left pl-md-5"
         @click="outdoorSelect"
         :class="{outdoorSelected}">
      <img src="../assets/img/outdoors.png" alt="Outside seating ">Outside seating</div>
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
      outdoorSelected: false, 
    }
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
    },
  }
}
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
img{
 width: 2rem;
 height: 2rem;
 margin-right: 0.5rem;
}

.icon {
  width:100%;
}
.find{
  background-color: #cd6e48;
  color: #eff0f4;
}

.icon:hover{
    background-color: #f9be60;
}

.outdoorSelected,
.milkSelected,
.decafSelected,
.foodSelected,
.barrierSelected,
.freelanceSelected,
.familySelected,
.petSelected
 {
  background-color: #ffdd8f;
}

@media only screen and (min-width : 768px)   {
.icon {
width: 46%;
}

@media only screen and (min-width : 992px)   {
.filterComponent {
  margin: 0 150px;
}
}
}
</style>
