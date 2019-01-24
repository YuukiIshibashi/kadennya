<template>
  <section class="l_inner-full">
    <div class="blog">
      <h1 class="string-l mb-50">{{blog[0].title}}</h1>
      <div v-html="$md.render(blog[0].body)" class="markdown-body"></div>
    </div>
  </section>
</template>
 
<script>
import axios from 'axios'
 
export default {
  async asyncData ({ params }) {
    const { data: blog } = await axios.get(`https://api.github.com/repos/YuukiIshibashi/blog/issues?id=${params.id}`)
    return {
      blog
    }
  }
}
</script>
 
<style lang="scss">
@import "~/assets/scss/Object/utility/colors.scss";
@import "~/assets/scss/Object/github_markdown.scss";
.blog {
  margin-top: 60px;
  background-color: $white;
  padding: 20px;
}

</style>