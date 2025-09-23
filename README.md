# Rent‑Apart

A small **single‑page web app** for browsing and “renting” apartments. The project demonstrates **Angular (v4)** fundamentals (modules, routing, forms, services, guards) and a **mock REST API** built with **Express + json‑server** to simulate a full‑stack workflow.

![main-page](/screenshots/main-page.webp)

---

## Overview

Rent‑Apart lets users browse apartment listings, filter/search by criteria, and view details. It’s designed as a compact practice project to exercise SPA patterns, client–server integration, and basic UX with responsive styling.

---

## Features

- Apartment catalog with listings and filtering
- Viewing details for a specific apartment
- Routing with Angular Router
- Form handling and validation (Angular Forms)
- Mock backend using **json-server**
- Responsive UI with **Bootstrap** and **Font Awesome**

---

## Tech Stack

- **Front-end:** Angular (v4), Angular Router, Angular Forms, RxJS
- **Styling/UI:** Bootstrap 4, Font Awesome
- **Backend (mock):** json-server
- **Tooling:** TypeScript, Angular CLI, TSLint

---

## Project structure

```
root/
├─ src/                      # Angular app (components, services, routes, guards)
├─ data.js                   # Seed data: users, apartment listings, etc.
├─ .angular-cli.json         # Angular CLI v1 config
├─ tsconfig.json             # TypeScript configuration
├─ tslint.json               # Lint rules
└─ package.json              # Dependencies + npm scripts
```

---

## Getting started

### Prerequisites

This project was created with **Angular CLI 1.x** and **Angular 4**. For best results, use Node **12.x** and npm **6+**.

```bash
# Optional: align Node with nvm
nvm install 12
nvm use 12
```

### Install & run

```bash
# 1) Install dependencies
npm install

# 2) Start Angular dev server (http://localhost:4200)
npm start

# 3) Start the mock API (http://localhost:3500)
npm run json
```

---

## Scripts

| Script          | Description                                                |
| --------------- | ---------------------------------------------------------- |
| `npm start`     | Runs Angular dev server on **:4200**                       |
| `npm run json`  | Starts mock backend (json‑server via Express) on **:3500** |
| `npm run build` | Production build to `dist/`                                |
| `npm run lint`  | Lint with TSLint                                           |

---

## API Endpoints

| Method                | Path | Description                                    |
| --------------------- | ---- | ---------------------------------------------- |
| `GET /advertisements` | —    | Returns list of apartment listings             |
| `POST /filters`       | —    | Accepts filter criteria, returns filtered list |

The seed data for users & listings is stored in `data.js`.

---

## Engineering notes

- **Data flow**: services encapsulate HTTP; components subscribe via RxJS for reactive updates.
- **Routing & guards**: example of protecting routes and lazy navigation.
- **Forms**: Angular Forms with synchronous validation examples.
- **Styling**: Bootstrap utility classes + Font Awesome for simple, responsive UI.

---

## License

MIT
