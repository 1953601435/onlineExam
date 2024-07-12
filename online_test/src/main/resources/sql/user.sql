create table user
(
    id         int auto_increment
        primary key,
    sid        varchar(20)                         not null,
    username   varchar(50)                         not null,
    password   varchar(100)                        not null,
    email      varchar(100)                        not null,
    phone      varchar(20)                         not null,
    role       varchar(20)                         not null,
    created_at timestamp default CURRENT_TIMESTAMP null,
    updated_at timestamp default CURRENT_TIMESTAMP null on update CURRENT_TIMESTAMP,
    constraint email
        unique (email),
    constraint phone
        unique (phone),
    constraint sid
        unique (sid),
    constraint username
        unique (username)
);
