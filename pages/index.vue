<template>
  <div>
    <section class="top">
      <img src="~/assets/images/kadennya_title.png" class="top_title">
      <img src="~/assets/images/kadennya_koara.png" class="top_koara">
      <p class="string-r color-white">デザインをしたり楽器を吹いたりコンサートを開いたりしています</p>
      <ul class="pc_only">
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
      <p class="string-r color-white">
        かでんやはデザインとバスクラリネットが好きな会社員です。コンサートのチラシを作るのが好きでたくさん作っていたら、
        お願いされることが多くなりました。<br>
        お子さまやお年寄りの方にコンサートを開催するのも好きです。<br>
        仕事はデザイナー兼フロントエンドエンジニアです。バックエンドもたまにやります。
        好きな言語はJavaScriptです。
      </p>
    </section>
  </div>
</template>

<script>

export default {
}
</script>

<style lang="scss">

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
      width: 80%;
      margin: 0 7% 0 13%;
      transform: translate(0,-70px);
      z-index: 1;
      position: relative;
      background: url('../assets/images/bg/bg-gray.jpg') repeat;
      background-size:  500px 500px;
      padding: 110px 30px 30px;
      box-shadow: 2px 3px 10px rgba(0,0,0,0.4);
      font-family: 'komorebi';
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

  }
  


}

</style>

