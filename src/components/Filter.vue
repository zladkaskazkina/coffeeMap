<template>
  <div class="d-flex flex-column align-items-center justify-content-center">
    <h1>Select filters</h1>
    <div
      class="filterList d-flex flex-column flex-md-row flex-md-wrap align-items-center justify-content-center"
    >
      <div class="icon btn btn-light m-2 p-2 d-flex align-items-center justify-content-center">
        <img src="../assets/img/decaf.png" alt="Decaf" />Decaf coffee
      </div>
      <div class="icon btn btn-light m-2 p-2 d-flex align-items-center justify-content-center">
        <iframe class="ico" src="../assets/img/milk.svg" height="40" width="40"></iframe>Alternative milk
      </div>
      <div class="icon btn btn-light m-2 p-2 d-flex align-items-center justify-content-center">
        <img src="../assets/img/soup.png" alt="Hot Food" />Hot food
      </div>
      <div class="icon btn btn-light m-2 p-2 d-flex align-items-center justify-content-center">
        <img src="../assets/img/disabled.png" alt="Wheelchair" />Barrier-free
      </div>
      <div class="icon btn btn-light m-2 p-2 d-flex align-items-center justify-content-center">
        <img src="../assets/img/laptop.png" alt="Freelance Friendly" />Freelance friendly
      </div>
      <div class="icon btn btn-light m-2 p-2 d-flex align-items-center justify-content-center">
        <img src="../assets/img/baby.png" alt="Family Friendly" />Family friendly
      </div>
      <div class="icon btn btn-light m-2 p-2 d-flex align-items-center justify-content-center">
        <img src="../assets/img/pawprint.png" alt="Pet friendly " />Pet friendly
      </div>
      <div class="icon btn btn-light m-2 p-2 d-flex align-items-center justify-content-center">
        <img src="../assets/img/outdoors.png" alt="Outside seating " />Outside seating
      </div>
    </div>
    <div class="find btn">Find</div>
  </div>
</template>

<style scoped>
* {
  box-sizing: border-box;
}
img {
  width: 2rem;
  height: 2rem;
  margin-right: 0.5rem;
}

.icon {
  width: 100%;
}

@media only screen and (min-width: 768px) {
  .icon {
    width: 46%;
  }

  .find {
    background-color: tomato;
  }
}
</style>
