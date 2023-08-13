const Sequelize = require('sequelize');
const sequelize = new Sequelize('test', 'root', '*Hud20son#', {
    host: "localhost",
    dialect: 'mysql'
})

const Postagem = sequelize.define('postagens', {
        titulo: {
            type: Sequelize.STRING
        },
        conteudo: {
            type: Sequelize.TEXT
        }
})

const Usuario = sequelize.define('usuarios', {
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }
})



/*Postagem.create({
    titulo: "Teste",
    conteudo: "Seja bem vindo ao tste do mysql"
})*/


Usuario.create({
    nome: "Hudson",
    sobrenome: "Costa",
    idade: 22,
    email: "Hudson@gmail.com"
})



"Usuario.sync({force: true})"

"Postagem.sync({force: true})"


/*sequelize.authenticate().then(function(){
    console.log("Conectado com sucesso!");
}).catch(function(erro){
    console.log("Falha ao se conectar: " + erro);
})*/