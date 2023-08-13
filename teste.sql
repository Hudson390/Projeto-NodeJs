create table usuarios(
    nome varchar(50),
    email varchar(100),
    idade int
);

insert into usuarios(nome, email, idade) values(
    "Hudson Costa",
    "Hudson@gmail.com",
    22
);

insert into usuarios(nome, email, idade) values(
    "Maria Luiza",
    "Maria@gmail.com",
    40
);

delete from usuarios where nome = "Maria Luiza";

update usuarios set nome = "Carlos Braga" where nome = "Carlos Eduardo";