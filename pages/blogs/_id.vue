<template>
  <section class="l_inner-full">
    <div class="blog_content">
      <h1 class="string-l mb-50">{{blog.title}}</h1>
      <div v-html="$md.render(blog.body)" class="markdown-body"></div>
    </div>
  </section>
</template>
 
<script>
import axios from 'axios'
 
export default {
  async asyncData ({ params }) {
    const { data: blog } = await axios.get(`https://api.github.com/repos/YuukiIshibashi/blog/issues/${params.id}`)
    return {
      blog
    }
  }
}
</script>
 
<style lang="scss">
@import "~/assets/scss/Object/utility/colors.scss";
@import "~/assets/scss/Object/github_markdown.scss";
.blog_content {
  margin-top: 60px;
  background-color: $white;
  padding: 20px;
  width: 800px;
  margin: 0 auto;
  @media screen and (max-width: 800px){
    width: 100%;
    padding: 5%;
  }
}

</style>