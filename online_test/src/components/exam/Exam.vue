<template>
  <div class="exam-container">
    <h2>参加考试</h2>
    <el-form :model="examForm" label-width="80px">
      <el-form-item label="选择专业方向">
        <el-checkbox-group v-model="selectedSubjects">
          <el-checkbox label="软工">软工</el-checkbox>
          <el-checkbox label="数媒">数媒</el-checkbox>
          <el-checkbox label="通信">通信</el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="startExam">开始考试</el-button>
      </el-form-item>
    </el-form>
    <!-- Display questions -->
    <div v-if="showQuestions">
      <h3>考试题目</h3>
      <el-form :model="answersForm" ref="answersForm" label-width="80px">
        <el-row v-for="(question, index) in selectedQuestions" :key="question.id">
          <el-col :span="20">
            <p>{{ index + 1 }}. {{ question.stem }}</p>
            <el-form-item v-if="question.type !== '判断题'">
              <el-checkbox-group v-model="answersForm[question.id]">
                <el-checkbox :label="'A'">{{ question.options.A }}</el-checkbox>
                <el-checkbox :label="'B'">{{ question.options.B }}</el-checkbox>
                <el-checkbox :label="'C'">{{ question.options.C }}</el-checkbox>
                <el-checkbox :label="'D'">{{ question.options.D }}</el-checkbox>
              </el-checkbox-group>
            </el-form-item>
            <el-form-item v-else>
              <el-radio-group v-model="answersForm[question.id]">
                <el-radio :label="'T'">正确</el-radio>
                <el-radio :label="'F'">错误</el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>
        </el-row>
        <el-form-item>
          <el-button type="primary" @click="submitExam">提交考试</el-button>
        </el-form-item>
      </el-form>
    </div>
    <!-- Display exam result -->
    <div v-if="showResult">
      <h3>考试结果</h3>
      <p>得分: {{ examResult.score }}</p>
      <p>答题情况:</p>
      <ul>
        <li v-for="(result, index) in examResult.answers" :key="index">
          {{ result.question }}: {{ result.answer }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Mock from '../../mock/Mock'

export default {
  data() {
    return {
      selectedSubjects: [],
      selectedQuestions: [],
      answersForm: {},
      showQuestions: false,
      showResult: false,
      examResult: {
        score: 0,
        answers: []
      }
    }
  },
  methods: {
    startExam() {
      if (this.selectedSubjects.length === 0) {
        this.$message.error('请选择至少一个专业方向');
        return;
      }
      // Simulated API call to get questions
      const subjects = this.selectedSubjects.join(',');
      this.selectedQuestions = Mock.getRandomQuestions(subjects, 20);
      this.showQuestions = true;
    },
    submitExam() {
      // Simulated API call to evaluate exam
      const examAnswers = Object.entries(this.answersForm).map(([questionId, selectedAnswers]) => ({
        question: this.selectedQuestions.find(q => q.id === questionId).stem,
        answer: selectedAnswers.join(', ')
      }));
      this.examResult = {
        score: Math.floor(Math.random() * 100), // Replace with actual evaluation logic
        answers: examAnswers
      };
      this.showResult = true;
    }
  }
}
</script>

<style scoped>
.exam-container {
  max-width: 800px;
  margin: 0 auto;
}
</style>
