package com.onlinejudge.test002.mapper;

import com.onlinejudge.test002.pojo.Student;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

@Mapper
public interface StudentMapper {

    @Select("SELECT * FROM student WHERE username = #{username}")
    Student findByUsername(String username);
    @Insert("INSERT INTO student (username, password) VALUES (#{username}, #{password})")
    void save(Student student);

}
