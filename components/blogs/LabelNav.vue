<template>
  <ul class="label_navi">
    <li class="label concert string-s" @click="link('concert')">コンサート</li>
    <li class="label usual string-s" @click="link('usual')">日常</li>
    <li class="label bcl string-s" @click="link('BassClarinet')">バスクラ</li>
  </ul>
</template>
 
<script>
export default {
  methods: {
    link(label) {
      this.$router.push({path: "/blogs/label", query: {id: label } });
      window.location.reload()
    }
  }
}
</script>
 
<style lang="scss">
@import "~/assets/scss/Object/utility/colors.scss";
.label {
  width: 100px;
  padding: 0 10px;
  color: $white;
  text-align: center;
  margin-right: 3px;
  &.concert {
    background-color: $concert
  }
  &.usual {
    background-color: $usual
  }
  &.bcl {
    background-color: $bcl
  }
}
.label_navi {
   margin-top: 50px;
   display: flex;
  @media screen and (max-width: 480px){
    display: none;
  }
  @at-root {
    &_list {
      font-family: 'komorebi';
      padding-left: 5px;
      letter-spacing: -1px;
    }
  }
}


</style>