import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  allTest: Array<Test>;
};

export type Test = {
  __typename?: 'Test';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createTest: Test;
};


export type MutationCreateTestArgs = {
  name: Scalars['String'];
};

export type GetTestsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTestsQuery = (
  { __typename?: 'Query' }
  & { allTest: Array<(
    { __typename?: 'Test' }
    & Pick<Test, 'id' | 'name'>
  )> }
);

export type CreateTestMutationVariables = Exact<{
  name: Scalars['String'];
}>;


export type CreateTestMutation = (
  { __typename?: 'Mutation' }
  & { createTest: (
    { __typename?: 'Test' }
    & Pick<Test, 'id' | 'name'>
  ) }
);


export const GetTestsDocument = gql`
    query GetTests {
  allTest {
    id
    name
  }
}
    `;

/**
 * __useGetTestsQuery__
 *
 * To run a query within a React component, call `useGetTestsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTestsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTestsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetTestsQuery(baseOptions?: Apollo.QueryHookOptions<GetTestsQuery, GetTestsQueryVariables>) {
        return Apollo.useQuery<GetTestsQuery, GetTestsQueryVariables>(GetTestsDocument, baseOptions);
      }
export function useGetTestsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTestsQuery, GetTestsQueryVariables>) {
          return Apollo.useLazyQuery<GetTestsQuery, GetTestsQueryVariables>(GetTestsDocument, baseOptions);
        }
export type GetTestsQueryHookResult = ReturnType<typeof useGetTestsQuery>;
export type GetTestsLazyQueryHookResult = ReturnType<typeof useGetTestsLazyQuery>;
export type GetTestsQueryResult = Apollo.QueryResult<GetTestsQuery, GetTestsQueryVariables>;
export const CreateTestDocument = gql`
    mutation CreateTest($name: String!) {
  createTest(name: $name) {
    id
    name
  }
}
    `;
export type CreateTestMutationFn = Apollo.MutationFunction<CreateTestMutation, CreateTestMutationVariables>;

/**
 * __useCreateTestMutation__
 *
 * To run a mutation, you first call `useCreateTestMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTestMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTestMutation, { data, loading, error }] = useCreateTestMutation({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useCreateTestMutation(baseOptions?: Apollo.MutationHookOptions<CreateTestMutation, CreateTestMutationVariables>) {
        return Apollo.useMutation<CreateTestMutation, CreateTestMutationVariables>(CreateTestDocument, baseOptions);
      }
export type CreateTestMutationHookResult = ReturnType<typeof useCreateTestMutation>;
export type CreateTestMutationResult = Apollo.MutationResult<CreateTestMutation>;
export type CreateTestMutationOptions = Apollo.BaseMutationOptions<CreateTestMutation, CreateTestMutationVariables>;