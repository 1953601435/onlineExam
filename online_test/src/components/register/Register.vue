<template>
  <div id="container">
    <div id="title">
      <h1>线上考试后台管理系统</h1>
    </div>
    <div class="input">
      <el-input v-model="username" prefix-icon="el-icon-user" placeholder="请输入用户名"></el-input>
    </div>
    <div class="input">
      <el-input v-model="password" prefix-icon="el-icon-lock" placeholder="请输入密码" auto-complete="new-password" show-password></el-input>
    </div>
    <div class="input">
      <el-input v-model="email" prefix-icon="el-icon-message" placeholder="请输入电子邮件"></el-input>
    </div>
    <div class="input">
      <el-input v-model="phone" prefix-icon="el-icon-phone" placeholder="请输入电话"></el-input>
    </div>
    <div class="input">
      <el-button @click="register" style="width:500px" type="primary" :disabled="disabled">注册</el-button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { ElMessage } from 'element-plus';

export default {
  name: "Register",
  data() {
    return {
      username: "",
      password: "",
      email: "",
      phone: ""
    }
  },
  computed: {
    disabled() {
      return this.username.length == 0 || this.password.length == 0 || this.email.length == 0 || this.phone.length == 0;
    }
  },
  methods: {
    async register() {
      try {
        const response = await axios.post('/api/users/register', {
          username: this.username,
          password: this.password,
          email: this.email,
          phone: this.phone
        });
        if (response.data) {
          ElMessage.success("注册成功");
          this.$router.push("/login"); // 注册成功后重定向到登录页面
        } else {
          ElMessage.error("用户名已存在");
        }
      } catch (error) {
        ElMessage.error("注册失败，请重试");
      }
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
