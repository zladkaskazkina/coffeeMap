<!--renderCard(cafe)-->
<template>
  <div class="card">
    <div class="header">
      <div class="title">Kavárna, co hledá jméno</div>
      <div class="rating">
        4,8
        <div class="star"><img src="../assets/img/star.png" alt="Star" /></div>
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
          <div class="icon">
            <img src="../assets/img/disabled.png" alt="Wheelchair" />
          </div>
          <div class="icon">
            <img src="../assets/img/soup.png" alt="Hot Food" />
          </div>
          <div class="icon">
            <img src="../assets/img/milk.png" alt="VegiMilk" />
          </div>
          <div class="icon">
            <img src="../assets/img/soup.png" alt="Hot Food" />
          </div>
          <div class="icon">
            <img src="../assets/img/soup.png" alt="Hot Food" />
          </div>
          <div class="icon">
            <img src="../assets/img/soup.png" alt="Hot Food" />
          </div>
          <div class="icon">
            <img src="../assets/img/soup.png" alt="Hot Food" />
          </div>
          <div class="icon">
            <img src="../assets/img/soup.png" alt="Hot Food" />
          </div>
        </div>
        <div class="links">
          <div class="web btn btn-light">Web</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.card {
  width: 300px;
  height: 200px;
  background-color: #eff0f4;
}

.header {
  display: flex;
  background-color: hsl(188, 55%, 57%);
  padding: 3px 5px;
}
.title {
  width: 80%;
}

.address {
  font-size: 0.8rem;
  color: rgb(98, 98, 98);
  margin: 3px 5px;
}

.rating {
  width: 15%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.star {
  height: 15px;
  width: 15px;
  position: relative;
}

.content {
  display: flex;
  margin: 0 5px;
  border-top: 1px solid #16283e;
}

.leftSide {
  width: 55%;
}
.openingHours {
  font-size: 0.7rem;
}
td {
  padding-left: 8px;
}

.rightSide {
  padding-top: 20px;
  width: 45%;
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
  width: 25px;
  height: 25px;
  margin: 2px;
  box-shadow: 0px 1px 3px 1px gray;
  position: relative;
}
img {
  width: 80%;
  height: 80%;
  position: absolute;
  margin: auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.selectedFilter {
  background-color: rgb(240, 208, 149);
}
.web {
  background-color: #cd6e48;
  width: 90%;
}
.fab {
  margin: 1rem;
}
</style>
