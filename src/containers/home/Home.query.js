import { gql } from "graphql-request";

export const getJobFeatureQuery = gql`
  {
    jobs {
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
