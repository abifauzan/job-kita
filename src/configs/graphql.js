import { request, GraphQLClient } from "graphql-request";

const BASE_URL = "https://api.graphql.jobs/";

const client = new GraphQLClient(BASE_URL, {
  headers: {
    "Content-Type": "application/json",
  },
});

export const apiRequest = (query, variables = {}) => client.request(query, variables);
