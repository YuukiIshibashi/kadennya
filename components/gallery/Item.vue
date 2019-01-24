<template>
  <transition name="modal">
    <div class="modal_overlay" @click="closeModal">
      <div :class="setWidth">
        <img :src="content.src" >
        <p class="color-white string-r center">{{content.description}}</p>
      </div>
    </div>
  </transition>
</template>
 
<script>
export default {
  data() {
    return {
      windowWidth: '',
      windowHeight: '',
    }
  },
  props: ['content'],
  methods: {
    closeModal(){
      this.$emit('close')
    }
  },
  computed: {
    setWidth() {
      return this.content.size == "half" && this.windowWidth > this.windowHeight ? "img_height" : "img_width"
    }
  },
  created() {
    if (process.browser) {
      this.windowWidth = window.innerWidth;
      this.windowHeight = window.innerHeight;
    }
  }
}
</script>
 
<style lang="scss">
@import "~/assets/scss/Object/utility/colors.scss";
@import "~/assets/scss/Object/components/modal.scss";


</style>