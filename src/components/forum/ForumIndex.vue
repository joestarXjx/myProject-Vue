<template>
    <div style="margin-top: 40px">
      <!--<el-button @click="addArticle()">添加文章</el-button>-->
      <div class="articles-area">
        <el-card style="text-align: left">
          <div v-for="post in posts.slice((currentPage-1)*pageSize,currentPage*pageSize)" :key="post.id">
            <div style="float:left;width:85%;height: 150px;">
              <router-link class="article-link" :to="{path:'forum/post',query:{id: post.id}}">
                <span style="font-size: 20px"><strong>{{post.title}}</strong></span>
              </router-link>
              <el-divider content-position="left">{{post.time}}</el-divider>
              <router-link class="article-link" :to="{path:'forum/post',query:{id: post.id}}">
                <p>{{post.content}}</p>
              </router-link>
            </div>
          </div>
          <el-divider></el-divider>
        </el-card>
      </div>
      <el-pagination
        background
        layout="total, prev, pager, next, jumper"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-size="pageSize"
        :total="posts.length">
      </el-pagination>
    </div>
</template>

<script>
    export default {
      name: 'Articles',
      data () {
        return {
          posts: [],
          currentPage:1,
          pageSize: 5
        }
      },
      mounted () {
        this.loadPosts()
      },
      methods: {
        loadPosts () {
          var _this = this
          this.$axios.get('/posts').then(resp => {
            if (resp && resp.status === 200) {
              _this.posts = resp.data
            }
          })
        },
        handleCurrentChange: function (currentPage) {
              this.currentPage = currentPage
              console.log(this.currentPage)
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

  .article-link {
    text-decoration: none;
    color: #606266;
  }

  .article-link:hover {
    color: #409EFF;
  }
</style>
