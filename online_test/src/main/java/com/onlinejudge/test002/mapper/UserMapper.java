package com.onlinejudge.test002.mapper;

import com.onlinejudge.test002.pojo.User;
import org.apache.ibatis.annotations.*;

import java.util.List;


@Mapper
public interface UserMapper {

    @Select("SELECT * FROM user WHERE username = #{username}")
    User findByUsername(@Param("username") String username);

    @Insert("INSERT INTO user (sid, username, password, email, phone, role) " +
            "VALUES (#{sid}, #{username}, #{password}, #{email}, #{phone}, #{role})")
    void register(User user);

    @Select("SELECT * FROM user WHERE username = #{username} AND password = #{password}")
    User login(@Param("username") String username, @Param("password") String password);

    @Select("SELECT * FROM user")
    List<User> getAllUsers();

    @Select("SELECT * FROM user WHERE id = #{id}")
    User getUserById(@Param("id") Integer id);

    @Update("UPDATE user SET sid = #{sid}, username = #{username}, password = #{password}, " +
            "email = #{email}, phone = #{phone}, role = #{role} WHERE id = #{id}")
    void updateUser(User user);

    @Delete("DELETE FROM user WHERE id = #{id}")
    void deleteUser(@Param("id") Integer id);


}