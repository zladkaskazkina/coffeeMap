<template>
  <div class="container">
    <div class="fixBar">
      <div class="nav">
        <router-link class="navItem" to="/">Map</router-link>
        <router-link class="navItem" to="/filter">Filter</router-link>
        <router-link class="navItem" to="/cafe">Coffeeshop</router-link>
      </div>
      <div class="search">
        <input class="searchBar" type="text" placeholder="search" />
        <button>Search</button>
      </div>
    </div>

    <router-view></router-view>
    <div class="footer">
      <div class="suggest">Suggest new Coffeeshop</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {};
  }
};
</script>

<style lang="css">
/* colors: #2B7E86, #F7AE85, #16283E, #EFF0F4 */
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  border: 0;
}

html {
  font-family: "Muli", sans-serif;
}
.container {
  background-color: #eff0f4;
}
.fixBar {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 1;
}
.nav {
  display: flex;
  justify-content: space-around;
  top: 0;
  width: 100%;
  background-color: #2b7e86;
}
.navItem {
  text-decoration: none;
  color: #fff;
}
.suggest {
  position: sticky;
  bottom: 2rem;
  text-align: center;
  background-color: #2b7e86;
  color: #fff;
}
.search {
  background-color: #16283e;
  width: 100vw;
  display: flex;
  justify-content: center;
}
.searchBar {
}
</style>
