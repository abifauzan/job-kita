import { gql } from "graphql-request";

export const getJobDetail = gql`
  query getJob($companySlug: String!, $jobSlug: String!) {
    job(input: { companySlug: $companySlug, jobSlug: $jobSlug }) {
      title
      slug
      company {
        name
        slug
        logoUrl
      }
      commitment {
        title
      }
      cities {
        name
      }
      tags {
        name
        slug
      }
      postedAt
      description
    }
  }
`;
