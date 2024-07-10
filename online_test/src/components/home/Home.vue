<template>
  <el-container id="container">
    <el-aside width="250px">
      <el-container id="top">
        <img style="width:25px;height:25px;margin: auto 0 auto auto;" src="~@/assets/logo.png" alt=""/>

        <div style="margin: auto auto auto 10px;color:#ffffff;font-size:17px">
          在线考试管理系统
        </div>
      </el-container>
      <el-menu
          :default-active="$route.path"
          style="height:100%"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          @select="selectItem">
        <el-sub-menu index="1">
          <template #title>
            <i class="el-icon-s-order"></i>
            <span>参加考试</span>
          </template>
          <el-menu-item index="/home/exam-selection">开始考试</el-menu-item>

        </el-sub-menu>
        <el-sub-menu index="2">
          <template #title>
            <i class="el-icon-s-shop"></i>
            <span>题库管理</span>
          </template>
          <el-menu-item index="/home/questions/:type">试题信息</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="3">
          <template #title>
            <i class="el-icon-s-custom"></i>
            <span>学生管理</span>
          </template>
          <el-menu-item index="/home/student">学生信息</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="4">
          <template #title>
            <i class="el-icon-s-ticket"></i>
            <span>考试分析</span>
          </template>
          <el-menu-item index="/home/exam-result">考试明细</el-menu-item>
          <el-menu-item index="/home/data">数据统计</el-menu-item>
        </el-sub-menu>
      </el-menu>
    </el-aside>
    <el-main style="padding:0">
      <!-- 添加一个通用的头部 -->
      <el-header style="margin:0;padding:0;" height="80px">
        <el-container style="background-color:blanchedalmond;margin:0;padding:0;height:80px">
          <div style="margin: auto;margin-left:100px"><h1>欢迎您登录后台管理系统，管理员用户！</h1></div>
          <div style="margin: auto;margin-right:50px"><el-button type="primary" @click="logout">注销</el-button></div>
        </el-container>
      </el-header>
      <!-- 这里用来渲染具体的功能模块 -->
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script>
import Storage from '../../tools/Storage'
export default {
  name:"Login",
  methods: {
    logout() {
      Storage.commit('clearUserInfo');
      this.$router.push({name:'login'})
    },
    selectItem(index) {
      this.$router.push(index)
    }
  },
}
</script>

<style scoped>
#container {
  height: 100%;
  width:100%;
  position: absolute;
}
#top {
  background-color:#545c64;
  margin-right:1px;
  text-align: center;
  height: 60px;
}

</style>