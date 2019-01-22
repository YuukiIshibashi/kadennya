<template>
  <section class="container">
    <li v-for="u in user" :key="u.id">
        <h1>{{u.name}}</h1>
        <h1>{{u.title}}</h1>
    </li>
  </section>
</template>
 
<script>
import axios from 'axios'
 
export default {
  async asyncData ({ params }) {
    const { data: user } = await axios.get('https://api.github.com/repos/YuukiIshibashi/concertmaker/issues?state=open')
    return {
      user
    }
  }
}
</script>
 
<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
}
 
.container img{
  margin-bottom: 20px;
  border-radius: 50%;
  overflow: hidden;
}
</style>