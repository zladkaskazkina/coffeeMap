<template>
  <!-- <div class="background">
    <div class="responsiveWidth"> -->
  <div class="container">
    <div class="mainPart">
      <div class="topPart">
        <div class="mapPart">
          <div class="mapPart__map" id="map"></div>
        </div>
      </div>
      <div class="coffees">
        <cafePart
          v-on:click="openCard"
          v-for="(cafe, index) in filteredProfiles"
          :title="cafe.title"
          :src="cafe.src"
          :key="index"
        />
      </div>
    </div>
  </div>
  <!-- </div>
  </div> -->
</template>
<script>
import { db } from "../utils/db.js";
import CafeCard from "./CafeCard.vue";
import cafePart from "./cafePart.vue";
import { state, getCoffeeShops } from "../utils/state.js";
import renderCard from "../utils/renderCard.js";

export default {
  name: "Map",
  components: {
    cafePart,
    CafeCard,
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
      filters: {},
      map: null,
      layer: null,
      intialShops: null,
    };
  },
  methods: {
    openCard: function() {
      console.log("open");
    },
    addMarkers: function() {
      if (this.map != null && this.layer != null) {
        state.coffeeShops.then((shops) => {
          const profiles = state.getFilteredShops(state.filters, shops);
          console.log(profiles);
          this.layer.removeAll();
          for (let i = 0; i < profiles.length; i++) {
            //pridani.doc(this.user.id)
            let coords = SMap.Coords.fromWGS84(
              profiles[i].location.lng,
              profiles[i].location.lat
            );
            let cardCafe = renderCard(profiles[i]);
            let marker = new SMap.Marker(coords);
            this.layer.addMarker(marker);
            // vlozeni karticky
            let card = new SMap.Card();
            card.setSize(300, 220);
            card.getContainer().innerHTML = cardCafe;

            // znacka z predchozi ukazky
            marker.decorate(SMap.Marker.Feature.Card, card);
          }
        });
      }
    },
  },
  computed: {
    filteredProfiles() {
      if (this.intialShops) {
        return state.getFilteredShops(state.filters, this.intialShops);
      } else {
        return [];
      }
    },
  },
  firestore: {
    profiles: db.collection("coffeeShops").orderBy("title"),
  },
  created() {
    getCoffeeShops().then((shops) => {
      this.intialShops = shops;
    });
  },
  mounted() {
    let main = document.querySelector("#map");

    let center = SMap.Coords.fromWGS84(14.40315, 50.06934);
    this.map = new SMap(main, center, 13);
    this.map.addDefaultLayer(SMap.DEF_BASE).enable();
    this.map.addDefaultControls();
    //pridani vrstvy pro znacky
    this.layer = new SMap.Layer.Marker();
    this.map.addLayer(this.layer);
    this.layer.enable();
    // vlozeni znacky
    this.addMarkers();
  },
  updated() {
    if (this.map != null && this.layer != null) {
      this.addMarkers();
    }
  },
};
</script>

<style>
.background {
  background-color: pink;
  width: 100%;
  height: 100%;
}

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
  position: fixed;
  top: 50px;
  width: 100%;
  height: 100vw;
  z-index: 0;
}
/* .cafePart {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.cafePart__img {
  width: 100%;
  margin: 10px 0;
  position: relative;
}
.cafePart__bg {
  width: 100%;
  filter: brightness(50%);
  object-fit: cover;
} */
/* .cafePart__title {
  position: absolute;
  top: 50%;
  width: 100%;
  text-align: center;
  transform: translate(0%, -50%);
  color: #eff0f4;
} */
/* vizitka
.title {
  margin: 0;
}
.profil {
  display: flex;
  padding: 0;
}
.cafeImg {
  width: 100px;
}
.openingHours {
  width: 160px;
  font-size: 12px;
} */
/* Responzivita */
@media only screen and (min-width: 720px) {
  /* .responsiveWidth {
    padding: 1rem;
  } */

  .mainPart {
    flex-direction: row-reverse;
    align-items: stretch;
    width: 100%;
  }
  .topPart {
    flex: 5;
  }
  .mapPart__map {
    height: 100vh;
  }
  .coffees {
    flex: 2;
    margin-right: 1rem;
  }
  /* .cafePart {
    flex: 2;
    margin-right: 1rem;
  }
  .cafePart__img {
    margin-top: 0;
  } */
}
@media only screen and (min-width: 1024px) {
  /* .responsiveWidth {
    width: 80%;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  } */
}
</style>
