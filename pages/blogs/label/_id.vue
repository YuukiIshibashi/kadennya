<template>
  <section class="l_inner-full">
    <navi />
    <label-nav />

    <ul class="blog">
      <li v-for="blog in blogs" :key="blog.id" class="blog_item">
        <nuxt-link :to="`/blogs/${blog.number}`">
          <p class="string-ss label" :class="labelCategory(blog.labels[0].name)">{{japaneseLabel(blog.labels[0].name)}}</p>
          <h1 class="string-m">{{blog.title}}</h1>
          <p>{{formatDate(blog.created_at)}}</p>
        </nuxt-link>
      </li>
    </ul>
  </section>
</template>
 
<script>
import axios from 'axios'
import moment from 'moment'
import Navi from '../../../components/Header';
import LabelNav from '../../../components/blogs/LabelNav';
 
export default {
  async asyncData ({ params }) {
    const { blogs } = await getPostData(params.id); 
     return {
      blogs
    }
  },
  async created({ params }) {
    this.blogs = await getPostData(params.id); 
  },
  components: {
    Navi,
    LabelNav,
  },
  methods: {
    formatDate(date){
      return moment(date).format("YYYY-MM-DD")
    },
    labelCategory(name) {
      if (name == "concert") { return "concert" }
      else if(name == "usual") { return "usual" }
      else if(name == "BassClarinet") { return "bcl" }
    },
    japaneseLabel(name) {
      if (name == "concert") { return "コンサート" }
      else if(name == "usual") { return "日常" }
      else if(name == "BassClarinet") { return "バスクラ" }
    },
  }
}
async function getPostData(id) {
  const { data: blogs } = await axios.get('https://api.github.com/repos/YuukiIshibashi/blog/issues',
      {
        params: {
          status: 'open',
          access_token: process.env.API_KEY,
          labels: `${id}`
        }
      })
    return {
      blogs
    }
}
</script>
 