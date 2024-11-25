# "T-Parking" web application

A web application for convenient administration of the service for booking parking spaces at T-bank

## Stack

This project uses the following stack of technologies:

1. React - main library
2. Next - frontend React framework
3. Tailwind - css framework
4. next-auth - library for authorization

## Setup

Guideline for setup:

1. Clone repository to any machine
2. Install dependencies

```bash
npm i
```

3. Сreate a file .env.local in the root of the project, generate secret key for next-auth and add Backend URL

```bash
openssl rand -hex 32
```

## example

```.env.local
NEXTAUTH_SECRET='ключ'
NEXT_PUBLIC_BACKEND_URL='URL'
BACKEND_URL='URL'
```

4. Run app:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
