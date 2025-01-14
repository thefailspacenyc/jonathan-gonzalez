# jonathan-gonzalez

## Setup

Create `./frontend/.env` with the following:

```
REACT_APP_BACKEND=http://localhost:1337
```

```
docker compose -f docker-compose.dev.yml up -d
```

## Monitor

```
docker compose -f docker-compose.dev.yml logs -f
```

## Rebuild

```
docker compose -f docker-compose.dev.yml up -d --build
```

## Deploy

Update `./frontend/.env` with the following:

```
# Use the IP address or hostname of the server
REACT_APP_BACKEND=change_me
```

Start the app:

```
docker compose -f docker-compose.prod.yml up -d
```
