<template>
  <div class="container">
    <div class="topPart">
      <div class="filterPart">
        <div class="filterPart__icon">
          <i class="ico fa fa-laptop fa-3x"></i>
        </div>
        <div class="filterPart__icon">
          <i class="ico fas fa-wifi fa-3x"></i>
        </div>
        <div class="filterPart__icon">
          <i class="ico fas fa-baby-carriage fa-3x"></i>
        </div>
        <div class="filterPart__icon">
          <i class="ico fas fa-wifi fa-3x"></i>
        </div>
        <div class="filterPart__icon">
          <i class="ico fa fa-laptop fa-3x"></i>
        </div>
        <div class="filterPart__icon">
          <i class="ico fas fa-baby-carriage fa-3x"></i>
        </div>
        <div class="filterPart__icon">
          <i class="ico fas fa-wheelchair fa-3x"></i>
        </div>
      </div>
      <div class="mapPart">
        <div class="mapPart__filters"></div>
        <div class="mapPart__map" id="map"></div>
      </div>
    </div>
    <div class="cafePart">
      <div class="cafePart__img">
        <img
          class="cafePart__bg"
          src="../assets/img/caffe/cohledajmeno.jpg"
          alt="kavarna"
        />
        <div class="cafePart__title"></div>
      </div>

      <div class="cafePart__img">
        <img
          class="cafePart__bg"
          src="../assets/img/caffe/cohledajmeno.jpg"
          alt="kavarna"
        />
        <div class="cafePart__title"></div>
      </div>

      <div class="cafePart__img">
        <img
          class="cafePart__bg"
          src="../assets/img/caffe/cohledajmeno.jpg"
          alt="kavarna"
        />
        <div class="cafePart__title"></div>
      </div>

      <div class="cafePart__img">
        <img
          class="cafePart__bg"
          src="../assets/img/caffe/cohledajmeno.jpg"
          alt="kavarna"
        />
        <div class="cafePart__title"></div>
      </div>

      <div class="cafePart__img">
        <img
          class="cafePart__bg"
          src="../assets/img/caffe/cohledajmeno.jpg"
          alt="kavarna"
        />
        <div class="cafePart__title"></div>
      </div>

      <div class="cafePart__img">
        <img
          class="cafePart__bg"
          src="../assets/img/caffe/cohledajmeno.jpg"
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
.topPart {
  display: flex;
  flex-direction: column;
}
.filterPart {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.ico {
  margin: 1rem 1rem 0;
}
.mapPart {
  width: 80vw;
  margin: 2rem auto;
}
.mapPart__map {
  position: relative;
  width: 100%;
  height: 70vh;
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
@media only screen and (min-width: 720px) {
  .cafePart {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  .cafePart__img {
    flex: 1 1 25%;
    margin: 1rem;
  }
  .topPart {
    flex-direction: row;
  }
  .filterPart {
    margin-top: 1rem;
    flex-direction: column;
    flex: 1 1 25%;
    align-items: center;
    justify-content: flex-start;
  }
}
</style>
