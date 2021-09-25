<template>
<div class="app">
  <div id="nav">
    <router-link to="/">כניסה למשמרת</router-link> |
    <router-link to="/shift">המשמרות שלי</router-link>
  </div>
  <router-view/>
</div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #98999b;
}

#nav a.router-link-exact-active {
  color: #0f0f0f;
}
</style>
