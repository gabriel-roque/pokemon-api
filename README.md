<span id="top"></span>

<p align="center">
  <img src="https://github.com/gabriel-roque/design/blob/master/mewtwo.gif?raw=true" width="120">
  <img src="https://raw.githubusercontent.com/gabriel-roque/design/master/pokemon-battle-api-logo.png" width="300">
  <img src="https://raw.githubusercontent.com/gabriel-roque/design/master/pikachu_run.gif" width="100">
</p>

<p align="center">
   <a href="https://nodejs.org/en/"><img src="https://img.shields.io/badge/Node-12.x-green"></a>
   <a href="https://expressjs.com/"><img src="https://img.shields.io/badge/Express-4.x-blue"></a>
   <a href="https://sequelize.org/"><img src="https://img.shields.io/badge/Sequelize-5.x-purple"></a>
   <a href="https://www.npmjs.com/"><img src="https://img.shields.io/badge/NPM-6.x-red"></a>
   <a href="https://www.conventionalcommits.org/en/v1.0.0/"><img src="https://img.shields.io/badge/Commitizen-friendly-green"></a>
</p>

<p align="center">
   <a href="https://pokemon-api-challanger.herokuapp.com/v1/api/"><img src="https://raw.githubusercontent.com/gabriel-roque/design/master/btn-open-api.png" width="200"></a>
</p>

# ⚓ Summary

- [Resource Pokemons](#-resource-pokemons)
- [Resource Battle](#%EF%B8%8F-resource-battle)

## 💡 Introduction

🐅 A simple API REST pokemon battle.

## 📝 Minimal Requirements

- NodeJs 12.x

## 🚀 Install

```sh
$ git clone https://github.com/gabriel-roque/pokemon-api
```

## 📝 Configure API

```sh
$ cp .env.example .env
```
### 1. Configure your .env

```env
APP_URL=
DB_DIALECT=
DB_HOST=
DB_USERNAME=
DB_PASSWORD=
DB_NAME=
DB_NAME_SCHEMA=
```

### 2. Run migrations in database

```sh
$ sequelize db:migrate
```

### 3. Run your app
```sh
$ npm run dev
or
$ npm start
```

> Check in **development** at http://localhost:3333/v1/api/

> Check in **production** at https://pokemon-api-challanger.herokuapp.com/v1/api

### 🐣 Resource Pokemons

✅ **GET** `/v1/api/pokemons`

↩ **Response** `HTTP Code 200 - OK`

```json
[
  {
    "id": 1,
    "tipo": "pikachu",
    "treinador": "Gabriel",
    "nivel": 12
  }, {
    "id": 2,
    "tipo": "charizard",
    "treinador": "Anderson",
    "nivel": 11
  }
]
```
[🔝 back to top](#top)

<br>

✅ **POST** `/v1/api/pokemons`

➡ **Request**

| Attribute | Type     |
| --------- | -------- |
| tipo      | `String [mewtwo / charizard / pikachu]` |
| treinador | `String` |

```json
{
 "tipo": "pikachu",
 "treinador": "Gabriel",
}
```

↩ **Response** `HTTP Code 200 - OK`

```json
{
  "id": 1,
  "tipo": "pikachu",
  "treinador": "Gabriel",
  "nivel": 12
},
```
[🔝 back to top](#top)

<br>

✅ **PUT** `/v1/api/pokemons/:id`

➡ **Request**

| Attribute | Type     |
| --------- | -------- |
| treinador | `String` |

```json
{
  "treinador": "Anderson",
}
```

↩ **Response** `HTTP Code 204 - No Content`

[🔝 back to top](#top)

<br>

✅ **DELETE** `/v1/api/pokemons/:id`

↩ **Response** `HTTP Code 204 - No Content`

[🔝 back to top](#top)

<br>

### ⚔️ Resource Battle

✅ **POST** `/v1/api/batalhar/:pokemonAId/:pokemonBId`

↩ **Response** `HTTP Code 200 - OK`

```json
{
  "vencedor": {
    "id": 1,
    "tipo": "pikachu",
    "treinador": "Anderson",
    "nivel": 2
  },
  "perdedor": {
    "id": 2,
    "tipo": "charizard",
    "treinador": "Gabriel",
    "nivel": 0
  }
}
```

[🔝 back to top](#top)

<br>

## 👤 Author

<p align="center">
  <a href="https://www.linkedin.com/in/gabriel-roque/">
    <img src="https://github.com/gabriel-roque/design/blob/master/banner-contato-left.png?raw=true" width="400">
  </a>
  <a href="https://github.com/gabriel-roque">
    <img src="https://github.com/gabriel-roque/design/blob/master/banner-contato-right.png?raw=true" width="343">
  </a>
</p>

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/gabriel-roque/pokemon-api/issues).

## Show your support

Give a ⭐️ if this project helped you!

[🔝 back to top](#top)

<p align="center">
  <img src="https://raw.githubusercontent.com/gabriel-roque/design/master/logo-gabriel-roque.png" width="200"/>
</p>
