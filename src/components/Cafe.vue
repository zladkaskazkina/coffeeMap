<template>
  <div class="coffeeshop">
    <div class="top d-md-flex">
      <div class="profil col-12 col-md-6 border">
        <h1>Kavárna Orient</h1>
        <div class="cafeImg">
          <img
            class="img-fluid"
            src="../assets/img/caffe/cohledajmeno.jpg"
            alt="kavarna"
          />
        </div>
      </div>

      <div
        class="filtersRating col-12 col-md-6 border d-flex flex-column justify-content-center "
      >
        <div class="text-left">Selected filters</div>
        <div
          class="filters row border my-3 d-flex flex-wrap justify-content-center"
        >
          <div class="selectedFilter badge badge-light col-3 m-3">
            <img class="w-100" src="../assets/img/baby.png" alt="icon" />
          </div>
          <div class="selectedFilter badge badge-light col-3 m-3">
            <img
              class="w-100"
              src="../assets/img/coffee-beans.png"
              alt="icon"
            />
          </div>
          <div class="selectedFilter badge badge-light col-3 m-3">
            <img class="w-100" src="../assets/img/laptop.png" alt="icon" />
          </div>
          <div class="selectedFilter badge badge-light col-3 m-3">
            <img class="w-100" src="../assets/img/milk-bottle.png" alt="icon" />
          </div>
          <div class="selectedFilter badge badge-light col-3 m-3">
            <img class="w-100" src="../assets/img/pawprint.png" alt="icon" />
          </div>
          <div class="selectedFilter badge badge-light col-3 m-3">
            <img class="w-100" src="../assets/img/outdoors.png" alt="icon" />
          </div>
        </div>
        <div class="border">
          RATING
          <img
            img
            class="w-100"
            src="../assets/img/ratingSample.jpg"
            alt="rating"
          />
        </div>
      </div>
    </div>
    <div class="bottom ">
      <div class=" col-12 border p-3">
        OPENING HOURS
        <table>
          <tr>
            <th>Monday</th>
            <td>8:00 - 17:00</td>
          </tr>
          <tr>
            <th>Tuesday</th>
            <td>8:00 - 17:00</td>
          </tr>
          <tr>
            <th>Wednesday</th>
            <td>8:00 - 17:00</td>
          </tr>
          <tr>
            <th>Thursday</th>
            <td>8:00 - 17:00</td>
          </tr>
          <tr>
            <th>Friday</th>
            <td>8:00 - 17:00</td>
          </tr>
          <tr>
            <th>Saturday</th>
            <td>9:00 - 16:00</td>
          </tr>
          <tr>
            <th>Sunday</th>
            <td>Closed</td>
          </tr>
        </table>
      </div>
      <div class=" col-12 border p-3">
        SOCIAL LINKS
        <i class="fab fa-instagram fa-3x"></i>
        <i class="fab fa-facebook-f fa-3x"></i>
      </div>
    </div>
  </div>
</template>

<style scoped>
.selectedFilter {
  background-color: turquoise;
}

.fab {
  margin: 1rem;
}
</style>
