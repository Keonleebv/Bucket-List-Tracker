/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateBucketListItem = /* GraphQL */ `
  subscription OnCreateBucketListItem(
    $filter: ModelSubscriptionBucketListItemFilterInput
    $owner: String
  ) {
    onCreateBucketListItem(filter: $filter, owner: $owner) {
      id
      name
      description
      completed
      completedAt
      owner
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateBucketListItem = /* GraphQL */ `
  subscription OnUpdateBucketListItem(
    $filter: ModelSubscriptionBucketListItemFilterInput
    $owner: String
  ) {
    onUpdateBucketListItem(filter: $filter, owner: $owner) {
      id
      name
      description
      completed
      completedAt
      owner
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteBucketListItem = /* GraphQL */ `
  subscription OnDeleteBucketListItem(
    $filter: ModelSubscriptionBucketListItemFilterInput
    $owner: String
  ) {
    onDeleteBucketListItem(filter: $filter, owner: $owner) {
      id
      name
      description
      completed
      completedAt
      owner
      createdAt
      updatedAt
      __typename
    }
  }
`;
