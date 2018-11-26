<!-- 67: Delete all the default contents inside the template & add-->
<template>
  <div class="container">
    <h1>Latest Posts</h1>
    <div class="create-post">
      <label for="create-post">Say Something...</label>
      <input v-model="text" type="text" id="create-post" placeholder="Create a post">
      <br />
      <button v-on:click="createPost">Create Post!</button>
      <button v-on:click="clear">Clear!</button>
      <br />
      <label for="select-post">Select Post to : </label>
      <br />
      <button v-on:click="updatePosts">Update Post!</button>
      <button v-on:click="deletePosts">Delete Post!</button>
    </div>
    <hr>
    <p class="error" v-if="error">{{ error }}</p>
    <div class="posts-container">
      <div class="post"
        v-bind:item="post"
        v-bind:index="index"
        v-bind:key="post._id"
        v-for="(post, index) in posts"
        v-on:click="uPosts(post._id, post.text)"
        v-on:dblclick="deletePosts(post._id)"
      >
          <p class="text">{{ post.text }}</p>
          {{`${post.createdAt.getDate()}/${post.createdAt.getMonth()}/${post.createdAt.getFullYear()}`}}
      </div>
    </div>
  </div> 
</template>

<!-- 69: Add the Logic -->
<script>
  import PostService from '../PostService';

  export default {
    name: 'PostComponent',
    /*props: {
      msg: String
    }*/
    // 69.1 Create the state
    data() {
      return {
        posts: [],
        error: '',
        test: '',
        id: '',
        text: ''
      }
    },
    async created() {
      try {
        this.posts = await PostService.getPosts();
      } catch (err) {
          this.error = err.message;
      }
    },
    methods: {
      async createPost() {
        if(this.text != ""){
          await PostService.insertPost(this.text);
          this.posts = await PostService.getPosts();
          this.text = "";
          this.id = "";
        }
      },
      async deletePosts(id) {
        if(this.id != ""){
          await PostService.deletePosts(this.id);
          this.posts = await PostService.getPosts();
          this.text = "";
          this.id = "";
        }
      },
      async uPosts(id, body) {
        this.text = body;
        this.id = id;
      },
      async updatePosts() {
              if(this.text != "" & this.id != ""){
                //console.log(this.text, this.id);
                await PostService.updatePosts(this.id, this.text);
                this.posts = await PostService.getPosts();
                this.text = "";
                this.id = "";
              }
      },
      async clear() {
        this.id = "";
        this.text = "";
      }
    }
  }
</script>

<!-- 68: Delete all the default contents inside the style & add-->
<style scoped>
  div.container{
    min-width: 800px;
    margin: 0 auto;
  }

  p.error {
    border: 1px solid #ff5f5f;
    background-color: #ffc5c1;
    padding: 10px;
    margin-bottom: 15px;
  }

  div.post {
    position: relative;
    border: 1px solid #ffc5c1;
    background-color: #f6f8f8;
    padding: 10px 10px 30px 10px;
    margin-bottom: 5px;
  }

  div.created-at {
    position: absolute;
    top: 0;
    left: 0;
    padding: 5px 15px 5px 15px;
    background-color: rgb(22, 0, 100);
    color: white;
    font-size: 13px;
  }

  p.text {
    font-size: 22px;
    font-weight: 700;
    margin-bottom: 0;
  }
</style>
