create table questions
(
    id             int auto_increment
        primary key,
    category       varchar(255) not null,
    question       text         not null,
    type           varchar(50)  not null,
    options        text         not null,
    correct_answer varchar(255) null
);