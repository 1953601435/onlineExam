<template>
  <div>
    <el-table :data="students" tooltip-effect="dark" style="width: 100%">
      <el-table-column label="学号" width="200">
        <template #default="{ row }">
          <span>{{ row.studentId }}</span>
        </template>
      </el-table-column>
      <el-table-column label="姓名" width="200">
        <template #default="{ row }">
          <span>{{ row.name }}</span>
        </template>
      </el-table-column>
      <el-table-column label="邮箱" width="200">
        <template #default="{ row }">
          <span>{{ row.email }}</span>
        </template>
      </el-table-column>
      <el-table-column label="电话" width="200">
        <template #default="{ row }">
          <span>{{ row.phone }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="150">
        <template #default="{ row }">
          <el-button size="mini" type="primary" @click="editStudent(row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="deleteStudent(row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import Mock from '../../mock/Mock'

export default {
  data() {
    return {
      students: []
    }
  },
  mounted() {
    this.students = Mock.getStudents();
  },
  methods: {
    editStudent(student) {
      this.$router.push({ name: 'EditStudent', params: { id: student.id } });
    },
    deleteStudent(student) {
      this.$confirm(`确认删除学生 ${student.name} 吗？`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.students = this.students.filter(s => s.id !== student.id);
        this.$message.success('删除成功');
      }).catch(() => {
        this.$message.info('已取消删除');
      });
    }
  }
}
</script>
