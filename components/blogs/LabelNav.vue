<template>
  <ul class="label_navi">
    <nuxt-link to="/blogs/label/concert" class="label concert string-s">コンサート</nuxt-link>
    <nuxt-link to="/blogs/label/usual" class="label usual string-s">日常</nuxt-link>
    <nuxt-link to="/blogs/label/BassClarinet" class="label bcl string-s">バスクラ</nuxt-link>
  </ul>
</template>
 
<script>
export default {
 
}
</script>
 
<style lang="scss">
@import "~/assets/scss/Object/utility/colors.scss";
.label_navi {
   margin-top: 50px;
   display: flex;
  @media screen and (max-width: 480px){
    display: none;
  }
  @at-root {
    &_list {
      font-family: 'komorebi';
      padding-left: 5px;
      letter-spacing: -1px;
    }
  }
}


</style>