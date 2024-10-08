package com.onlinejudge.test002.controller;

import com.onlinejudge.test002.pojo.Question;
import com.onlinejudge.test002.service.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
/**
 * gyh添加 2024/7/11
 */
@RestController
@RequestMapping("/api/question")
public class QuestionController {

    @Autowired
    private QuestionService questionService;

    @GetMapping("/list")
    public List<Question> getAllQuestions() {
        return questionService.getAllQuestions();
    }

    @PostMapping("/add")
    public ResponseEntity<?> addQuestion(@RequestBody Map<String, Object> questionData) {
        try {
            String category = (String) questionData.get("category");
            String question = (String) questionData.get("question");
            String type = (String) questionData.get("type");
            String options = (String) questionData.get("options");
            String correctAnswer = (String) questionData.get("correctAnswer");

            Question newQuestion = new Question();
            newQuestion.setCategory(category);
            newQuestion.setQuestion(question);
            newQuestion.setType(type);
            newQuestion.setOptions(options);
            newQuestion.setCorrectAnswer(correctAnswer);

            questionService.addQuestion(newQuestion);
            return ResponseEntity.ok("提交成功");
        } catch (Exception e) {
            e.printStackTrace(); // 打印错误堆栈信息，便于调试
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("提交失败");
        }
    }

    @PutMapping("/update")
    public void updateQuestion(@RequestBody Question question) {
        questionService.updateQuestion(question);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteQuestion(@PathVariable Integer id) {
        questionService.deleteQuestion(id);
    }

    @GetMapping("/{id}")
    public Question getQuestionById(@PathVariable Integer id) {
        return questionService.getQuestionById(id);
    }
}
