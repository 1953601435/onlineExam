<template>
  <div>
    <el-form :model="form" ref="questionForm" label-width="80px">
      <el-form-item label="题目类别">
        <el-select v-model="form.category" placeholder="请选择">
          <el-option v-for="item in categories" :key="item" :label="item" :value="item"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="题目类型">
        <el-radio-group v-model="form.type">
          <el-radio :label="'单选题'">单选题</el-radio>
          <el-radio :label="'多选题'">多选题</el-radio>
          <el-radio :label="'判断题'">判断题</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="题目内容">
        <el-input v-model="form.stem" type="textarea" :rows="4"></el-input>
      </el-form-item>
      <el-form-item v-if="form.type !== '判断题'" label="选项">
        <el-row v-for="(option, index) in options" :key="index">
          <el-col :span="6">{{ option.label }}</el-col>
          <el-col :span="18">
            <el-input v-model="form.options[option.value]" placeholder="请输入选项"></el-input>
          </el-col>
        </el-row>
      </el-form-item>
      <el-form-item label="正确答案">
        <el-input v-model="form.correctAnswer"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('questionForm')">提交</el-button>
        <el-button @click="resetForm('questionForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        id: '',
        category: '',
        type: '',
        stem: '',
        options: {
          A: '',
          B: '',
          C: '',
          D: '',
          T: '',
          F: ''
        },
        correctAnswer: ''
      },
      options: [
        { label: 'A', value: 'A' },
        { label: 'B', value: 'B' },
        { label: 'C', value: 'C' },
        { label: 'D', value: 'D' },
        { label: 'T', value: 'T' },
        { label: 'F', value: 'F' }
      ],
      categories: [
        '数媒',
        '软工',
        '通信'
      ]
    }
  },
  mounted() {
    // Simulate getting question details from API based on route params
    const questionId = this.$route.params.id;
    this.fetchQuestionDetails(questionId);
  },
  methods: {
    fetchQuestionDetails(id) {
      // Simulated API call
      // Replace with actual API call to fetch question details
      const mockQuestion = {
        id: id,
        category: '软工',
        type: '单选题',
        stem: '这是一个单选题的题干内容',
        options: {
          A: '选项A内容',
          B: '选项B内容',
          C: '选项C内容',
          D: '选项D内容'
        },
        correctAnswer: 'A'
      };
      // Assign fetched data to form
      this.form = {
        id: mockQuestion.id,
        category: mockQuestion.category,
        type: mockQuestion.type,
        stem: mockQuestion.stem,
        options: {
          A: mockQuestion.options.A,
          B: mockQuestion.options.B,
          C: mockQuestion.options.C,
          D: mockQuestion.options.D
        },
        correctAnswer: mockQuestion.correctAnswer
      };
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          // Submit form logic
          console.log(this.form);
          // Reset form after submission
          this.resetForm(formName);
        } else {
          console.log('Validation failed');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
}
</script>
