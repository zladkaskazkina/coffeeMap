<template>
  <div class="coffeeshop">
    <h1>Cafe</h1>
    <div class="cafeImg">
      <img src="../assets/img/cohledajmeno.jpg" alt="kavarna" />
    </div>
    <div>
      <h4>Selected filters</h4>
      <div class=filters>
          <img class="singleFilter" src="../assets/img/sampleIcon.png" alt="icon" />
          <img class="singleFilter" src="../assets/img/sampleIcon.png" alt="icon" />
          <img class="singleFilter" src="../assets/img/sampleIcon.png" alt="icon" />
          <img class="singleFilter" src="../assets/img/sampleIcon.png" alt="icon" />
          <img class="singleFilter" src="../assets/img/sampleIcon.png" alt="icon" />
          <img class="singleFilter" src="../assets/img/sampleIcon.png" alt="icon" />
      </div>
    </div>

  </div>
</template>

<style>

  .filters {
    display: flex;
    flex-wrap: wrap;
  }

  .singleFilter {
    width: 3rem;
    margin: 5px;
  }


</style>