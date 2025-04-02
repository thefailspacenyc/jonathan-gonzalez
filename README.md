# jonathan-gonzalez

## Setup

```
cp .env.example .env
```

Start the backend:

```
docker compose -f docker-compose.dev.yml up -d
```

Frontend: http://localhost:3000
Backend: http://localhost:1337

### Hot reloading

```
docker compose -f docker-compose.dev.yml down frontend

# Create frontend/.env (create api key in Strapi first)
# Put the following exports in frontend/.env
export REACT_APP_BACKEND=http://localhost:1337
export REACT_APP_API_KEY=3bfb7c5c1448b6cbe9938039b553b655004961cc219f824657cd4345bcab1384e1eb42830cb17106a9ba6f04890e46fbbccc3753a86ca7a333bb7fc4e12cdc74e2823fbcc26a0be6bca2af9771ad3194d2582384b00bc169db6d4172d17fe8bcb39e859050342e3d60c5d054bee16da103a0ee3ca2536b3d8cc961fb27e18a7c

# Start the frontend
cd frontend
source .env
npm install
npm start
``

## Monitor

```
docker compose -f docker-compose.dev.yml logs -f
```

## Rebuild

```
docker compose -f docker-compose.dev.yml up -d --build
```

## Deploy

```
cp .env.example .env
```

Start the app:

```
docker compose -f docker-compose.prod.yml up -d
```
