<template>
  <div class="container">
    <div class="mainPart">
      <div class="topPart">
        <div class="mapPart">
          <div class="mapPart__map" id="map"></div>
        </div>
      </div>
      <div class="coffees">
        <cafePart
          v-for="(cafe, index) in filteredProfiles"
          :title="cafe.title"
          :src="cafe.imgSrc"
          :key="index"
          :onClick="() => openCard(cafe.website)"
        />
        <div class="noFind"
        v-if="!filteredProfiles.length"> Sorry, we could not find anything! Try again or 
         <router-link class="noFindSuggest" to="/form">suggest a new coffeeshop. </router-link>
        
        </div>
      </div>
    </div>
  </div>
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
    CafeCard
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
      state
    };
  },
  methods: {
    openCard: function(profileWebsite) {
      console.log("open");
      state.mapCards.forEach(mapCard => {
        if (profileWebsite === mapCard.website) {
          this.map.addCard(mapCard.card, mapCard.coords);
          this.map.setCenter(mapCard.coords, true);          
          if (window.screen.width < 768) {
            window.scrollTo(0, 0);
          }
        }
      });
    },
    addMarkers: function() {
      if (this.map != null && this.layer != null) {
        state.coffeeShops.then(shops => {
          const profiles = state.getFilteredShops(
            state.filters,
            shops,
            state.searchValue
          );
          console.log(profiles);
          this.layer.removeAll();
          state.mapCards = [];
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
            //ukladame si vizitky a souradnice pro to, aby se otevrely pri kliknuti na obrazek
            state.mapCards.push({ card, coords, website: profiles[i].website });
          }
        });
      }
    }
  },
  computed: {
    filteredProfiles() {
      if (this.intialShops) {
        return state.getFilteredShops(
          state.filters,
          this.intialShops,
          state.searchValue
        );
      } else {
        return [];
      }
    }
  },
  firestore: {
    profiles: db.collection("coffeeShops").orderBy("title")
  },
  created() {
    getCoffeeShops().then(shops => {
      this.intialShops = shops;
    });
  },
  mounted() {
    let main = document.querySelector("#map");

    let center = SMap.Coords.fromWGS84(14.448158, 50.100294);
    this.map = new SMap(main, center, 13);
    this.map.addDefaultLayer(SMap.DEF_BASE).enable();
    this.map.addDefaultControls();
    var sync = new SMap.Control.Sync();
    this.map.addControl(sync);
    //pridani vrstvy pro znacky
    this.layer = new SMap.Layer.Marker();
    this.map.addLayer(this.layer);
    this.layer.enable();
    // vlozeni znacky
    this.addMarkers();
    //pridavam event listener na klik pro zavreni vizitky
    this.map.getSignals().addListener(window, "marker-click", e => {
       e.data.event.stopPropagation()
    })
    this.map.getSignals().addListener(window, "map-click", e => {
        this.map.removeCard();
    });
  },

  updated() {
    if (this.map != null && this.layer != null) {
      this.addMarkers();
      this.map.syncPort();
      const centerZoom = this.map.computeCenterZoom(state.mapCards.map(mapCard => mapCard.coords));
      this.map.setCenterZoom(centerZoom[0], centerZoom[1]);
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

.coffees {
  width: 100%;
  overflow: hidden;
}

.noFind {
  padding: 5rem 3rem;
  text-align: center;;
}

.noFindSuggest {
  color: #16283e;
} 
/* Responzivita */

@media only screen and (min-width: 768px) {
  
  .mapPart {
    height: 100%;
    padding-top: 45px;
  }
  .mainPart {
    flex-direction: row-reverse;
    align-items: stretch;
    width: 100%;
    min-height: 100vh;
  }
  .topPart {
    flex: 5;
  }
  .mapPart__map {
    width: 100%;
    height: 100%;
    max-height: calc(100vh - 80px);
    position: sticky;
    top: 45px;
  }
  .coffees {
    padding-top: 45px;
    flex: 2;
    z-index: 1;
    box-shadow: 3px 5px 20px 0px #4f5459;
  }
}

@media only screen and (min-width: 1024px) {
  .mainPart {
    max-width: 1400px;
    margin: auto;
  }
}
</style>
