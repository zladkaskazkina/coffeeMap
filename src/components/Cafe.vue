<template>
  <div class="card">
    <div class="header">
      <div class="title">Kavárna, co hledá jméno</div>
      <div class="rating">4,8
        <img class="star" src="../assets/img/star.png" alt="Star">
      </div>
    </div>
    <div class="address">
      <div>Stroupežnického 493/10</div>
    </div>
    <div class="content">
      <div class="leftSide">
          <div class="openingHours">
          OPENING HOURS
          <table>
            <tr>
              <th>Monday</th>
              <td>12:00 - 22:00</td>
            </tr>
            <tr>
              <th>Tuesday</th>
              <td>8:00 - 22:00</td>
            </tr>
            <tr>
              <th>Wednesday</th>
              <td>8:00 - 22:00</td>
            </tr>
            <tr>
              <th>Thursday</th>
              <td>8:00 - 22:00</td>
            </tr>
            <tr>
              <th>Friday</th>
              <td>8:00 - 22:00</td>
            </tr>
            <tr>
              <th>Saturday</th>
              <td>9:00 - 20:00</td>
            </tr>
            <tr>
              <th>Sunday</th>
              <td>9:00 - 20:00</td>
            </tr>
          </table>
        </div>
      </div>
      <div class="rightSide">
        <div class="filters">
          <div class="icon"><img src="../assets/img/disabled.png" alt="Wheelchair"></div>
          <div class="icon"><img src="../assets/img/soup.png" alt="Hot Food"></div>
          <div class="icon"><img src="../assets/img/milk.png" alt="VegiMilk"></div>
        </div>
        <div class="links">      
          <div class="web btn btn-light">Web</div>
        </div>
      </div>
    </div>
    
  </div>
</template>


<style scoped>
.card {
  width: 300px;
  height: 200px;
  background-color: #eff0f4;  
}

.header {
  display: flex;
}
.title {
  width: 80%;
}

.rating {
  width: 15%;
}

.content {
  display: flex;
}

.leftSide {
  width: 80%
}

.rightSide {
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.filters {
  display: flex;
  flex-wrap: wrap;
}
.icon {
  border-radius: 5px;
  width:30px;
  height:30px;
  margin: 2px;
  padding: 3px;
  box-shadow: 0px 1px 3px 1px gray;
}
img{
  width: 100%;
  height: 100%;
}

.star {
  height: 15px;
  width: 15px;
}

.selectedFilter {
  background-color: rgb(240, 208, 149);
}
.web {
  background-color: #cd6e48;
}
.fab {
  margin: 1rem;
}
</style>

 <!-- <div class="coffeeshop">
    <div class="top d-md-flex">
      <div class="profil col-12 col-md-8 border">
        <h1>Kavárna Orient</h1>
        <div class="cafeImg">
          <img class="img-fluid" src="../assets/img/caffe/cohledajmeno.jpg" alt="kavarna" />
        </div>
      </div>

      <div
        class="filtersRating col-12 col-md-4 border d-flex flex-column justify-content-center mt-5"
      >
        <div class="text-left">Selected filters</div>
        <div class="filters row border my-3 d-flex flex-wrap justify-content-center">
          <div class="selectedFilter badge badge-light col-2 m-3">
            <img class="w-100" src="../assets/img/baby.png" alt="icon" />
          </div>
          <div class="selectedFilter badge badge-light col-2 m-3">
            <img class="w-100" src="../assets/img/decaf.png" alt="icon" />
          </div>
          <div class="selectedFilter badge badge-light col-2 m-3">
            <img class="w-100" src="../assets/img/laptop.png" alt="icon" />
          </div>
          <div class="selectedFilter badge badge-light col-2 m-3">
            <img class="w-100" src="../assets/img/milk.png" alt="icon" />
          </div>
          <div class="selectedFilter badge badge-light col-2 m-3">
            <img class="w-100" src="../assets/img/pawprint.png" alt="icon" />
          </div>
          <div class="selectedFilter badge badge-light col-2 m-3">
            <img class="w-100" src="../assets/img/outdoors.png" alt="icon" />
          </div>
        </div>
        <div class="border">
          RATING
          <img img class="w-100" src="../assets/img/ratingSample.jpg" alt="rating" />
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="col-12 border p-3">
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
      <div class="col-12 border p-3">
        SOCIAL LINKS
      </div>
    </div>
  </div> -->
