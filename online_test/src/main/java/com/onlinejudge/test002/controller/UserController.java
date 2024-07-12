package com.onlinejudge.test002.controller;

import com.onlinejudge.test002.pojo.User;
import com.onlinejudge.test002.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody User user) {
        User loggedInUser = userService.login(user.getUsername(), user.getPassword());
        if (loggedInUser != null) {
            return ResponseEntity.ok(loggedInUser);
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("用户名或密码错误");
        }
    }
    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody User user) {
        boolean success = userService.register(user);
        if (success) {
            return ResponseEntity.ok("注册成功");
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("用户名已存在");
        }
    }
    @GetMapping
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    @GetMapping("/{id}")
    public User getUserById(@PathVariable Integer id) {
        return userService.getUserById(id);
    }

    @PostMapping("/save")
    public ResponseEntity<?> saveUser(@RequestBody User user) {
        userService.saveUser(user);
        return ResponseEntity.ok("保存成功");
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteUser(@PathVariable Integer id) {
        userService.deleteUser(id);
        return ResponseEntity.ok("删除成功");
    }
}