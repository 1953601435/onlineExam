package com.onlinejudge.test002.service.impl;

import com.onlinejudge.test002.mapper.UserMapper;
import com.onlinejudge.test002.pojo.User;
import com.onlinejudge.test002.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserMapper userMapper;

    @Override
    public User login(String username, String password) {
        return userMapper.login(username, password);
    }

    @Override
    public boolean register(User user) {
        User existingUser = userMapper.findByUsername(user.getUsername());
        if (existingUser != null) {
            return false; // 用户名已存在
        }
        userMapper.register(user);
        return true;
    }

    @Override
    public List<User> getAllUsers() {
        return userMapper.getAllUsers();
    }

    @Override
    public User getUserById(Integer id) {
        return userMapper.getUserById(id);
    }

    @Override
    public void saveUser(User user) {
        if (user.getId() == null) {
            // 新增用户
            userMapper.register(user);
        } else {
            // 更新用户信息
            userMapper.updateUser(user);
        }
    }

    @Override
    public void deleteUser(Integer id) {
        userMapper.deleteUser(id);
    }
}