<template>
  <div class="container">
    <div class="mapFilters">
      <div class="selectedFilters"></div>
      <div class="mapa" id="map"></div>
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
<script>
import { db } from "../db.js";
export default {
  name: "Map",
  data() {
    return {};
  },
  mounted() {
    let main = document.querySelector("#map");
    console.log(main);
    let center = SMap.Coords.fromWGS84(14.4179, 50.12655);
    let map = new SMap(main, center, 13);
    map.addDefaultLayer(SMap.DEF_BASE).enable();
    map.addDefaultControls();
  },
};
</script>
<style>
.mapa {
  position: relative;
  width: 80vw;
  height: 80vw;
  margin: 0 auto;
  z-index: 0;
}
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
