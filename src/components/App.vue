<template>
  <div class="container">
    <div class="fixBar">
      <div class="nav">
        <router-link class="navItem" to="/">Map</router-link>
        <input class="searchBar" type="text" placeholder="Search" />
        <router-link class="navItem" to="/filter">Filter</router-link>
      </div>
    </div>

    <router-view></router-view>
    <div class="footer">
      <div class="suggest">Add new Coffeeshop</div>
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

.fixBar {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: sticky;
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
  flex: 1 1 20%;
  text-align: center;
  text-decoration: none;
  color: #55bece;
  padding: 1rem;
  margin: 0 1rem;
  font-weight: 500;
  font-size: 1.2rem;
  letter-spacing: 0.2rem;
}
.navItem:hover {
  background-color: #55bece;
  text-decoration: none;
  padding: 1rem;
  color: #fff;
}

.searchBar {
  padding: 0.2rem;
  border-radius: 4px;
  width: 40vw;
  height: 50%;
}
.footer {
  position: sticky;
  bottom: 0;
}
.suggest {
  text-align: center;
  background-color: #55bece;
  color: #fff;
  padding: 0.2rem;
  font-weight: 400;
  font-size: 1rem;
  letter-spacing: 0.2rem;
  width: 100vw;
  margin-bottom: 10px;
}
</style>
