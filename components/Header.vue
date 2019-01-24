<template>
  <ul class="navi">
    <nuxt-link to="/blog">
      <li class="navi_list string-s"><span>日記</span></li>
    </nuxt-link>
    <nuxt-link to="/gallery">
      <li class="navi_list string-s"><span>ギャラリー</span></li>
    </nuxt-link>
    <nuxt-link to="/gallery">
      <li class="navi_list string-s"><span>バスクラ</span></li>
    </nuxt-link>
  </ul>
</template>
 
<script>
export default {
 
}
</script>
 
<style lang="scss">
@import "~/assets/scss/Object/utility/colors.scss";
.navi {
  position: fixed;
  top: 5px;
  right: 5px;
  display: flex;
  height: 60px;
  align-items: center;
  background: url('../assets/images/normal_tag6.png') no-repeat;
  background-size: 100%;
  padding: 1% 5% 1% 2%;
  z-index: 20;
  @at-root {
    &_list {
      font-family: 'komorebi';
      padding-left: 5px;
      letter-spacing: -1px;

    }
  }
}


</style>