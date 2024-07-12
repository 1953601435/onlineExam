package com.onlinejudge.test002.service.impl;

import com.onlinejudge.test002.mapper.StudentMapper;
import com.onlinejudge.test002.pojo.Student;
import com.onlinejudge.test002.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class StudentServiceImpl implements StudentService {
    @Autowired
    private StudentMapper studentMapper;

    @Override
    public Student findByUsername(String username) {
        return studentMapper.findByUsername(username);
    }
    @Override
    public void save(Student student) {
        studentMapper.save(student);
    }

}
