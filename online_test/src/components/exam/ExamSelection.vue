<template>
  <div class="content-container">
    <el-container class="content-row">
      <div class="input-tip">专业方向:</div>
      <div class="input-field">
        <el-select v-model="selectedMajors" multiple placeholder="请选择专业方向">
          <el-option v-for="major in majors" :key="major" :label="major" :value="major">
          </el-option>
        </el-select>
      </div>
    </el-container>
    <div class="content-row">
      <el-button type="primary" @click="startExam">开始考试</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      majors: ["软工", "数媒", "通信"],
      selectedMajors: []
    };
  },
  methods: {
    startExam() {
      if (this.selectedMajors.length !== 2) {
        this.$message.error('请选择两个专业方向');
        return;
      }
      // 跳转到 'Exam' 路由，并将选择的专业方向作为参数传递
      this.$router.push({ name: 'Exam', params: { majors: this.selectedMajors } });
    }
  }
};
</script>

<style scoped>
.content-container {
  padding: 20px;
}

.content-row {
  margin-bottom: 20px;
}

.input-tip {
  width: 100px;
  text-align: right;
  padding-right: 10px;
}

.input-field {
  width: 200px;
}

.el-button {
  margin-left: 20px;
}
</style>
