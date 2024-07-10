<template>
  <div class="content-container" direction="vertical">
    <!-- input -->
    <div>
      <el-container class="content-row">
        <div class="input-tip">
          题目所属类别:
        </div>
        <div class="input-field">
          <el-select v-model="queryParams.category" placeholder="请选择分类">
            <el-option v-for="item in categories" :key="item" :label="item" :value="item">
            </el-option>
          </el-select>
        </div>
        <div class="input-tip">
          题目类型:
        </div>
        <div class="input-field">
          <el-select v-model="queryParams.type" placeholder="请选择类型">
            <el-option v-for="type in questionTypes" :key="type" :label="type" :value="type">
            </el-option>
          </el-select>
        </div>
      </el-container>
    </div>
    <!-- button -->
    <div class="content-row">
      <el-container>
        <el-button type="primary" @click="requestData">检索</el-button>
        <el-button type="primary" @click="clear">显示全部</el-button>
        <el-button type="success" @click="addQuestion">新增试题</el-button>
      </el-container>
    </div>
    <!-- list -->
    <div>
      <el-table
          :data="questionsData"
          tooltip-effect="dark"
          style="width: 100%">
        <el-table-column
            label="题目"
            width="200">
          <template #default="scope">
            <div>{{scope.row.stem}}</div>
          </template>
        </el-table-column>
        <el-table-column
            label="类别"
            width="100"
            prop="category">
        </el-table-column>
        <el-table-column
            label="类型"
            width="100"
            prop="type">
        </el-table-column>
        <el-table-column
            label="选项"
            width="300">
          <template #default="scope">
            <div v-if="scope.row.type !== '判断题'">
              <p>A: <el-input v-model="scope.row.options.A" disabled></el-input></p>
              <p>B: <el-input v-model="scope.row.options.B" disabled></el-input></p>
              <p>C: <el-input v-model="scope.row.options.C" disabled></el-input></p>
              <p>D: <el-input v-model="scope.row.options.D" disabled></el-input></p>
            </div>
            <div v-else>
              <p>T: <el-input v-model="scope.row.options.T" disabled></el-input></p>
              <p>F: <el-input v-model="scope.row.options.F" disabled></el-input></p>
            </div>
          </template>
        </el-table-column>
        <el-table-column
            label="正确答案"
            width="100"
            prop="correctAnswer">
        </el-table-column>
        <el-table-column
            label="操作"
            width="150">
          <template #default="scope">
            <el-button @click="editQuestion(scope.row)" type="primary">编辑</el-button>
            <el-button @click="deleteQuestion(scope.row)" type="danger">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import Mock from '../../mock/Mock'
export default {
  data() {
    return {
      questionsData: [],
      // 模拟分类数据
      categories: [
        "全部",
        "数媒",
        "软工",
        "通信"
      ],
      // 模拟题目类型
      questionTypes: [
        "单选题",
        "多选题",
        "判断题"
      ],
      queryParams: {
        category: "",
        type: ""
      }
    }
  },
  mounted() {
    this.questionsData = Mock.getQuestions(this.$route.params.type);
  },
  beforeRouteUpdate(to) {
    this.questionsData = Mock.getQuestions(to.params.type);
  },
  methods: {
    requestData() {
      this.$message({
        type: 'success',
        message: '筛选请求参数：' + JSON.stringify(this.queryParams)
      })
      this.questionsData = Mock.getQuestions(this.$route.params.type);
    },
    clear() {
      this.queryParams = {
        category: "",
        type: ""
      }
      this.questionsData = Mock.getQuestions(this.$route.params.type);
    },
    addQuestion() {
      this.$router.push({ name: 'AddQuestion', params: { type: this.$route.params.type } });
    },
    editQuestion(question) {
      this.$router.push({ name: 'EditQuestion', params: { id: question.id } });
    },
    deleteQuestion(question) {
      this.$confirm('确认删除该试题吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.questionsData = this.questionsData.filter(item => item.id !== question.id);
        this.$message({
          type: 'success',
          message: '删除成功!'
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    }
  }
}
</script>

<style scoped>
#container {
  height: 100%;
  width: 100%;
  position: absolute;
}
#top {
  background-color: #545c64;
  margin-right: 1px;
  text-align: center;
  height: 60px;
}
</style>
