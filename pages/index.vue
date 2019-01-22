<template>
  <div class="container">
    <section class="top">
  
    
    </section>
     <section class="top_description">
       <p>
        かでんやはデザインとバスクラリネットが好きな会社員です。コンサートのチラシを
        作るのが好きでたくさん作っていたら、お願いされることが多くなりました。
        お子さまやお年寄りの方にコンサートを開催するのも好きです。よかったら声かけて
        ください〜
        仕事はデザイナー兼フロントエンドエンジニアです。バックエンドもたまにやります。
        好きな言語はJavaScriptです
       </p>
    </section>
  </div>
</template>

<script>
// import AppLogo from '~/components/AppLogo.vue'

export default {
  // components: {
  //   AppLogo
  // }
}
</script>

<style>
.container {
  height: 100vh;
  background: url('../assets/images/bg/bg-wood.jpg') repeat 100px;
}

.top {
  width: 75%;
  background-size: cover;
  height: 300px;
  background: url('../assets/images/bg/bg-mint.jpg') repeat;
  background-size:  500px 500px;
  z-index: 2;
  position: relative;
}
.top_description {
  width: 80%;
  margin: 0 7% 0 13%;
  transform: translate(0,-70px);
  z-index: 1;
  position: relative;
  background: url('../assets/images/bg/bg-gray.jpg') repeat;
  background-size:  500px 500px;
  padding: 100px 20px 20px;
}
</style>

