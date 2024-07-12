package com.onlinejudge.test002.pojo;

import lombok.Data;

@Data
public class User {

    private String username;
    private String password;
    private Integer id;
    private Long sid;
    private String email;
    private String phone;
    private String role;

}