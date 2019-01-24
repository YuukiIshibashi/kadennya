<template>
  <div class="container">
    <nuxt-link to="/">
      <img src="~/assets/images/kadennya_logo.png" class="logo">
    </nuxt-link>
    <div @click="toggleMenu" class="sp_menu">{{menuSign}}</div>
    <sp-navi v-if="showMenu" @close="closeMenu"></sp-navi>
    <nuxt/>
  </div>
</template>

<script> 
import SpNavi from '../components/SpNavi';
export default {
  components: {
    SpNavi,
  },
  data() {
    return {
      showMenu: false,
    }
  },
  computed: {
    menuSign() {
      return this.showMenu ? "とじる" : "MENU"
    }
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu
    },
    closeMenu() {
      this.showMenu = false;
    },
  }
}
</script> 

<style lang="scss">
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
 .sp_menu {
   position: fixed;
   top: 5px;
   right: 5px;
   width: 50px;
   height: 45px;
   z-index: 20;
   color: white;
   background: url('../assets/images/bg/bg-gray.jpg') repeat;
   background-size:  500px 500px;
   text-align: center;
   line-height: 45px;
   box-shadow: 2px 2px 5px rgba(0,0,0,0.4);
   @media screen and (min-width: 481px){
     display: none;
   }
 }
</style>

