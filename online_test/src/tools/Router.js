import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '../components/login/Login.vue'
import Home from '../components/home/Home.vue'

import DataCom from '../components/financial/DataCom.vue'
import Store from '../tools/Storage'

import ExamResult from "@/components/exam/ExamResult.vue";
import ExamSelection from "@/components/exam/ExamSelection.vue";
import Exam from "@/components/exam/Exam.vue";
import AddQuestion from "@/components/question/AddQuestion.vue";
import Questions from "@/components/question/Questions.vue";
import StudentManagement from "@/components/student/StudentManagement.vue";
import EditQuestion from "@/components/question/EditQuestion.vue";

const Router = createRouter({
    history:createWebHashHistory(),
    routes:[
        {
            path:'/login',
            component:Login,
            name:"login"
        },
        {
            path:'/home',
            component:Home,
            name:"home",
            children:[

                {
                    path:'data',
                    component:DataCom,
                    name:'DataCom'
                },
                {
                    path: 'exam-selection',
                    component: ExamSelection,
                    name: 'ExamSelection'
                },
                {
                    path: 'exam',
                    component: Exam,
                    name: 'Exam'
                },
                {
                    path: 'exam-result',
                    component: ExamResult,
                    name: 'ExamResult'
                },
                {
                    path: 'student',
                    name: 'StudentManagement',
                    component: StudentManagement
                },
                {
                    path: 'questions/:type',
                    name: 'Questions',
                    component: Questions,
                    props: true
                },
                {
                    path: 'add-question/:type',
                    name: 'AddQuestion',
                    component: AddQuestion,
                    props: true
                },
                {
                    path: 'edit-question/:id',
                    name: 'EditQuestion',
                    component: EditQuestion,
                    props: true
                }
            ],
            redirect:'/home/student'
        }
    ]
})

Router.beforeEach((from) => {
    let isLogin = Store.getters.isLogin;
    if (isLogin || from.name === 'login') {
        return true;
    } else {
        return {name: 'login'}
    }
    
})

export default Router;