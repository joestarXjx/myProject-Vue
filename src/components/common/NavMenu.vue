<template>
  <el-menu
    :default-active="'/index'"
    router
    mode="horizontal"
    background-color="#545c64"
    text-color="#222"
    active-text-color="yellow"
    style="min-width: 1300px">
    <el-menu-item v-for="(item,i) in navList" :key="i" :index="item.name">
      {{ item.navItem }}
    </el-menu-item>
    <a href="#nowhere" style="color: #222;float: right;padding: 20px;">更多功能</a>
    <i class="el-icon-menu" style="float:right;font-size: 45px;color: #222;padding-top: 8px"></i>
    <span style="position: absolute;padding-top: 20px;right: 43%;font-size: 20px;font-weight: bold">Life is like an ocean</span>
  </el-menu>
</template>

<script>
    export default {
      name: 'NavMenu',
      data () {
        return {
          navList: [
            {name: '/index', navItem: '首页'},
            {name: '/material', navItem: '考研资料'},
            {name: '/message', navItem: '考研信息'},
            {name: '/forum', navItem: '考研论坛'},
            {name: '/detail', navItem: '个人中心'}
          ]
        }
      }
    }
</script>
a{
text-decoration: none;
}

span {
pointer-events: none;
}
<style scoped>

</style>
