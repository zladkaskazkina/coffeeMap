<template>
  <div class="main">
    <div class="fixBar">
      <div class="nav">
        <router-link class="navItem" to="/">Map</router-link>
        <input
          v-model.trim="searchValue"
          @submit="searchIt"
          class="searchBar"
          type="text"
          placeholder="Search"
        />
        <router-link class="navItem filterSection" to="/filter">
          <i class="fas fa-filter"></i>
        </router-link>
        <button class="navItem clearFilters">
          <i class="fas fa-times cross"></i>
          <span class="d-none d-md-inline"> Clear filters </span>
        </button>
      </div>
    </div>
    <router-view></router-view>
    <div class="footer">
      <div class="author">
        Icons created by Freepic, downloaded from www.flaticon.com
      </div>
      <div class="suggestCafe">
        <router-link class="suggest" to="/form">
          Add new Coffeeshop</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import db from "../utils/db";

export default {
  name: "App",
  data() {
    return {
      searchValue: "",
      profiles: [],
    };
  },
  firestore: {
    profiles: db.collection("coffeeShops").orderBy("title"),
  },
  methods: {
    searchIt() {
      for (let i = 0; i < profiles.length; i++) {
        if (searchValue == profiles[i].title) {
          showSearched(profiles[i]);
        }
      }
    },
    showSearched(cafe) {
      //otevri karticku na mape
    },
  },
};
</script>

<style lang="css">
/* colors: #55bece, #16283E, #EFF0F4 */
* {
  padding: 0;
  margin: 0;
  border: 0;
  font-family: "Muli", sans-serif;
}
*,
*:before,
*:after {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
:focus,
:active {
  outline: none;
}
a:focus,
a:active {
  outline: none;
}

input::-ms-clear {
  display: none;
}
button {
  cursor: pointer;
}
button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
a,
a:visited {
  text-decoration: none;
}
a:hover {
  text-decoration: none;
}
ul li {
  list-style: none;
}
img {
  vertical-align: top;
}
html {
  font-family: "Muli", sans-serif;
}
.main {
  height: 100vh;
}
.fixBar {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1;
}
.nav {
  list-style-type: none;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  width: 100vw;
  background-color: #16283e;
}
.navItem {
  flex: 1;
  text-align: center;
  text-decoration: none;
  color: #55bece;
  padding: 0.5rem;
  font-weight: 500;
  font-size: 1.2rem;
  letter-spacing: 0.2rem;
}
.navItem:hover {
  background-color: #55bece;
  text-decoration: none;
  padding: 0.5rem;
  color: #fff;
}
.clearFilters {
  font-weight: 500;
  font-size: 16px;
  letter-spacing: 0;
  margin: 0;
  align-self: stretch;
  background-color: transparent;
}

.clearFilters:focus {
  outline: none;
}

.cross {
  padding-right: 3px;
}

.searchBar {
  padding: 0.2rem;
  margin: 0 10px;
  border-radius: 4px;
  width: 40vw;
  height: 50%;
  background-image: url("../assets/img/searchicon.svg"); /* Add a search icon to input */
  background-position: 10px 12px; /* Position the search icon */
  background-repeat: no-repeat; /* Do not repeat the icon image */
  font-size: 16px; /* Increase font-size */
  border: 1px solid #ddd; /* Add a grey border */
}

.clear {
  width: 20%;
  height: 30px;
  text-align: center;
}

.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #55bece;
  display: flex;
  justify-content: space-between;
}
.suggest {
  display: block;
  text-align: center;
  color: #fff;
  padding: 0.5rem;
  font-weight: 400;
  font-size: 0.8rem;
  letter-spacing: 0.1rem;
}
.suggest:hover {
  text-decoration: none;
  color: white;
  background-color: #16283e;
}

.navItem:hover {
  text-decoration: none;
  padding: 0.5rem;
  color: #fff;
}

.author {
  font-size: 1px;
}
</style>
