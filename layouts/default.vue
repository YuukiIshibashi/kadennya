<template>
  <div class="container">
    <nuxt-link to="/">
      <img src="~/assets/images/kadennya_logo.png" class="logo">
    </nuxt-link>
    <nuxt/>
  </div>
</template>

<style>
.container {
  min-height: 100vh;
  padding: 1px;
  background: url('../assets/images/bg/bg-wood.jpg') repeat 100px;
}
 .logo {
   position: fixed;
   top: 5px;
   left: 5px;
   width: 100px;
   z-index: 20;
   box-shadow: 2px 2px 5px rgba(0,0,0,0.4);
 }
</style>

