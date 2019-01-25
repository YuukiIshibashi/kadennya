<template>
  <div>
    <navi />
    <section class="gallery_side">
    </section>
    <section class="gallery_top">
      <div>
        <h1 class="string-m color-white">今までつくったもの</h1>
        <p class="string-ss color-white">大昔のイケてないのも載せてます</p>
      </div>
    </section>
    <div class="l_inner-full">
      <div class="ml-10">
        <h3 class="gallery_tags gallery_tags-1"><span>コンサート関係</span></h3>
        <ul class="gallery">
          <li v-for="image in concertImages" 
              :key="image.title"
              class="gallery_item"
              :class="imageSize(image.size)"
              @click="open(image)">
              <img :src="image.src">
              <p class="gallery_item_caption string-ss">{{image.title}}</p>
          </li>
        </ul>
        <h3 class="gallery_tags gallery_tags-1"><span>森林浴音楽会</span></h3>
        <ul class="gallery">
          <li v-for="image in shinrinyokuImages" 
              :key="image.title"
              class="gallery_item"
              :class="imageSize(image.size)"
              @click="open(image)">
              <img :src="image.src">
              <p class="gallery_item_caption string-ss">{{image.title}}</p>
          </li>
        </ul>
        <h3 class="gallery_tags gallery_tags-1"><span>イラスト</span></h3>
        <ul class="gallery">
          <li v-for="image in illustImages" 
              :key="image.title"
              class="gallery_item"
              :class="imageSize(image.size)"
              @click="open(image)">
              <img :src="image.src">
              <p class="gallery_item_caption string-ss">{{image.title}}</p>
          </li>
        </ul>
      </div>
    </div>
    <gallery-item v-if="isOpen" :content="openImage" @close="close"></gallery-item>
  </div>
</template>
 
<script> 
import Navi from '../../components/Header';
import GalleryItem from '../../components/gallery/Item';
import GalleryImage from '../../components/gallery/Images';

export default {
  data() {
    return {
      openImage: {},
      isOpen: false,
    }
  },
  components: {
    GalleryItem,
    Navi,
  },
  mixins: [GalleryImage],
  methods: {
    imageSize(size) {
      return size == "half" ? "half" : "";
    },
    open(item) {
      this.openImage = item;
      this.isOpen = true;  
    },
    close() {
      this.openImage = {};
      this.isOpen = false;    
    }
  }
}

</script>
 
<style lang="scss">
@import "~/assets/scss/Object/utility/colors.scss";
.gallery {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  widows: 100%;
  @at-root {
    &_top {
      height: 200px;
      padding-left: 50px;
      display: flex;
      align-items: center;
      background: url('../../assets/images/bg/bg-mint.jpg') repeat;
      background-size:  500px 500px;
      box-shadow: 2px 3px 10px rgba(0,0,0,0.4);
      * {
        font-family: 'komorebi';
      }
    }
    &_side {
      width: 30px;
      height: 100vh;
      position: fixed;
      left: 0;
      background: url('../../assets/images/bg/bg-deep.jpg') repeat;
      box-shadow: 2px 3px 10px rgba(0,0,0,0.4);
      background-size:  500px 500px;
      @media screen and (max-width: 480px){
        display: none;
      }
    }
    &_item {
      position: relative;
      width: 64%;
      margin-bottom: 70px;
      @media screen and (max-width: 480px){
        width: 100%;
      }
      &.half {
        width: 32%;
        @media screen and (max-width: 480px){
          width: 100%;
        }
      }
      img {
        transition-property: all;
        transition-duration: .5s;
        box-shadow: 8px 8px 10px rgba(0,0,0,0.3);
        &:hover {
          box-shadow: 2px 2px 5px rgba(0,0,0,0.6);
        }
      }
    }  
    &_item_caption {
      position: absolute;
      bottom: -10px;
      right: -1%;
      background-color: $overlay_black-75;
      padding: 5px 10px;
      color: $white;
      max-width: 80%;
    }  
  }
}
  .gallery_tags {
    display: flex;
    padding-left: 20px;
    align-items: center;
    width: 25vw;
    height: 7vw;
    font-family: 'eriji';
    letter-spacing: -5px;
    font-size: 3vw;
    transform: rotate(-5deg) translate(-30px, -10px);
    @media screen and (max-width: 480px){
      width: 100%;
      height: 20vw;
      font-size: 5vw;
    }
    @at-root {
    &-1 {
        background: url('../../assets/images/hover_tag3.png') no-repeat;
        background-size: 100%;
      }
    }
  }

</style>