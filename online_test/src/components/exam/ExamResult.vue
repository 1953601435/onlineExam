<template>
  <div class="content-container">
    <el-card>
      <h3>考试结果</h3>
      <p>您的成绩是：{{ score }}</p>
      <p>正确率是：{{ accuracy }}%</p>
    </el-card>
  </div>
</template>

<script>
import Mock from '../../mock/Mock'
export default {
  data() {
    return {
      score: 0,
      accuracy: 0
    }
  },
  mounted() {
    const answers = this.$route.params.answers;
    const result = Mock.evaluateExam(answers);
    this.score = result.score;
    this.accuracy = result.accuracy;
  }
}
</script>

<style scoped>
.content-container {
  padding: 20px;
}
</style>
