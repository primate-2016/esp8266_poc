/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getEsp8266thingdata = /* GraphQL */ `
  query GetEsp8266thingdata($id: ID!) {
    getEsp8266thingdata(id: $id) {
      device_id
      device_data
      id
      createdAt
      updatedAt
    }
  }
`;
export const listEsp8266thingdata = /* GraphQL */ `
  query ListEsp8266thingdata(
    $filter: ModelEsp8266thingdataFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEsp8266thingdata(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        device_data
      }
      nextToken
    }
  }
`;
