import { gql } from "graphql-request";

export const getJobByCity = gql`
  query getJobByCity($slug: String!) {
    jobs(input: { type: "city", slug: $slug }) {
      id
      title
      slug
      isFeatured
      company {
        name
        slug
        logoUrl
      }
      tags {
        name
        slug
      }
      commitment {
        title
      }
      postedAt
    }
  }
`;
