<template>
  <section class="l_inner-full">
    <navi />
    <div class="blog_content">
      <h1 class="string-l mb-50">{{blog.title}}</h1>
       <!-- <div class="string-l mb-50">{{blog.body}}</div> -->
      <div v-html="$md.render(blog.body)" class="markdown-body"></div>
    </div>
  </section>
</template>
 
<script>
import axios from 'axios'
import Navi from '../../components/Header';
 
export default {
  data() {
    return {
      blog: {
        body: "",
      },
    }
  },
  components: {
    Navi,
  },
  async created() {
       console.log(this.$route)
    this.blog = await getPostData(this.$route.query.id); 
  },
}
async function getPostData(id) {
  const { data: blog } = await axios.get(`https://api.github.com/repos/YuukiIshibashi/blog/issues/${id}`)
  return blog
}

</script>
 
<style lang="scss">
@import "~/assets/scss/Object/utility/colors.scss";
@import "~/assets/scss/Object/github_markdown.scss";
.blog_content {
  background-color: $white;
  padding: 20px;
  width: 800px;
  margin: 50px auto 30px;
  @media screen and (max-width: 800px){
    width: 100%;
    padding: 5%;
  }
}

</style>