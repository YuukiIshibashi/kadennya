<template>
  <section class="l_inner-full">
    <navi />
    <ul class="label_navi">
      <li class="label concert string-s" @click="navLink('concert')">コンサート</li>
      <li class="label usual string-s" @click="navLink('usual')">日常</li>
      <li class="label bcl string-s" @click="navLink('BassClarinet')">バスクラ</li>
    </ul>
    <ul class="blog">
      <li v-for="blog in blogs" :key="blog.id" class="blog_item" @click="link(blog.number)">
        <!-- <nuxt-link :to="`/blogs/${blog.number}`"> -->
          <p class="string-xs label" :class="labelCategory(blog.labels[0].name)">{{japaneseLabel(blog.labels[0].name)}}</p>
          <h1 class="string-m">{{blog.title}}</h1>
          <p>{{formatDate(blog.created_at)}}</p>
        <!-- </nuxt-link> -->
      </li>
    </ul>
  </section>
</template>
 
<script>
import axios from 'axios'
import moment from 'moment'
import Navi from '../../components/Header';
import LabelNav from '../../components/blogs/LabelNav';
 
export default {
  async asyncData ({ params }) {
    return axios.get('https://api.github.com/repos/YuukiIshibashi/blog/issues',
        {
          params: {
            status: 'open',
            access_token: process.env.API_KEY,
          }
        })
      .then((res) => {
        return { blogs: res.data }
      })

      //  const { data: blogs } = await axios.get('https://api.github.com/repos/YuukiIshibashi/blog/issues',
      //   {
      //     params: {
      //       status: 'open',
      //       access_token: process.env.API_KEY,
      //     }
      //   })
      // return {
      //   blogs
      // }
 
  },
  components: {
    Navi,
    LabelNav,
  },
  methods: {
    link(blogId) {
      this.$router.push({path: "/blogs/board", query: {id: blogId } });
    },
    navLink(label) {
      this.$router.push({path: "/blogs/label", query: {id: label } });
    },
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
</script>
 
<style lang="scss">
@import "~/assets/scss/Object/utility/colors.scss";
.blog {
  margin-top: 20px;
  background-color: $white;
  padding: 20px;
  @at-root {
    &_item {
      padding: 10px 0;
      border-bottom: dotted 1px $gray;
      cursor: pointer;
    }
  }
}
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

</style>