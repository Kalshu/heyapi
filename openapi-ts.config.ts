import { defineConfig } from "@hey-api/openapi-ts";

export default defineConfig({
  client: "@hey-api/client-fetch",
  services: {
    asClass: true,
    methodNameBuilder(operation) {
      const { path, method } = operation;

      const parts = path.split("/");
      // If the last part contains "id" at the end like {id} or {blobId}, add 'ById' to the method name
      // Use regex to avoid matching parts like 'id' or 'blobId'
      if (parts[parts.length - 1].match(/{[^}]*id}$/i)) {
        parts[parts.length - 2] = parts[parts.length - 2] + "ById";
      }
      //Convert inside part snake to camel case like api/mobile-app to api and mobileApp
      parts.forEach((part, index) => {
        if (index !== 0) {
          const [first, ...rest] = part.split("-");
          parts[index] = [
            first,
            ...rest.map(
              (cPart) => cPart.charAt(0).toUpperCase() + cPart.slice(1)
            ),
          ].join("");
        }
      });

      //remove extension from the last part
      parts[parts.length - 1] = parts[parts.length - 1].split(".")[0];

      //exclude some parts from the method name like _api, or variable parts like {clientId} or {id}
      const returnParts = parts
        .filter((part) => !part.startsWith("{") && !part.startsWith("_"))
        .map((part) => part.replace(/[^a-zA-Z0-9]/g, ""));
      //Add the verb to the method name
      returnParts.unshift(method.toLowerCase());
      //concat all parts to form the method name and capitalize the first letter except the first part
      const methodName = returnParts
        .map((part, index) => {
          if (index === 0) {
            return part;
          }
          return part.charAt(0).toUpperCase() + part.slice(1);
        })
        .join("");

      return methodName;
    },
  },
  input: "./swagger.json",
  output: {
    path: "src/_generated/test",
    format: "prettier",
    lint: "eslint",
  },
});
