<template>
  <div class="container">
    <div class="fixBar">
      <div class="nav">
        <router-link class="navItem" to="/">Map</router-link>
        <router-link class="navItem" to="/filter">Filter</router-link>
        <router-link class="navItem" to="/cafe">Coffeeshop</router-link>
      </div>
      <div class="search">
        <input class="searchBar" type="text" placeholder="Search" />
        <b-button variant="secondary" class="btn">Search</b-button>
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
  font-family: "Muli", sans-serif;
  width: 100vw;
  margin: 0 auto;
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
  list-style-type: none;
  overflow: hidden;
  display: flex;
  justify-content: center;
  top: 0;
  width: 100vw;
  background-color: #2b7e86;
}
.navItem {
  flex: 1 1 20%;
  text-align: center;
  text-decoration: none;
  color: #fff;
  padding: 1rem;
  font-weight: 600;
  font-size: 1.2rem;
  letter-spacing: 0.2rem;
}
.navItem:hover {
  background-color: #16283e;
  text-decoration: none;
  padding: 1rem;
  color: #fff;
}
.footer {
  position: sticky;
  bottom: 0;
  text-align: center;
  background-color: #2b7e86;
  color: #fff;
  padding: 1rem;
  font-weight: 600;
  font-size: 1.2rem;
  letter-spacing: 0.2rem;
}
.search {
  background-color: #16283e;
  width: 100vw;
  display: flex;
  justify-content: center;
  padding: 10px 0;
}
.searchBar {
  padding: 0.2rem;
  margin-right: 0.5rem;
  border-radius: 4px;
  width: 30vw;
}
</style>
