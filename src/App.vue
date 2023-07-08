<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/users/login">Login</router-link>
  </nav> -->
  <router-view />
</template>

<style>
body {
  margin: 0;
  color: rgba(0, 0, 0, 0.85);
  font-size: 14px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-variant: tabular-nums;
  line-height: 1.5715;
  background-color: #fff;
  font-feature-settings: "tnum", "tnum";
}
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  font-family: Roboto, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

a {
  color: #4f46e5 !important;
  background: transparent;
  border: transparent;
  font-weight: 500;
  text-decoration: none !important;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
