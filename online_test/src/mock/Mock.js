import mockjs from "mockjs";
const Mock = {
    // 模拟获取订单数据
    // type: 订单类型 0为普通订单 1为秒杀订单
    getOrder(type) {
        let array = [];
        for (let i = 0; i < mockjs.Random.integer(5,10); i ++) {
            array.push(mockjs.mock({
                'name':type == 0 ? '普通商品 ' : "秒杀商品" + i,
                'price':mockjs.Random.integer(20,500) + '元',
                'buyer':mockjs.Random.cname(),
                'time':mockjs.Random.datetime('yyyy-MM-dd A HH:mm:ss'),
                'role':mockjs.Random.boolean(),
                'state':mockjs.Random.boolean(),
                'payType':mockjs.Random.boolean(),
                'source':mockjs.Random.url(),
                'phone':mockjs.mock(/\d{11}/)
            }))
        }
        return array;
    },
    getManagerOrder() {
        let array = [];
        for (let i = 0; i < mockjs.Random.integer(5,10); i ++) {
            array.push(mockjs.mock({
                'state':'店长订单',
                'name':mockjs.Random.csentence(),
                'id':mockjs.Random.string(11),
                'manager':mockjs.Random.cname(),
                'count':mockjs.Random.integer(20,500),
                'price':mockjs.Random.integer(20000,50000000) + '元',
                'coin':mockjs.Random.integer(2000,50000) + '元',
                'payTime':mockjs.Random.datetime('yyyy-MM-dd A HH:mm:ss'),
                'sendTime':mockjs.Random.datetime('yyyy-MM-dd A HH:mm:ss')
            }))
        }
        return array;
    },
    // 模拟获取商品数据
    // type: 商品类型 1为普通订单 2为秒杀订单 3为今日推荐
    getGoods(type) {
        let array = [];
        for (let i = 0; i < mockjs.Random.integer(5,10); i ++) {
            array.push(mockjs.mock({
                'name':(type == 0 ? '普通商品 ' : type == 1 ? "秒杀商品":"今日推荐") + i,
                'img':mockjs.Random.dataImage('60x100', '商品示例图'),
                'price':mockjs.Random.integer(20,500) + '元',
                'sellCount':mockjs.Random.integer(10,100),
                'count':mockjs.Random.integer(10,100),
                'back':mockjs.Random.integer(10,100),
                'backPrice':mockjs.Random.integer(0,5000) + '元',
                'owner':mockjs.Random.cname(),
                'time':mockjs.Random.datetime('yyyy-MM-dd A HH:mm:ss'),
                'state':mockjs.Random.boolean()
            }))
        }
        return array;
    },
    getManagerList() {
        let array = [];
        for (let i = 0; i < mockjs.Random.integer(5,10); i ++) {
            array.push(mockjs.mock({
                'people':mockjs.Random.csentence(),
                'weixin':mockjs.Random.string(7, 10),
                'state':mockjs.Random.boolean(),
                'income':mockjs.Random.integer(0,500000) + '元',
                'back':mockjs.Random.integer(0,1000) + '元',
                'backPrice':mockjs.Random.integer(0,5000) + '元',
                'source':'站内',
                'customer':mockjs.Random.integer(0,50),
                'time':mockjs.Random.datetime('yyyy-MM-dd A HH:mm:ss'),
            }))
        }
        return array;
    },
    getManagerReqList() {
        let array = [];
        for (let i = 0; i < mockjs.Random.integer(5,10); i ++) {
            array.push(mockjs.mock({
                'people':mockjs.Random.csentence(),
                'state':mockjs.Random.boolean(),
                'reqTime':mockjs.Random.datetime('yyyy-MM-dd A HH:mm:ss'),
                'time':mockjs.Random.datetime('yyyy-MM-dd A HH:mm:ss'),
            }))
        }
        return array;
    },
    getTradeInfo() {
        let array = [];
        for (let i = 0; i < mockjs.Random.integer(5,10); i ++) {
            array.push(mockjs.mock({
                'name':mockjs.Random.csentence(),
                'id':mockjs.Random.string(11),
                'user':mockjs.Random.cname(),
                'payType':mockjs.Random.boolean() ? '网络支付' : '线下支付',
                'time':mockjs.Random.datetime('yyyy-MM-dd A HH:mm:ss'),
            }))
        }
        return array;
    },
    getTradeList() {
        let array = [];
        for (let i = 0; i < mockjs.Random.integer(5,10); i ++) {
            array.push(mockjs.mock({
                'info':mockjs.Random.csentence(),
                'income':mockjs.Random.integer(0,5000) + '元',
                'expend':mockjs.Random.integer(0,5000) + '元',
                'time':mockjs.Random.datetime('yyyy-MM-dd A HH:mm:ss'),
            }))
        }
        return array;
    },
    getChartsData() {
        let array = [];
        for (let i = 0; i < 6; i ++) {
            array.push(mockjs.Random.integer(0,100))
        }
        return array;
    },
    getTradeData() {
        return mockjs.mock({
            'allTra':mockjs.Random.integer(10000,50000),
            'speTra':mockjs.Random.integer(0,5000),
            'norTra':mockjs.Random.integer(0,5000),
            'userCount':mockjs.Random.integer(0,1000),
            'managerCount':mockjs.Random.integer(0,100),
            'time':mockjs.Random.datetime('yyyy-MM-dd A HH:mm:ss'),
        })
    },
    getQuestions(type) {
        // Replace with actual API call to fetch questions
        const questions = [
            { id: 1, category: '软工', type: '单选题', stem: '这是一个单选题的题干', options: { A: '选项A', B: '选项B', C: '选项C', D: '选项D' }, correctAnswer: 'A' },
            { id: 2, category: '数媒', type: '多选题', stem: '这是一个多选题的题干', options: { A: '选项A', B: '选项B', C: '选项C', D: '选项D' }, correctAnswer: 'A,B' },
            { id: 3, category: '通信', type: '判断题', stem: '这是一个判断题的题干', options: { T: '正确', F: '错误' }, correctAnswer: 'T' }
        ];
        if (type === '0') {
            return questions;
        } else if (type === '1') {
            return questions.filter(q => q.category === '软工');
        } else if (type === '2') {
            return questions.filter(q => q.category === '数媒');
        } else {
            return questions.filter(q => q.category === '通信');
        }
    },
    getRandomQuestions(subjects, count) {
        // Simulate getting random questions based on subjects and count
        const questions = [];
        for (let i = 0; i < count; i++) {
            const randomIndex = Math.floor(Math.random() * 3); // 0 to 2
            questions.push({
                id: i + 1,
                category: subjects.split(',')[randomIndex],
                type: '单选题', // Simplified for demo
                stem: `随机生成的题目 ${i + 1}`,
                options: { A: '选项A', B: '选项B', C: '选项C', D: '选项D' },
                correctAnswer: 'A'
            });
        }
        return questions;
    },
    getStudents() {
        // Replace with actual API call to fetch students
        return [
            { id: 1, studentId: '1001', name: '张三', email: 'zhangsan@example.com', phone: '13812345678' },
            { id: 2, studentId: '1002', name: '李四', email: 'lisi@example.com', phone: '13987654321' },
            { id: 3, studentId: '1003', name: '王五', email: 'wangwu@example.com', phone: '13611112222' }
        ];
    },
    getStudentList() {
        // 模拟数据
        return [
            {
                id: 1,
                studentId: '2021001',
                name: '张三',
                email: 'zhangsan@example.com',
                phone: '12345678901',
                password: 'password123'
            },
            {
                id: 2,
                studentId: '2021002',
                name: '李四',
                email: 'lisi@example.com',
                phone: '12345678902',
                password: 'password456'
            }
        ];
    },
    getExamQuestions(majors) {
        const allQuestions = [
            {
                id: 1,
                stem: '软工题目1',
                type: '单选',
                options: [
                    { value: 'A', text: '选项A' },
                    { value: 'B', text: '选项B' },
                    { value: 'C', text: '选项C' },
                    { value: 'D', text: '选项D' }
                ],
                answer: 'A'
            },
            {
                id: 2,
                stem: '软工题目2',
                type: '单选',
                options: [
                    { value: 'A', text: '选项A' },
                    { value: 'B', text: '选项B' },
                    { value: 'C', text: '选项C' },
                    { value: 'D', text: '选项D' }
                ],
                answer: 'B'
            },
            // 添加更多题目
        ];

        // 根据专业方向筛选题目
        const selectedQuestions = allQuestions.filter(q => majors.includes(q.category)).slice(0, 20);
        return selectedQuestions;
    },
    evaluateExam(answers) {
        const correctAnswers = {
            1: 'A',
            2: 'B',
            // 添加更多正确答案
        };

        let score = 0;
        let totalQuestions = 0;

        for (let id in answers) {
            totalQuestions++;
            if (answers[id] === correctAnswers[id]) {
                score++;
            }
        }

        const accuracy = (score / totalQuestions) * 100;
        return {
            score: score * 5,  // 假设每题5分
            accuracy: accuracy
        };
    }

}
export default Mock;