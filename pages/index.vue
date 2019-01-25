<template>
  <div>
    <section class="top">
      <img src="~/assets/images/kadennya_title.png" class="top_title">
      <img src="~/assets/images/kadennya_koara.png" class="top_koara">
      <p class="string-r color-white">デザインをしたり楽器を吹いたりコンサートを開いたりしています</p>
      <ul class="pc_only">
        <li class="tags tags-6"><span></span></li>
        <nuxt-link to="/blogs">
          <li class="tags tags-1"><span>日記のような</span></li>
        </nuxt-link>
        <nuxt-link to="/gallery">
          <li class="tags tags-2"><span>ギャラリー</span></li>
        </nuxt-link>
        <li class="tags tags-3"><span>バスクラのこと</span></li>
        <li class="tags tags-4"><span></span></li>
        <li class="tags tags-5"><span></span></li>
        
      </ul>
    </section>
    <section class="top_description">
     
    </section>
    <section class="top_topic">
      <div class="l_inner-full">
        <h3 class="string-l color-white">かでんやとは</h3>
        <p class="mt-10 string-r color-white">
          かでんやはデザインとバスクラリネットが好きな会社員です。コンサートのチラシを作るのと、
          黙って聴いていなくていいコンサートを開催するのが趣味です。<br>
          仕事はデザイナー兼フロントエンドエンジニアです。バックエンドもたまにやります。
          好きな言語はJavaScriptです。
        </p>
        <p class="mt-10 mb-20 string-l color-white">以下、好きなものです</p>
        <div class="topic_wrapper">
          <div class="topic_item item-1">
            <div class="topic_item_img">
              <img src="~/assets/images/oyako-img.jpg">
            </div>
            <div class="p-10">
              <h3 class="topic_item_title string-bold">黙って聴いてなくて良いコンサートをやるのが好き</h3>
              <p class="string-ss">何してたって良いと思うんです。</p>
            </div>
          </div>
          <div class="topic_item item-2">
            <div class="topic_item_img">
              <img src="~/assets/images/surf.jpg">
            </div>
            <div class="p-10">
              <h3 class="topic_item_title string-bold">サーフィン好き（下手）</h3>
            </div>
          </div>
          
          <div class="topic_item item-3">
            <div class="topic_item_img">
                <nuxt-link to="/gallery">
                <img src="~/assets/images/archive/famiry01.jpg">
                </nuxt-link>
            </div>
            <div class="p-10">
              <h3 class="topic_item_title string-bold">紙のデザイン</h3>
            </div>
          </div>
         
          <div class="topic_item item-4">
            <div class="topic_item_img">
              <img src="~/assets/images/kabushima.jpg">
            </div>
            <div class="p-10">
              <h3 class="topic_item_title string-bold">青森県八戸市</h3>
            </div>
          </div>
          <div class="topic_item item-5">
            <div class="topic_item_img">
              <img src="~/assets/images/yakei.jpg">
            </div>
            <div class="p-10">
              <h3 class="topic_item_title string-bold">工場夜景</h3>
              <p class="string-ss"></p>
            </div>
          </div>
          <div class="topic_item item-6">
             <div class="topic_item_img">
              <img src="~/assets/images/contra.jpg">
            </div>
            <div class="p-10">
              <h3 class="topic_item_title  string-bold">バスクラが好き（上手くはない）</h3>
              <p class="string-ss">これはコントラバスクラでした。</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  </div>
</template>

<script>

export default {
}
</script>

<style lang="scss">
.topic {
   @at-root {
    &_item {
      // padding: 10px;
      background-color: white;
      border-radius: 5px;
      box-shadow: 2px 2px 5px rgba(0,0,0,0.3);
      @media screen and (max-width: 480px){
        margin-bottom: 20px;
      }
    }
    &_item_img {
      overflow: hidden;
      border-radius: 5px 5px 0 0;
      width: 100%;
      height: 80%
    }
    &_item_title {
      font-size: 12px;
    }
  }
}
@media screen and (min-width: 481px){
  .topic {
   @at-root {
    &_wrapper {
      display: grid;
      gap: 20px;
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 35vh 35vh 35vh 35vh;

    }
    &_item {
      &.item-1 {
        grid-column: 1 / 3;
        grid-row: 1 / 3;
      }
      &.item-2 {
        grid-column: 3 / 4;
        grid-row: 1 / 2;
      }
      &.item-3 {
        grid-column: 3 / 4;
        grid-row: 2 / 3;
      }
      &.item-4 {
        grid-column: 1 / 2;
        grid-row: 3 / 4;
      }
       &.item-5 {
        grid-column: 1 / 2;
        grid-row: 4 / 5;
      }
      &.item-6 {
        grid-column: 2 / 4;
        grid-row: 3 / 5;
      }
    }
   }
  }
}
@media screen and (max-width: 700px){
  .topic {
    @at-root {
      &_wrapper {
      grid-template-rows: 20vh 20vh 20vh 20vh;
      }
      &_item_title {
        font-size: 8px;
      }
    }
  }
}
.top {
  width: 75%;
  background-size: cover;
  height: 300px;
  background: url('../assets/images/bg/bg-mint.jpg') repeat;
  background-size:  500px 500px;
  z-index: 2;
  position: relative;
  display: flex;
  align-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 0 50px;
  overflow: visible;
  box-shadow: 2px 3px 10px rgba(0,0,0,0.4);
  font-family: 'komorebi';
  @media screen and (max-width: 480px){
    width: 100%;
    padding: 50px 10px 20px;
    height: 250px;
  }
  @at-root {
    &_topic {
       background: url('../assets/images/bg/bg-deep.jpg') repeat;
       background-size:  500px 500px;
       padding: 30px 0;
       * {
        font-family: 'komorebi';
      }
    }
    &_title {
      width: 60%;
      @media screen and (max-width: 480px){
        width: 70%;
      }
    }
    &_koara {
      width: 15%;
      @media screen and (max-width: 480px){
        width: 30%;
      }
    }
    &_description {
      width: 75%;
      height: 250px;
      transform: translate(20px,-220px);
      margin-bottom: -100px;
      z-index: 1;
      position: relative;
      background: url('../assets/images/bg/bg-gray.jpg') repeat;
      background-size:  500px 500px;
      box-shadow: 2px 3px 10px rgba(0,0,0,0.4);
      @media screen and (max-width: 480px){
        width: 100%;
        margin: 0;
        transform: translate(0,-230px);
        margin-bottom: -160px;
      }
    }
  }
}
.tags {
  position: absolute;
  display: flex;
  padding-left: 20px;
  align-items: center;
  width: 20vw;
  height: 5vw;
  font-family: 'eriji';
  letter-spacing: -5px;
  font-size: 2vw;
  @at-root {
    &-1 {
      top: 15%;
      right: -15%;
      background: url('../assets/images/hover_tag1.png') no-repeat;
      background-size: 100%;
      transform: rotate(-5deg);
      &:hover {
        background: url('../assets/images/normal_tag1.png') no-repeat;
        background-size: 100%;
        transform: rotate(-5deg);
      }
    }
    &-2 {
      top: 30%;
      right: -5%;
      background: url('../assets/images/hover_tag2.png') no-repeat;
      background-size: 100%;
      transform: rotate(10deg);
      &:hover {
        background: url('../assets/images/normal_tag2.png') no-repeat;
        background-size: 100%;
        transform: rotate(10deg);
      }
    }
    &-3 {
      top: 60%;
      right: -15%;
      background: url('../assets/images/hover_tag3.png') no-repeat;
      background-size: 100%;
      transform: rotate(-12deg);
      &:hover {
        background: url('../assets/images/normal_tag3.png') no-repeat;
        background-size: 100%;
        transform: rotate(-12deg);
      }
    }
    &-4 {
      top: 75%;
      right: -15%;
      background: url('../assets/images/hover_tag4.png') no-repeat;
      background-size: 100%;
      transform: rotate(-10deg);
      &:hover {
        background: url('../assets/images/normal_tag4.png') no-repeat;
        background-size: 100%;
        transform: rotate(-10deg);
      }
    }
    &-5 {
      top: 90%;
      right: -3%;
      background: url('../assets/images/hover_tag5.png') no-repeat;
      background-size: 100%;
      transform: rotate(15deg);
      &:hover {
        background: url('../assets/images/normal_tag5.png') no-repeat;
        background-size: 100%;
        transform: rotate(15deg);
      }
    }
    &-6 {
      top: 30%;
      right: -28%;
      background: url('../assets/images/hover_tag6.png') no-repeat;
      background-size: 100%;
      transform: rotate(-15deg);
      &:hover {
        background: url('../assets/images/normal_tag6.png') no-repeat;
        background-size: 100%;
        transform: rotate(-15deg);
      }
    }
  }
}

</style>

