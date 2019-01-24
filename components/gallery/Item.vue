<template>
  <transition name="modal">
    <div class="modal_overlay" @click="closeModal">
      <div :class="setWidth">
        <img :src="content.src" >
        <p class="color-white string-r">{{content.description}}</p>
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
.modal {
  @at-root {
    &_overlay {
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: $overlay_black-75;
      position: fixed;
      z-index: 10;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: scroll;
      .img_height {
        text-align: center;
        height: 100%;
        width: 60%;
        img {
          height: 90%;
          width: auto;
        }
      }
      .img_width {
        width: 80%;
      }
    }
  }
}

.modal-enter-active, .modal-leave-active {
  transition: opacity .5s;
}
.modal-enter, .modal-leave-to {
  opacity: 0;
}

</style>