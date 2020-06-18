<template>
  <div class="container mainPart">
    <div class="topPart">
      <div class="mapPart">
        <div class="mapPart__filters"></div>
        <div class="mapPart__map" id="map"></div>
      </div>
    </div>
    <cafePart
      v-on:click="openCard"
      v-for="(cafe, index) in profiles"
      :title="cafe.title"
      :src="cafe.src"
      :key="index"
    />
  </div>
</template>
<script>
import { db } from "../db.js";
import cafePart from ".cafePart.vue";

export default {
  name: "Map",
  components: {
    cafePart
  },
  data() {
    return {
      profiles: [],
      title: "",
      src: "",
      rating: "",
      address: "",
      website: "",
      location: {},
      openingHours: {},
      filters: {}
    };
  },
  methods: {
    openCard(id) {
      let card = new SMap.Card();
      //vlozit div ???
      card.getBody().innerHTML = `<div></div>`;

      id.decorate(SMap.Marker.Feature.Card, card);
    },
    isOpenNow(place) {
      // what day is today
      // place.openingHours
      return;
    }
  },
  firestore: {
    profiles: db.collection("profiles").orderBy("id")
  },
  mounted() {
    // vlozeni mapy
    let main = document.querySelector("#map");
    console.log(main);
    let center = SMap.Coords.fromWGS84(14.40315, 50.06934);
    let map = new SMap(main, center, 13);
    map.addDefaultLayer(SMap.DEF_BASE).enable();
    map.addDefaultControls();
  },
  created() {
    // vlozeni znacky
    // forEach na vse znacky
    let layer = new SMap.Layer.Marker();
    map.addLayer(layer);
    layer.enable();
    let coords = SMap.Coords.fromWGS84(14.40315, 50.06934);
    let marker = new SMap.Marker(coords);
    layer.addMarker(marker);
  }
};
</script>
<style>
/* pro prepis stylu Bootstrapu */
.container {
  max-width: 100% !important;
  padding: 0 !important;
}
.mainPart {
  display: flex;
  flex-direction: column;
  align-items: center;
}
/* mapa */
.topPart {
  width: 100%;
}
.mapPart {
  width: 100%;
}
.mapPart__map {
  position: relative;
  width: 100%;
  height: 100vw;
  z-index: 0;
}

/* Responzivita */
@media only screen and (min-width: 720px) {
  .mainPart {
    flex-direction: row-reverse;
    align-items: stretch;
  }
  .topPart {
    flex: 5;
  }
  .mapPart__map {
    height: 100vh;
  }
}
</style>
