<template>
  <div id="container">
    <div id="title">
      <h1>线上考试后台管理系统</h1>
    </div>
    <div class="input">
      <el-input v-model="name" prefix-icon="el-icon-user" placeholder="请输入用户名"></el-input>
    </div>
    <div class="input">
      <el-input v-model="password" prefix-icon="el-icon-lock" placeholder="请输入密码" auto-complete="new-password" show-password></el-input>
    </div>
    <div class="input">
      <el-button @click="login" style="width:240px" type="primary" :disabled="disabled">登录</el-button>
      <el-button @click="goToRegister" style="width:240px" type="primary">注册</el-button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { ElMessage } from 'element-plus';

export default {
  name: "Login",
  data() {
    return {
      name: "",
      password: ""
    }
  },
  computed: {
    disabled() {
      return this.name.length == 0 || this.password.length == 0;
    }
  },
  methods: {
    async login() {
      try {
        const response = await axios.post('/api/users/login', {
          username: this.name,
          password: this.password
        });
        if (response.data) {
          // 登录成功，处理响应
          this.setUserInfo({ name: this.name, password: this.password });
          this.$router.push('/home'); // 重定向到主页或其他页面
        } else {
          ElMessage.error("用户名或密码错误");
        }
      } catch (error) {
        ElMessage.error("用户名或密码错误");
      }
    },
    goToRegister() {
      this.$router.push("/register");
    }
  }
}
</script>

<style scoped>
#container {
  background: #595959;
  background-image: url("~@/assets/login_bg.jpg");
  height: 100%;
  width: 100%;
  position: absolute;
}

#title {
  text-align: center;
  color: azure;
  margin-top: 200px;
}

.input {
  margin: 20px auto;
  width: 500px;
}
</style>