<template>
  <div class="container">
    <div class="mapFilters">
      <div class="selectedFilters"></div>
      <div id="map"></div>
    </div>

    <div class="picsCafe">
      <div class="imgCafe">
        <img src="../assets/img/cohledajmeno.jpg" alt="" />
      </div>

      <div class="imgCafe">
        <img src="../assets/img/cohledajmeno.jpg" alt="" />
      </div>
      <div class="imgCafe">
        <img src="../assets/img/cohledajmeno.jpg" alt="" />
      </div>
      <div class="imgCafe">
        <img src="../assets/img/cohledajmeno.jpg" alt="" />
      </div>
      <div class="imgCafe">
        <img src="../assets/img/cohledajmeno.jpg" alt="" />
      </div>
    </div>
  </div>
</template>
<style>
.picsCafe {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.imgCafe {
  width: 80vw;
  margin: 10px 0;
}
img {
  width: 100%;
}
</style>
