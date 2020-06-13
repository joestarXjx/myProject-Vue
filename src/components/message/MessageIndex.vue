<template>
  <div style="margin-top: 40px">
    <div class="articles-area">
      <el-card style="text-align: left;width: 990px;margin: 35px auto 0 auto">
        <el-table
          :data="tableData"
          stripe
          height="600"
          style="width: 100%">
          <el-table-column
            prop="name"
            label="院校名称"
            width="180">
          </el-table-column>
          <el-table-column
            prop="address"
            label="所在地"
            width="180">
          </el-table-column>
          <el-table-column
            prop="belong"
            label="隶属">
          </el-table-column>
          <el-table-column
            label="查看">
          </el-table-column>
        </el-table>
      </el-card>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'MessageIndex',
      data() {
        return {
          tableData: []
        }
      },
      mounted() {
        this.loadMsg()
      },
      methods:{
        loadMsg(){
          var _this = this
          this.$axios.get('/messages').then(resp => {
            if (resp && resp.status === 200) {
              _this.tableData  = resp.data
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
