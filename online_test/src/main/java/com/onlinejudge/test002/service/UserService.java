package com.onlinejudge.test002.service;

import com.onlinejudge.test002.pojo.User;

import java.util.List;

public interface UserService {
    boolean register(User user);
    User login(String username, String password);
    List<User> getAllUsers();
    User getUserById(Integer id);
    void saveUser(User user);
    void deleteUser(Integer id);
}