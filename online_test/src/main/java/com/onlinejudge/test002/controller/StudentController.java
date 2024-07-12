package com.onlinejudge.test002.controller;

import com.onlinejudge.test002.pojo.Student;
import com.onlinejudge.test002.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/student")
@CrossOrigin(origins = "*") // 允许所有域名的跨域请求
public class StudentController {

    @Autowired
    private StudentService studentService;

    @PostMapping("/login")
    public String login(@RequestParam String username, @RequestParam String password) {
        System.out.println("Received username: " + username);
        System.out.println("Received password: " + password);

        Student student = studentService.findByUsername(username);
        if (student != null) {
            System.out.println("Found student with username: " + username);
            if (student.getPassword().equals(password)) {
                System.out.println("Login successful for user: " + username); // 控制台输出登录成功消息
                return "Login successful";
            } else {
                System.out.println("Incorrect password for user: " + username);
                return "Invalid username or password";
            }
        } else {
            System.out.println("No student found with username: " + username);
            return "Invalid username or password";
        }
    }
    @PostMapping("/register")
    public String register(@RequestBody Student student) {
        Student existingStudent = studentService.findByUsername(student.getUsername());
        if (existingStudent != null) {
            return "Username already exists";
        }

        studentService.save(student);
        return "Registration successful";
    }

}
