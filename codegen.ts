import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "https://beta.pokeapi.co/graphql/v1beta",

  documents: ["src/**/*.tsx"],
  ignoreNoDocuments: true,
  generates: {
    "./src/gql/": {
      preset: "client",
      config: {
        documentMode: "string",
      },
    },
    "./schema.graphql": {
      plugins: ["schema-ast"],
      config: {
        includeDirectives: true,
      },
    },
  },
};
export default config;
