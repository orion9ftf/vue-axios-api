<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- <HelloWorld msg="Bienvenide a  Vue.js App"/> -->
    <MixinsComponentsTest msg="Bienvenide a  Vue.js App"></MixinsComponentsTest>
    
    <!-- <hr>
    <p v-for="(item, i) in items" :key="i">
      {{ item }}
    </p> -->
    <hr>
    <img 
      v-for="(placeholder, i) in placeholders" 
      :key="i" 
      :src="placeholder.thumbnailUrl" 
      :alt="placeholder.title"
    >

    <div class="container post" v-for="(post, i) in posts" :key="i">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col">UserID</th>
            <th scope="col">id</th>
            <th scope="col">Title</th>
            <th scope="col">Body</th>
          </tr>
        </thead>
        <tbody class="text-justify">
          <tr>
            <th scope="row">{{ post.userId }}</th>
            <td>{{ post.id }}</td>
            <td>{{ post.title }}</td>
            <td>{{ post.body }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'

//import PlaceholderService from '../services/PlaceholderService'
import HelloWorld from '@/components/HelloWorld.vue'
import MixinsComponentsTest from '../components/MixinsComponentsTest.vue'

export default {
  name: 'HomeView',
   components: {
     HelloWorld,
     MixinsComponentsTest
   },
  data (){
    return {
      posts: []
    }
  },
  mounted(){
    const that = this;
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then( function(response) {
      that.posts = response.data;
      //console.log(that.posts)
    })
  }
  // data () {
  //   return {
  //     placeholders: []
  //   }
  // },
  // methods: {
  //   async getPlaceholders() {
  //    const response = await PlaceholderService.getPlaceholders()
  //     this.placeholders = response.data
  //   }
  // },
  // created () {
  //   this.getPlaceholders()
  // }
}
</script>
