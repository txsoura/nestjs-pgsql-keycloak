## Description

This is my first [nestjs](https://nestjs.com) app, created to test base [keycloak](https://keycloak.org) as auth guard.

## Running the app

```bash
# start keycloak
$ docker run -p 8080:8080 -e KEYCLOAK_USER=admin -e KEYCLOAK_PASSWORD=admin quay.io/keycloak/keycloak:15.0.2

# start pgsql database
$ make up

# start app in watch mode
$ npm run start:dev
```

## License

Nest is [MIT licensed](LICENSE).
