<template>
  <div class="container mainPart">
    <div class="topPart">
      <div class="mapPart">
        <div class="mapPart__filters"></div>
        <div class="mapPart__map" id="map"></div>
      </div>
    </div>
    <div class="cafePart">
      <div class="cafePart__img">
        <img class="cafePart__bg" src="../assets/img/caffe/cohledajmeno.jpg" alt="kavarna" />
        <h2 class="cafePart__title">Co hleda jmeno</h2>
      </div>

      <div class="cafePart__img">
        <img class="cafePart__bg" src="../assets/img/caffe/cohledajmeno.jpg" alt="kavarna" />
        <div class="cafePart__title"></div>
      </div>

      <div class="cafePart__img">
        <img class="cafePart__bg" src="../assets/img/caffe/cohledajmeno.jpg" alt="kavarna" />
        <div class="cafePart__title"></div>
      </div>

      <div class="cafePart__img">
        <img class="cafePart__bg" src="../assets/img/caffe/cohledajmeno.jpg" alt="kavarna" />
        <div class="cafePart__title"></div>
      </div>

      <div class="cafePart__img">
        <img class="cafePart__bg" src="../assets/img/caffe/cohledajmeno.jpg" alt="kavarna" />
        <div class="cafePart__title"></div>
      </div>

      <div class="cafePart__img">
        <img class="cafePart__bg" src="../assets/img/caffe/cohledajmeno.jpg" alt="kavarna" />
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
    // vlozeni mapy
    let main = document.querySelector("#map");
    console.log(main);
    let center = SMap.Coords.fromWGS84(14.40315, 50.06934);
    let map = new SMap(main, center, 13);
    map.addDefaultLayer(SMap.DEF_BASE).enable();
    map.addDefaultControls();
    // vlozeni znacky
    let layer = new SMap.Layer.Marker();
    map.addLayer(layer);
    layer.enable();
    let coords = SMap.Coords.fromWGS84(14.40315, 50.06934);
    let marker = new SMap.Marker(coords);
    layer.addMarker(marker);

    let card = new SMap.Card();
    card.setSize(300, 200);
    // card.getContainer().classList.add("cardCafe"); //nefunguje
    card.getContainer().style.backgroundColor = "red";
    card.getContainer().style.display = "flex"; //nefunguje


    card.getHeader().style.textAlign = "center";
    card.getHeader().style.padding = "5px";
    card.getHeader().style.backgroundColor = "green";
    card.getHeader().innerHTML = `<h6 class='title'>Kavárna, co hledá jméno</h6>`;
    

    card.getBody().style.padding = "5px";
    card.getBody().style.backgroundColor = "yellowgreen";
    card.getBody().innerHTML = `<div class='profil'>
                                  <div class="leftSide">
                                    <div class="cafeImg">
                                      <img class="img-fluid" src="../assets/img/caffe/cohledajmeno.jpg" alt="kavarna" />
                                    </div>
                                    <div>Rating</div>
                                  </div>
                                  <div class="openingHours">
                                    OPENING HOURS
                                    <table>
                                      <tr>
                                        <th>MO</th>
                                        <td>8:00 - 17:00</td>
                                      </tr>
                                      <tr>
                                        <th>TU</th>
                                        <td>8:00 - 17:00</td>
                                      </tr>
                                      <tr>
                                        <th>WE</th>
                                        <td>8:00 - 17:00</td>
                                      </tr>
                                      <tr>
                                        <th>TH</th>
                                        <td>8:00 - 17:00</td>
                                      </tr>
                                      <tr>
                                        <th>FR</th>
                                        <td>8:00 - 17:00</td>
                                      </tr>
                                      <tr>
                                        <th>SAT</th>
                                        <td>9:00 - 16:00</td>
                                      </tr>
                                      <tr>
                                        <th>SU</th>
                                        <td>Closed</td>
                                      </tr>
                                    </table>
                                  </div>
                                </div>`;
    
    card.getFooter().style.padding = "5px";
    card.getFooter().style.backgroundColor = "blue";
    card.getFooter().innerHTML = ` <div>Footer</div>` 
    
      
    // znacka z predchozi ukazky
    marker.decorate(SMap.Marker.Feature.Card, card);
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
/* kavarny */
.cafePart {
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
}
.cafePart__title {
  position: absolute;
  top: 50%;
  width: 100%;
  text-align: center;
  transform: translate(0%, -50%);
  color: #eff0f4;
}

/* vizitka */
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
  .cafePart {
    flex: 2;
    margin-right: 1rem;
  }
  .cafePart__img {
    margin-top: 0;
  }
}
</style>
