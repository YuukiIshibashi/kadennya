<template>
  <transition name="slide">
    <div class="modal_overlay" @click="closeMenu">
      <ul class="sp_navi">
        <nuxt-link to="/blogs">
          <li class="sp_navi_list string-s"><span>日記</span></li>
        </nuxt-link>
        <nuxt-link to="/gallery">
          <li class="sp_navi_list string-s"><span>ギャラリー</span></li>
        </nuxt-link>
        <nuxt-link to="/bassClarinet">
          <li class="sp_navi_list string-s"><span>バスクラ</span></li>
        </nuxt-link>
      </ul>
    </div>
  </transition>
</template>
 
<script>
export default {
  methods: {
    closeMenu() {
      this.$emit('close')
    }
  }
 
}
</script>
 
<style lang="scss">
@import "~/assets/scss/Object/utility/colors.scss";
@import "~/assets/scss/Object/components/modal.scss";
.sp_navi {
  width: 100%;
  @at-root {
    &_list {
      font-family: 'eriji';
      height: 80px;
      background: url('../assets/images/normal_tag6.png') no-repeat;
      background-size: 100%;
      line-height: 70px;
      padding-left: 20%;
      font-size: 40px;
      letter-spacing: -10px;
    }
  }
}
.slide-enter-active, .slide-leave-active {
  transition: transform .5s;
}
.slide-enter, .slide-leave-to {
  opacity: 0;
  transform: translate(0, -100%);
}

</style>