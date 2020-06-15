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
  },
};
</script>

<style lang="css">
* {
  box-sizing: border-box;
}

html {
  font-family: 'Muli', sans-serif;
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
}
.navItem {
  text-decoration: none;
  color: black;
}
.footer {
  position: sticky;
  bottom: 0;
  text-align: center;
}
</style>
