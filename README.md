# EXITUS - SISTEMA DE EGRESSOS - FTC

## SOBRE O PROJETO

Projeto idealizado em ambiente acadêmico pelos alunos da Faculdade de Tecnologia e Ciências (FTC) - Itabuna-BA, 
viabilizando a proposta de gerir informações acadêmicas e profissionais dos alunos egressos da mesma instituição, por meio de pesquisas feitas com questionários.


## DEPENDÊNCIAS

* [Node.js 12.13.0 LTS](https://github.com/codigofrito/exitus#instalar-nodejs)
* [Servidor MariaDB 10.4.8](https://github.com/codigofrito/exitus#instalar-mariadb)


## PREPARANDO O AMBIENTE

### INSTALAR NODE.JS

Estamos usando a plataforma Node.js disponível em [nodejs.org](https://nodejs.org/)

E usando **npm** (indispensável para os scripts) ou  **[yarn](https://yarnpkg.com/lang/)** como Package Manager 


### INSTALAR MariaDB

Para o banco de dados, estamos utilizando o servidor sql MariaDB.

Para evitar possíveis incompatibilidades, recomendamos a versão **10.4.8** disponível em [mariadb.org](https://downloads.mariadb.org/mariadb/10.4.8/) na porta padrão 3306

## INSTALANDO O PROJETO

### Baixar o repositorio
* Para fins de **testes**, recomendamos **apenas** clonar o repositório para sua máquina.
* Para contribuir, recomendamos primeiro criar um _fork_ para seu repositório e depois clonar do mesmo para a sua máquina, 
assim você terá liberdade para editar o quanto quiser no seu repositório e enviar somente as alterações realmente pertinentes ao repositório oficial.


### Instalar o projeto
Com o projeto em sua máquina, apenas execute o comando na raiz do projeto.

```"npm run installAll"``` ou ```"yarn installAll"```

Esse comando irá baixar as dependências necessárias para os dois projetos internos: "backEnd" e "frontEnd", 
os quais iremos trabalhar de forma seguimentada.


## TRABALHANDO NOS SUB-PROJETO

Cada sub-projeto possui dependências distintas e devem ser abertos e editados de forma separada.

### backEnd

O sub-projeto "backEnd" irá somente servir como uma API para frontEnd, processando os dados e devolvendo em .json. 

### frontEnd

Enquanto o frontEnd, usando ReactDOM, irá renderizar as páginas Web do projeto.
