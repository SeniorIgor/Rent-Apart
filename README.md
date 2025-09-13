# Rent-Apart

A web application prototype for browsing and renting apartments, built with **Angular 4** on the frontend and a lightweight **Express/JSON-Server** backend. The project demonstrates routing, forms, authentication middleware, and mock API integration.

![main-page](https://github.com/SeniorIgor/Rent-Apart/blob/master/main-page-for-readme.png)

---

## Features

- Apartment catalog with listings and filtering
- User registration and login (with JWT mock authentication)
- Routing with Angular Router (multiple pages, guarded routes)
- Form handling and validation (Angular Forms)
- Mock backend using **json-server** with custom authentication middleware
- Responsive UI with **Bootstrap** and **Font Awesome**

---

## Tech Stack

**Frontend (Angular 4)**

- Angular Core, Forms, Router, HTTP
- RxJS for reactive programming
- Bootstrap 4 (alpha) + Font Awesome for styling
- Zone.js and Core-js for browser compatibility

**Backend / Mock API**

- Express.js + json-server
- JWT-based auth via custom middleware (`authMiddleware.js`)
- CORS and body-parser for request handling

---

## Project Structure

```
src/                # Angular app (components, services, routes)
data.js             # Mock data for json-server
authMiddleware.js   # JWT auth simulation for json-server
```

---

## Setup

```bash
# install dependencies
npm install

# start Angular frontend
npm start   # runs on :4200

# start mock backend (json-server with auth)
npm run json   # runs on :3500
```

Frontend requests are proxied to the backend during development.

---

## Example API (Mock Backend)

- `GET /advertisements` → returns apartment advertisements
- `POST /filters` → apply filters to listings

---

## Learning Outcomes

- Practiced building a **single-page application** with Angular (routing, forms, services).
- Implemented a **mock backend** with Express and json-server to simulate real APIs.
- Gained experience with **JWT authentication flow** and middleware integration.
- Improved skills in **responsive UI design** with Bootstrap and Font Awesome.
- Learned how to prototype real-world applications with mock APIs, a step toward implementing a full database-backed system.

---

## License

MIT
