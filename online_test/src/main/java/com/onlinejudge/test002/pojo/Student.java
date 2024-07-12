package com.onlinejudge.test002.pojo;

import lombok.Data;

@Data

public class Student {

    private String name;
    private int age;
    private String username;
    private String password;



    @Override
    public String toString() {
        return "User{" +
                "name='" + name + '\'' +
                ", age=" + age +
                '}';
    }


}
