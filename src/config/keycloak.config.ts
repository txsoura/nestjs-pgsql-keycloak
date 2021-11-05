import { KeycloakConnectConfig } from "nest-keycloak-connect";

export const keycloakConfig: KeycloakConnectConfig = {
  authServerUrl: "http://localhost:8080/auth",
  realm: "user",
  clientId: "nest-app",
  secret: "a23ec5c6-f473-4d9c-a095-8e07f858322a"
};
