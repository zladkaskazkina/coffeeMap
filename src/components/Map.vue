<template>
  <div class="container">
    <div class="mapPart">
      <div class="mapPart__filters"></div>
      <div class="mapPart__map" id="map"></div>
    </div>

    <div class="cafePart">
      <div class="cafePart__img">
        <img
          class="cafePart__bg"
          src="../assets/img/cohledajmeno.jpg"
          alt="kavarna"
        />
        <div class="cafePart__title"></div>
      </div>

      <div class="cafePart__img">
        <img
          class="cafePart__bg"
          src="../assets/img/cohledajmeno.jpg"
          alt="kavarna"
        />
        <div class="cafePart__title"></div>
      </div>

      <div class="cafePart__img">
        <img
          class="cafePart__bg"
          src="../assets/img/cohledajmeno.jpg"
          alt="kavarna"
        />
        <div class="cafePart__title"></div>
      </div>

      <div class="cafePart__img">
        <img
          class="cafePart__bg"
          src="../assets/img/cohledajmeno.jpg"
          alt="kavarna"
        />
        <div class="cafePart__title"></div>
      </div>

      <div class="cafePart__img">
        <img
          class="cafePart__bg"
          src="../assets/img/cohledajmeno.jpg"
          alt="kavarna"
        />
        <div class="cafePart__title"></div>
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
.mapPart {
  width: 80vw;
}
.mapPart__map {
  position: relative;
  width: 100%;
  height: 80vw;
  z-index: 0;
}
.cafePart {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.cafePart__img {
  width: 80vw;
  margin: 10px 0;
}
.cafePart__bg {
  width: 100%;
}
</style>
