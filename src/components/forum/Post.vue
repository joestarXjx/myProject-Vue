<template>
    <div class="articles-area">
      <el-card style="text-align: left;width: 990px;margin: 35px auto 0 auto">
        <div>
          <span style="font-size: 20px"><strong>{{post.title}}</strong></span>
          <el-divider content-position="right">{{post.time}}</el-divider>
          <span style="font-size: 20px"><strong>{{post.content}}</strong></span>
          <el-divider></el-divider>
          <div v-for="review in post.reviews" :key="post.id">
            <span style="font-size: 20px"><strong>{{review.content}}</strong></span>
            <span style="font-size: 20px"><strong>{{review.time}}</strong></span>
          </div>
        </div>
      </el-card>
    </div>
</template>

<script>
    export default {
        name: 'Post',
      data(){
          return{
            post:[]
          }
      },
      mounted() {
          this.loadPost()
      },
      methods:{
          loadPost(){
            var _this = this
            this.$axios.get('/posts/' + this.$route.query.id).then(resp => {
              if (resp && resp.status === 200) {
                _this.post = resp.data
              }
            })
          }
      }
    }
</script>

<style scoped>
  .articles-area {
    width: 990px;
    height: 750px;
    margin-left: auto;
    margin-right: auto;
  }
</style>
