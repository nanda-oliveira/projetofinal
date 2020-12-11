# EducaMais
## 🚀 Descrição
API desenvolvida como Projeto Final para a conclusão do curso de Backend [{Reprograma}](https://reprograma.com.br/).

Para visualizar a descrição completa do projeto, siga [API - HOGAR](/assets/apihogarCamila.pdf)

   >Os grupos de refugiados são compelidos a sair de seu país de origem devido a existência de conflitos, miséria e circunstâncias que ferem gravemente a ordem pública. Trata-se de um processo doloroso e forçado, e por isso procuram refúgio em outro país. Entendemos que ainda há carência de políticas públicas para acolher os refugiados ou solicitantes de refúgio, pois muitos vivem em situação de vulnerabilidade.Além disso, é comum não conseguirem crédito em bancos ou mesmo acesso a educação.
   >
   >Pensando nisso, acredito que o primeiro passo para oferecer o suporte necessário às pessoas nessa condição é realizar um mapeamento de seu perfil e de suas necessidades. Em um segundo momento, objetivamos auxiliar no desenvolvimento de uma rede de apoio entre os próprios refugiados, sociedade civil, e conectar pessoas às instituições que oferecem suporte adequado (ONGs, bancos que ofereçam crédito ou serviços, empresas e instituições públicas que ainda permanecem descentralizadas), buscando integrar esses elementos às políticas públicas.


# Sumário
=================
<!--ts-->
   * [Objetivos](#Objetivos)
   * [Aprendizados](#aprendizados)
   * [Arquitetura Model View Controller](#Arquitetura)
   * [Instalação](#instalacao)
      * [Pre Requisitos](#pre-requisitos)
      * [Rodando o Back End](#Rodando-BackEnd)
      * [Tecnologias](#tecnologias)
      * [Features](#features)
      * [Rotas](#Rotas)
   * [Modelo com campos obrigatórios para teste: Postman ou Insomnia](#modelo_teste)
   * [Agradecimentos](#Agradecimentos)
<!--te-->

## ✅ Objetivos
- Mapeamento do perfil e necessidades dos refugiados através de cadastros na API;
- Desenvolvimento de uma rede de apoio mútuo entre refugiados, sociedade civil, ONGs, empresas através de cadastros;
- Auxiliar no fomento de políticas públicas a partir dos dados obtidos;

## ✅ Aprendizados

Para a execução do projeto final, desenvolvemos uma API fundamentada no modelo que utiliza quatro operações básicas, que são:  CREATE (CRIAR), READ(LER-CONSULTA), UPDATE(ATUALIZAR) e DELETE(DESTRUIÇÃO). Dessa forma podemos trabalhar com as informações dispostas em um banco de dados NoSQL. Para acessar e tratar as operações, o código foi organizado em uma Arquitetura embasada no sistema Model View Controller (MVC).

## ✅ Arquitetura

        Arquitetura MVC
        |
        \--📂 HOGARAPIFINAL
            |   README.md  
            |   .env
            |   .gitignore
            |   package-lock.json
            |   package.json
            |   **server.js**
            \--📂 node_modules
            \--📂 assets
            \--📂src
                |
                |   **app.js**
                |
                📂---configs
                |   **dbconnect.js
                |
                📂---controller
                |       **blogController.js
                |       institutoController.js
                |       solicitanteController.js
                |       voluntarioController.js**
                |
                📂---model
                |       **blogSchema.js
                |       institutoSchema.js
                |       solicitanteSchema.js
                |       voluntarioSchema.js**
                |       
                |
                📂---routes
                |       **blogRoutes.js
                |       institutoRoutes.js
                |       solicitanteRoutes.js
                |       voluntarioRoutes.js**
                |__      teste.js**


Clique para visualizar o desenho da [Arquitetura](/assets/apihogararquitetura.png)


## ✅ Instalação
* Para realizar download do projeto, siga as instruções:

### 🎲 Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/) e o database NoSQL [Mongodb](https://www.mongodb.com/)
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

### 🎲 Rodando o Back End (server)

```bash
# Com o git
# Clone este repositório
$ git clone <https://github.com/camilapessoa/hogarapifinal.git>

# Acesse a pasta do projeto no terminal/cmd
$ cd hogarapifinal

# Instale as dependências
$ npm install
$ npm instal mongoose

# Execute o servidor
$ npm start

# O servidor inciará na porta:33 - acesse <http://localhost:33>
# Mongo conectado em mongodb://localhost:27017/apihogar
```
* Modifique `.env` para receber as variáveis de ambiente e substitua para que seu servidor funcione adequadamente

* Utilize o [Postman](https://www.postman.com/) ou [Insomnia](https://insomnia.rest/download/) para para chamar e testar a API

## 🛠 Tecnologias

Para a consturição do projeto, as seguintes tecnologiasforam utilizadas:

- [JavaScript](https://www.javascript.com/)
- [Git/Github](https://github.com/)
- [Node.js](https://nodejs.org/en/)
- [MongoDb](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [Nodemon](https://nodemon.io/)
- [Express](https://expressjs.com/pt-br/)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [cors](https://www.npmjs.com/package/cors)
- [heroku](https://dashboard.heroku.com/apps)

### 🎲 Features

Funcionalidades da aplicação

- [x] Cadastros - POST
- [x] Postagem no blog - POST
- [x] Apagar - DELETE
- [x] Busca - GET
- [x] Busca por ID - GET
- [x] Update em todos os campos - PUT
- [x] Update em campo específico - PATCH


### 🎲 Rotas

local: http://localhost:33

MongoDB: [mongodb://localhost:27017/apihogar]()

Heroku: https://api-hogar.herokuapp.com/



- [x] "/" Retorna teste com apresentação { mensagem: O app está rodando em http://localhost:33 }

Retorna todos os dados do banco de dados
- [x] "/solicitantes/" 
- [x]"/instituto/" 
- [x]"/blog/ "
- [x]"/voluntario/"

Cria novo cadastro ou postagem e retorna mensagem amigável
- [x] "/**/criar" 


Retorna cadastro por nome específico
- [x] "**/nome/[NOME]" 


Deleta cadastro ou postagem por id específico e retorna mensagem amigável
- [x] "/**/del/[ID]" 
- [x] "/blog/deletar/[ID]" 


Atualiza somente o campo escolhido do cadastro ou postagem por id específico e retorna mensagem amigável
- [x] "/**/campo/[ID]" 


Atualiza somente o campo "celular" e "endereçoatual" do cadastro do solicitante por id específico e retorna mensagem amigável
- [x] "/solicitantes/campo/[ID]" 


Atualiza completamente cadastro e retorna mensagem amigável (id não pode ser modificado)
- [x] "/**/atualizar/[ID]"
