<template>
  <section class="l_inner-full">
    <navi />
    <ul class="blog">
      <li v-for="blog in blogs" :key="blog.id" class="blog_item">
        <nuxt-link :to="`/blogs/${blog.id}`">
          <h1 class="string-m">{{blog.title}}</h1>
          <p>{{blog.created_at}}</p>
        </nuxt-link>
      </li>
    </ul>
  </section>
</template>
 
<script>
import axios from 'axios'
import Navi from '../../components/Header';
 
export default {
  async asyncData ({ params }) {
    const { data: blogs } = await axios.get('https://api.github.com/repos/YuukiIshibashi/blog/issues?state=open')
    return {
      blogs
    }
  },
  components: {
    Navi,
  },
}
</script>
 
<style lang="scss">
@import "~/assets/scss/Object/utility/colors.scss";
.blog {
  margin-top: 100px;
  background-color: $white;
  padding: 20px;
  @at-root {
    &_item {
      padding-bottom: 20px;
      border-bottom: dotted 1px $gray;
    }
  }
  

}

</style>