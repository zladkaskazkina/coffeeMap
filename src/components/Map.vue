<template>
  <div class="container mainPart">
    <div class="topPart">
      <div class="mapPart">
        <div class="mapPart__filters"></div>
        <div class="mapPart__map" id="map"></div>
      </div>
    </div>
    <cafeCard />
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
    renderCard(card) {
      return {
        //komponenta karticky
      };
    },
    openCard(id) {
      // otevira karticku
    }
  },
  firestore: {
    profiles: db.collection("coffeeShops").orderBy("title")
  },
  mounted() {
    // vlozeni mapy
    let main = document.querySelector("#map");
    console.log(main);
    let center = SMap.Coords.fromWGS84(14.40315, 50.06934);
    let map = new SMap(main, center, 13);
    map.addDefaultLayer(SMap.DEF_BASE).enable();
    map.addDefaultControls();
    //pridani vrstvy pro znacky
    let layer = new SMap.Layer.Marker();
    map.addLayer(layer);
    layer.enable();
    // vlozeni znacky
    // forEach na vse znacky
    for (let i = 0; i < profiles.length; i++) {
      //pridani koordinat
      let coords = SMap.Coords.fromWGS84(
        profiles[i].location.lng,
        profiles[i].location.lat
      );
      let marker = new SMap.Marker(coords);
      layer.addMarker(marker);
      // vlozeni karticky
      let card = new SMap.Card();
      card.getBody().innerHTML = "Já jsem <em>obsah vizitky</em>!";
      // znacka z predchozi ukazky
      marker.decorate(SMap.Marker.Feature.Card, card);
    }
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
