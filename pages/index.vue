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
      <h3 class="string-l color-white">かでんやとは</h3>
      <p class="mt-10 string-r color-white">
        かでんやはデザインとバスクラリネットが好きな会社員です。コンサートのチラシを作るのと、
        黙って聴いていなくていいコンサートを開催するのが趣味です。<br>
        仕事はデザイナー兼フロントエンドエンジニアです。バックエンドもたまにやります。
        好きな言語はJavaScriptです。
      </p>
    </section>
    <section class="top_topic l_inner-full">
      <div class="topic_wrapper">
        <div class="topic_item item-1">1</div>
        <div class="topic_item item-2">2</div>
        <div class="topic_item item-3">3</div>
        <div class="topic_item item-4">4</div>
        <div class="topic_item item-5">5</div>
        <div class="topic_item item-6">6</div>

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
      padding: 10px;
      background-color: white;
      border-radius: 10px;
      @media screen and (max-width: 480px){
        margin-bottom: 10px;
      }
    }
  }
}
@media screen and (min-width: 481px){
  .topic {
   @at-root {
    &_wrapper {
      display: grid;
      gap: 15px;
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 30vh 30vh 30vh 30vh;

    }
    &_item {
      background-color: white;
      border-radius: 10px;
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
      * {
        font-family: 'komorebi';
      }
      width: 80%;
      margin: 0 7% 0 13%;
      transform: translate(0,-70px);
      z-index: 1;
      position: relative;
      background: url('../assets/images/bg/bg-gray.jpg') repeat;
      background-size:  500px 500px;
      padding: 110px 30px 30px;
      box-shadow: 2px 3px 10px rgba(0,0,0,0.4);
      @media screen and (max-width: 480px){
        width: 90%;
        margin: 0;
        padding: 90px 10px 10px;
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

