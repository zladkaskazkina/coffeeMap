<template>
  <div class="container">
    <div class="fixBar">
      <div class="nav">
        <router-link class="navItem" to="/">
          Map
        </router-link>
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
  font-family: sans-serif;
}
.fixBar {
  display: flex;
  flex-direction: column;
  align-items: center;
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
.suggest {
  position: sticky;
  bottom: 1rem;
  text-align: center;
}
</style>
