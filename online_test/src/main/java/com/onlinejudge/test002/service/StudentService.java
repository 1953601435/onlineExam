package com.onlinejudge.test002.service;

import com.onlinejudge.test002.pojo.Student;
import org.springframework.stereotype.Service;

@Service
public interface StudentService {
    Student findByUsername(String username);
    void save(Student student);

}
