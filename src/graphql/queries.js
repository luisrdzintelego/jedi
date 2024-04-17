/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getRanking = /* GraphQL */ `
  query GetRanking($id: ID!) {
    getRanking(id: $id) {
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listRankings = /* GraphQL */ `
  query ListRankings(
    $filter: ModelRankingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRankings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
