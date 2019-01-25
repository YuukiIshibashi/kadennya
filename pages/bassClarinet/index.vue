<template>
  <div class="basscla">
    <navi />
    <ul class="basscla_list"> 
      <li class="basscla_item">
        <div class="string-r">
          <h3 class="string-bold mb-10">どこでも背負っていきますよ</h3>
          いくら練習してもたいして上手くならないですが（これは自分のせい）、バスクラリネットがとにかく好きです。
          吹奏楽だと正直あんまり目立たないし、Tubaとかバリトンサックスに消されちゃうし、
          ピアノ椅子じゃないとダメだったりするんですが、そこが可愛いところです。
        </div>
        <img src="~/assets/images/basscl/basscl_2.jpg"> 
      </li>
      <li class="basscla_item">
        <div class="string-r">
          <h3 class="string-bold mb-10">好きすぎて関係ないところに持っていきますよ</h3>
            DEMODAYという、アプリ開発コンテスト的なものに出場した時にプレゼンで持って行きました。
            なぜなら美しいから。これで優勝できると思ったらできなかった・・。
            <a href="https://diveintocode.jp/demoday/third">https://diveintocode.jp/demoday/third</a>
        </div>
        <img src="~/assets/images/basscl/basscl_1.jpg"> 
      </li>
    </ul>
  </div>
</template>

<script>
import Navi from '../../components/Header';
 
export default {
  components: {
    Navi,
  },
}
</script>

<style lang="scss">
@import "~/assets/scss/Object/utility/colors.scss";
.basscla {
  background: url('../../assets/images/basscl/basscla.jpg') no-repeat;
  background-size: cover;
  background-attachment: fixed;
  min-height: 100vh;
  padding: 100px 0 50px;
  position: relative;
  z-index: 1;
  &::after {
    content: '';
    display: block;
    position: absolute;
    background-color: $overlay_black-40;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 2;
    }

  @at-root {
    &_list {
      position: relative;
      z-index: 3;  
    }
    &_item {
      width: 70%;
      margin: 10px 0 50px 30%;
      div {
        background-color: $white-a;
        padding: 20px 20px 40px;
        
      }
      img {
        width: 60%;
        margin-left: 40%;
        transform: translate(0, -20px);
        @media screen and (max-width: 480px){
         width: 80%;
         margin-left: 20%;
        }
      }
    }
  }
}
</style>