# Melicidade front test

> Challenge to create a simple frontend, show almost same screen with Mercado Livre page, on input in header, you can type some product and will search in API and show on the screen, you can click each one to see the details and description.

## Developing

First, you need to install [**docker**](#Docker) and [**docker-compose**](https://docs.docker.com/compose/install) for **server** or you can run with [**node**](#Node) or [**yarn**](#Node) to start server

_Clone the repository_

```
git clone https://github.com/fuchien/meli.git
```

## Docker

_Run docker-compose to start the server_

```
docker-compose up
```

---

## Node

_Install dependencies_

```
npm install or yarn
```

_Start server_

```
npm run start:dev or yarn start:dev
```

---

### For both, the _PORT_ is _3001_\*\*

_Open your favourite browser, and test_

```
http://localhost:3001
```

---

## CI/CD Pipeline

_Technologies_

```
Circle CI
Heroku
```

_You can see the pipeline config on **.circleci/config.yml** file_

_The jobs are only **build** - **deploy to development**_. The demo link --> [melicidade-dev.herokuapp.com/home](https://melicidade-dev.herokuapp.com/home)

For this moment, only can run **cypress e2e test** locally

---

## Description and solution

The frontend application will receive input text or search query, so request to backend API and show all of items.

_Technologies_

```
React to component
Styled-components to styling easier
Context-api to manipulate simple store
Next.js to perform SEO
Cypress to e2e test
```

---

## Testing

To test the application, only need to run script

```
yarn cypress:open
```

You will have each test on browser _Chrome_ for each file.

---

## Endpoint list:

-   [**GET** /home](#HomePage)
-   [**GET** /items/?search=](#ItemsPage)
-   [**GET** /items/:id](#DetailsPage)

## HomePage

Show the home page and welcome message.

## ItemsPage

Return on list with max 4 Products searched by query

## DetailsPage

Return product clicked details and description

---

# Todo list

-   Using all data in context store, unit test with enzyme.
-   Mocking API request for Next.js.
-   Add test jobs in pipeline.
