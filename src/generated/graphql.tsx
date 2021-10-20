import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};

export type BaseMutationRepsponse = {
  __typename?: 'BaseMutationRepsponse';
  code: Scalars['Float'];
  message?: Maybe<Scalars['String']>;
  success: Scalars['Boolean'];
};

export type Cart = {
  __typename?: 'Cart';
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  product: RelatedProductObject;
  quantity: Scalars['Float'];
  updatedAt: Scalars['DateTime'];
  userId: Scalars['String'];
};

export type CartMutationRespsone = IMutationRepsponse & {
  __typename?: 'CartMutationRespsone';
  cart?: Maybe<Cart>;
  code: Scalars['Float'];
  error?: Maybe<Array<FieldError>>;
  message?: Maybe<Scalars['String']>;
  success: Scalars['Boolean'];
};

export type CreateCartInput = {
  productId: Scalars['String'];
  quantity: Scalars['Float'];
};

export type CreateProductInput = {
  desc: Scalars['String'];
  img: Scalars['String'];
  price: Scalars['String'];
  title: Scalars['String'];
};


export type FieldError = {
  __typename?: 'FieldError';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type GetCardByUserMutationResponse = IMutationRepsponse & {
  __typename?: 'GetCardByUserMutationResponse';
  carts?: Maybe<Array<Cart>>;
  code: Scalars['Float'];
  error?: Maybe<Array<FieldError>>;
  message?: Maybe<Scalars['String']>;
  success: Scalars['Boolean'];
  total?: Maybe<Scalars['Float']>;
};

export type GetOrderByUserMutationResponse = IMutationRepsponse & {
  __typename?: 'GetOrderByUserMutationResponse';
  code: Scalars['Float'];
  error?: Maybe<Array<FieldError>>;
  message?: Maybe<Scalars['String']>;
  orders?: Maybe<Array<Order>>;
  success: Scalars['Boolean'];
  total?: Maybe<Scalars['Float']>;
};

export type IMutationRepsponse = {
  code: Scalars['Float'];
  message?: Maybe<Scalars['String']>;
  success: Scalars['Boolean'];
};

export type LoginInput = {
  password: Scalars['String'];
  usernameOrEmail: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createCart: CartMutationRespsone;
  createProduct: ProductMutaionReponse;
  deleteCartByUser: BaseMutationRepsponse;
  deleteUserById: Scalars['Boolean'];
  login: UserMutationResponse;
  logout: Scalars['Boolean'];
  payment: Scalars['Boolean'];
  register?: Maybe<UserMutationResponse>;
  updateCart: CartMutationRespsone;
  updateProduct: ProductMutaionReponse;
};


export type MutationCreateCartArgs = {
  createCartInput: CreateCartInput;
};


export type MutationCreateProductArgs = {
  createProductInput: CreateProductInput;
};


export type MutationDeleteUserByIdArgs = {
  id: Scalars['String'];
};


export type MutationLoginArgs = {
  loginInput: LoginInput;
};


export type MutationPaymentArgs = {
  stripeInput: StripeInput;
};


export type MutationRegisterArgs = {
  registerInput: RegisterInput;
};


export type MutationUpdateCartArgs = {
  updateCartInput: UpdateCartInput;
};


export type MutationUpdateProductArgs = {
  updateProductInput: UpdateProductInput;
};

export type Order = {
  __typename?: 'Order';
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  products: Array<RelatedProductObject>;
  total: Scalars['Float'];
  updatedAt: Scalars['DateTime'];
  userId: Scalars['String'];
};

export type PaginatedProducts = {
  __typename?: 'PaginatedProducts';
  docs: Array<Product>;
  hasNext: Scalars['Boolean'];
  hasPrevious: Scalars['Boolean'];
  next?: Maybe<Scalars['String']>;
  previous?: Maybe<Scalars['String']>;
  totalDocs: Scalars['Float'];
};

export type Product = {
  __typename?: 'Product';
  _id: Scalars['ID'];
  categories: Array<Scalars['String']>;
  color: Array<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  desc: Scalars['String'];
  img: Scalars['String'];
  price: Scalars['Float'];
  size: Array<Scalars['String']>;
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type ProductMutaionReponse = IMutationRepsponse & {
  __typename?: 'ProductMutaionReponse';
  code: Scalars['Float'];
  error?: Maybe<Array<FieldError>>;
  message?: Maybe<Scalars['String']>;
  product?: Maybe<Product>;
  success: Scalars['Boolean'];
};

export type Query = {
  __typename?: 'Query';
  getAllUser?: Maybe<Array<User>>;
  getCartByUser: GetCardByUserMutationResponse;
  getOrderByUser: GetOrderByUserMutationResponse;
  hello: Scalars['String'];
  me?: Maybe<User>;
  product?: Maybe<Product>;
  products?: Maybe<PaginatedProducts>;
};


export type QueryProductArgs = {
  id: Scalars['String'];
};


export type QueryProductsArgs = {
  color?: Maybe<Scalars['String']>;
  limit: Scalars['Int'];
  offset?: Maybe<Scalars['Int']>;
  size?: Maybe<Scalars['String']>;
  sort?: Maybe<Scalars['String']>;
};

export type RegisterInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type RelatedProductObject = {
  __typename?: 'RelatedProductObject';
  _id: Scalars['ID'];
  desc: Scalars['String'];
  img: Scalars['String'];
  price: Scalars['Float'];
  title: Scalars['String'];
};

export type StripeInput = {
  amount: Scalars['String'];
  tokenId: Scalars['String'];
};

export type UpdateCartInput = {
  cartId: Scalars['String'];
  quantity: Scalars['Float'];
};

export type UpdateProductInput = {
  desc: Scalars['String'];
  id: Scalars['ID'];
  img: Scalars['String'];
  price: Scalars['Float'];
  title: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  password: Scalars['String'];
  roles: Array<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  username: Scalars['String'];
};

export type UserMutationResponse = IMutationRepsponse & {
  __typename?: 'UserMutationResponse';
  code: Scalars['Float'];
  error?: Maybe<Array<FieldError>>;
  message?: Maybe<Scalars['String']>;
  success: Scalars['Boolean'];
  user?: Maybe<User>;
};

export type LoginMutationVariables = Exact<{
  loginInput: LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'UserMutationResponse', code: number, success: boolean, message?: Maybe<string>, user?: Maybe<{ __typename?: 'User', username: string, email: string }>, error?: Maybe<Array<{ __typename?: 'FieldError', field: string, message: string }>> } };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', logout: boolean };

export type UserInfoFragment = { __typename?: 'User', username: string, email: string };

export type UserMutationResponseFragment = { __typename?: 'UserMutationResponse', code: number, success: boolean, message?: Maybe<string>, user?: Maybe<{ __typename?: 'User', username: string, email: string }>, error?: Maybe<Array<{ __typename?: 'FieldError', field: string, message: string }>> };

export type FieldErrorFragment = { __typename?: 'FieldError', field: string, message: string };

export type MutationStatusesFragment = { __typename?: 'UserMutationResponse', code: number, success: boolean, message?: Maybe<string> };

export type DeleteUserByIdMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type DeleteUserByIdMutation = { __typename?: 'Mutation', deleteUserById: boolean };

export type RegisterMutationVariables = Exact<{
  registerInput: RegisterInput;
}>;


export type RegisterMutation = { __typename?: 'Mutation', register?: Maybe<{ __typename?: 'UserMutationResponse', code: number, success: boolean, message?: Maybe<string>, user?: Maybe<{ __typename?: 'User', username: string, email: string }>, error?: Maybe<Array<{ __typename?: 'FieldError', field: string, message: string }>> }> };

export type CreateCartMutationVariables = Exact<{
  createCartInput: CreateCartInput;
}>;


export type CreateCartMutation = { __typename?: 'Mutation', createCart: { __typename?: 'CartMutationRespsone', code: number, success: boolean, message?: Maybe<string>, cart?: Maybe<{ __typename?: 'Cart', userId: string, quantity: number, product: { __typename?: 'RelatedProductObject', _id: string, title: string, desc: string, img: string, price: number } }> } };

export type UpdateCartMutationVariables = Exact<{
  updateCartInput: UpdateCartInput;
}>;


export type UpdateCartMutation = { __typename?: 'Mutation', updateCart: { __typename?: 'CartMutationRespsone', code: number, success: boolean, message?: Maybe<string>, cart?: Maybe<{ __typename?: 'Cart', userId: string, quantity: number, product: { __typename?: 'RelatedProductObject', _id: string, title: string, desc: string, img: string, price: number } }> } };

export type CreateProductMutationVariables = Exact<{
  createProductInput: CreateProductInput;
}>;


export type CreateProductMutation = { __typename?: 'Mutation', createProduct: { __typename?: 'ProductMutaionReponse', code: number, success: boolean, message?: Maybe<string>, product?: Maybe<{ __typename?: 'Product', title: string, desc: string, img: string, price: number }> } };

export type UpdateProductMutationVariables = Exact<{
  updateProductInput: UpdateProductInput;
}>;


export type UpdateProductMutation = { __typename?: 'Mutation', updateProduct: { __typename?: 'ProductMutaionReponse', code: number, success: boolean, message?: Maybe<string>, product?: Maybe<{ __typename?: 'Product', title: string, desc: string, img: string, price: number }> } };

export type PaymentMutationVariables = Exact<{
  stripeInput: StripeInput;
}>;


export type PaymentMutation = { __typename?: 'Mutation', payment: boolean };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me?: Maybe<{ __typename?: 'User', username: string, email: string }> };

export type GetCartByUserQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCartByUserQuery = { __typename?: 'Query', getCartByUser: { __typename?: 'GetCardByUserMutationResponse', code: number, success: boolean, message?: Maybe<string>, total?: Maybe<number>, carts?: Maybe<Array<{ __typename?: 'Cart', _id: string, userId: string, quantity: number, product: { __typename?: 'RelatedProductObject', _id: string, title: string, desc: string, img: string, price: number } }>> } };

export type GetOrderByUserQueryVariables = Exact<{ [key: string]: never; }>;


export type GetOrderByUserQuery = { __typename?: 'Query', getOrderByUser: { __typename?: 'GetOrderByUserMutationResponse', code: number, success: boolean, message?: Maybe<string>, orders?: Maybe<Array<{ __typename?: 'Order', total: number, products: Array<{ __typename?: 'RelatedProductObject', title: string, desc: string, img: string, price: number }> }>> } };

export type ProductQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type ProductQuery = { __typename?: 'Query', product?: Maybe<{ __typename?: 'Product', _id: string, title: string, desc: string, img: string, categories: Array<string>, size: Array<string>, color: Array<string>, price: number }> };

export type ProductsQueryVariables = Exact<{
  color: Scalars['String'];
  size: Scalars['String'];
  offset: Scalars['Int'];
  limit: Scalars['Int'];
}>;


export type ProductsQuery = { __typename?: 'Query', products?: Maybe<{ __typename?: 'PaginatedProducts', hasNext: boolean, hasPrevious: boolean, totalDocs: number, next?: Maybe<string>, previous?: Maybe<string>, docs: Array<{ __typename?: 'Product', _id: string, title: string, desc: string, img: string, price: number, color: Array<string>, size: Array<string>, categories: Array<string>, createdAt: any, updatedAt: any }> }> };

export type GetAllUserQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllUserQuery = { __typename?: 'Query', getAllUser?: Maybe<Array<{ __typename?: 'User', _id: string, username: string, email: string, roles: Array<string>, createdAt: any }>> };

export const MutationStatusesFragmentDoc = gql`
    fragment mutationStatuses on UserMutationResponse {
  code
  success
  message
}
    `;
export const UserInfoFragmentDoc = gql`
    fragment userInfo on User {
  username
  email
}
    `;
export const FieldErrorFragmentDoc = gql`
    fragment fieldError on FieldError {
  field
  message
}
    `;
export const UserMutationResponseFragmentDoc = gql`
    fragment userMutationResponse on UserMutationResponse {
  ...mutationStatuses
  user {
    ...userInfo
  }
  error {
    ...fieldError
  }
}
    ${MutationStatusesFragmentDoc}
${UserInfoFragmentDoc}
${FieldErrorFragmentDoc}`;
export const LoginDocument = gql`
    mutation Login($loginInput: LoginInput!) {
  login(loginInput: $loginInput) {
    ...userMutationResponse
  }
}
    ${UserMutationResponseFragmentDoc}`;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      loginInput: // value for 'loginInput'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, options);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const DeleteUserByIdDocument = gql`
    mutation DeleteUserById($id: String!) {
  deleteUserById(id: $id)
}
    `;
export type DeleteUserByIdMutationFn = Apollo.MutationFunction<DeleteUserByIdMutation, DeleteUserByIdMutationVariables>;

/**
 * __useDeleteUserByIdMutation__
 *
 * To run a mutation, you first call `useDeleteUserByIdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteUserByIdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteUserByIdMutation, { data, loading, error }] = useDeleteUserByIdMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteUserByIdMutation(baseOptions?: Apollo.MutationHookOptions<DeleteUserByIdMutation, DeleteUserByIdMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteUserByIdMutation, DeleteUserByIdMutationVariables>(DeleteUserByIdDocument, options);
      }
export type DeleteUserByIdMutationHookResult = ReturnType<typeof useDeleteUserByIdMutation>;
export type DeleteUserByIdMutationResult = Apollo.MutationResult<DeleteUserByIdMutation>;
export type DeleteUserByIdMutationOptions = Apollo.BaseMutationOptions<DeleteUserByIdMutation, DeleteUserByIdMutationVariables>;
export const RegisterDocument = gql`
    mutation Register($registerInput: RegisterInput!) {
  register(registerInput: $registerInput) {
    ...userMutationResponse
  }
}
    ${UserMutationResponseFragmentDoc}`;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      registerInput: // value for 'registerInput'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const CreateCartDocument = gql`
    mutation CreateCart($createCartInput: CreateCartInput!) {
  createCart(createCartInput: $createCartInput) {
    code
    success
    message
    cart {
      userId
      product {
        _id
        title
        desc
        img
        price
      }
      quantity
    }
  }
}
    `;
export type CreateCartMutationFn = Apollo.MutationFunction<CreateCartMutation, CreateCartMutationVariables>;

/**
 * __useCreateCartMutation__
 *
 * To run a mutation, you first call `useCreateCartMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCartMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCartMutation, { data, loading, error }] = useCreateCartMutation({
 *   variables: {
 *      createCartInput: // value for 'createCartInput'
 *   },
 * });
 */
export function useCreateCartMutation(baseOptions?: Apollo.MutationHookOptions<CreateCartMutation, CreateCartMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateCartMutation, CreateCartMutationVariables>(CreateCartDocument, options);
      }
export type CreateCartMutationHookResult = ReturnType<typeof useCreateCartMutation>;
export type CreateCartMutationResult = Apollo.MutationResult<CreateCartMutation>;
export type CreateCartMutationOptions = Apollo.BaseMutationOptions<CreateCartMutation, CreateCartMutationVariables>;
export const UpdateCartDocument = gql`
    mutation UpdateCart($updateCartInput: UpdateCartInput!) {
  updateCart(updateCartInput: $updateCartInput) {
    code
    success
    message
    cart {
      userId
      product {
        _id
        title
        desc
        img
        price
      }
      quantity
    }
  }
}
    `;
export type UpdateCartMutationFn = Apollo.MutationFunction<UpdateCartMutation, UpdateCartMutationVariables>;

/**
 * __useUpdateCartMutation__
 *
 * To run a mutation, you first call `useUpdateCartMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCartMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCartMutation, { data, loading, error }] = useUpdateCartMutation({
 *   variables: {
 *      updateCartInput: // value for 'updateCartInput'
 *   },
 * });
 */
export function useUpdateCartMutation(baseOptions?: Apollo.MutationHookOptions<UpdateCartMutation, UpdateCartMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateCartMutation, UpdateCartMutationVariables>(UpdateCartDocument, options);
      }
export type UpdateCartMutationHookResult = ReturnType<typeof useUpdateCartMutation>;
export type UpdateCartMutationResult = Apollo.MutationResult<UpdateCartMutation>;
export type UpdateCartMutationOptions = Apollo.BaseMutationOptions<UpdateCartMutation, UpdateCartMutationVariables>;
export const CreateProductDocument = gql`
    mutation CreateProduct($createProductInput: CreateProductInput!) {
  createProduct(createProductInput: $createProductInput) {
    code
    success
    message
    product {
      title
      desc
      img
      price
    }
  }
}
    `;
export type CreateProductMutationFn = Apollo.MutationFunction<CreateProductMutation, CreateProductMutationVariables>;

/**
 * __useCreateProductMutation__
 *
 * To run a mutation, you first call `useCreateProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProductMutation, { data, loading, error }] = useCreateProductMutation({
 *   variables: {
 *      createProductInput: // value for 'createProductInput'
 *   },
 * });
 */
export function useCreateProductMutation(baseOptions?: Apollo.MutationHookOptions<CreateProductMutation, CreateProductMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateProductMutation, CreateProductMutationVariables>(CreateProductDocument, options);
      }
export type CreateProductMutationHookResult = ReturnType<typeof useCreateProductMutation>;
export type CreateProductMutationResult = Apollo.MutationResult<CreateProductMutation>;
export type CreateProductMutationOptions = Apollo.BaseMutationOptions<CreateProductMutation, CreateProductMutationVariables>;
export const UpdateProductDocument = gql`
    mutation UpdateProduct($updateProductInput: UpdateProductInput!) {
  updateProduct(updateProductInput: $updateProductInput) {
    code
    success
    message
    product {
      title
      desc
      img
      price
    }
  }
}
    `;
export type UpdateProductMutationFn = Apollo.MutationFunction<UpdateProductMutation, UpdateProductMutationVariables>;

/**
 * __useUpdateProductMutation__
 *
 * To run a mutation, you first call `useUpdateProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProductMutation, { data, loading, error }] = useUpdateProductMutation({
 *   variables: {
 *      updateProductInput: // value for 'updateProductInput'
 *   },
 * });
 */
export function useUpdateProductMutation(baseOptions?: Apollo.MutationHookOptions<UpdateProductMutation, UpdateProductMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateProductMutation, UpdateProductMutationVariables>(UpdateProductDocument, options);
      }
export type UpdateProductMutationHookResult = ReturnType<typeof useUpdateProductMutation>;
export type UpdateProductMutationResult = Apollo.MutationResult<UpdateProductMutation>;
export type UpdateProductMutationOptions = Apollo.BaseMutationOptions<UpdateProductMutation, UpdateProductMutationVariables>;
export const PaymentDocument = gql`
    mutation payment($stripeInput: StripeInput!) {
  payment(stripeInput: $stripeInput)
}
    `;
export type PaymentMutationFn = Apollo.MutationFunction<PaymentMutation, PaymentMutationVariables>;

/**
 * __usePaymentMutation__
 *
 * To run a mutation, you first call `usePaymentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePaymentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [paymentMutation, { data, loading, error }] = usePaymentMutation({
 *   variables: {
 *      stripeInput: // value for 'stripeInput'
 *   },
 * });
 */
export function usePaymentMutation(baseOptions?: Apollo.MutationHookOptions<PaymentMutation, PaymentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<PaymentMutation, PaymentMutationVariables>(PaymentDocument, options);
      }
export type PaymentMutationHookResult = ReturnType<typeof usePaymentMutation>;
export type PaymentMutationResult = Apollo.MutationResult<PaymentMutation>;
export type PaymentMutationOptions = Apollo.BaseMutationOptions<PaymentMutation, PaymentMutationVariables>;
export const MeDocument = gql`
    query Me {
  me {
    ...userInfo
  }
}
    ${UserInfoFragmentDoc}`;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const GetCartByUserDocument = gql`
    query GetCartByUser {
  getCartByUser {
    code
    success
    message
    carts {
      _id
      userId
      product {
        _id
        title
        desc
        img
        price
      }
      quantity
    }
    total
  }
}
    `;

/**
 * __useGetCartByUserQuery__
 *
 * To run a query within a React component, call `useGetCartByUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCartByUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCartByUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCartByUserQuery(baseOptions?: Apollo.QueryHookOptions<GetCartByUserQuery, GetCartByUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCartByUserQuery, GetCartByUserQueryVariables>(GetCartByUserDocument, options);
      }
export function useGetCartByUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCartByUserQuery, GetCartByUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCartByUserQuery, GetCartByUserQueryVariables>(GetCartByUserDocument, options);
        }
export type GetCartByUserQueryHookResult = ReturnType<typeof useGetCartByUserQuery>;
export type GetCartByUserLazyQueryHookResult = ReturnType<typeof useGetCartByUserLazyQuery>;
export type GetCartByUserQueryResult = Apollo.QueryResult<GetCartByUserQuery, GetCartByUserQueryVariables>;
export const GetOrderByUserDocument = gql`
    query GetOrderByUser {
  getOrderByUser {
    code
    success
    message
    orders {
      products {
        title
        desc
        img
        price
      }
      total
    }
  }
}
    `;

/**
 * __useGetOrderByUserQuery__
 *
 * To run a query within a React component, call `useGetOrderByUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOrderByUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOrderByUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetOrderByUserQuery(baseOptions?: Apollo.QueryHookOptions<GetOrderByUserQuery, GetOrderByUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetOrderByUserQuery, GetOrderByUserQueryVariables>(GetOrderByUserDocument, options);
      }
export function useGetOrderByUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetOrderByUserQuery, GetOrderByUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetOrderByUserQuery, GetOrderByUserQueryVariables>(GetOrderByUserDocument, options);
        }
export type GetOrderByUserQueryHookResult = ReturnType<typeof useGetOrderByUserQuery>;
export type GetOrderByUserLazyQueryHookResult = ReturnType<typeof useGetOrderByUserLazyQuery>;
export type GetOrderByUserQueryResult = Apollo.QueryResult<GetOrderByUserQuery, GetOrderByUserQueryVariables>;
export const ProductDocument = gql`
    query Product($id: String!) {
  product(id: $id) {
    _id
    title
    desc
    img
    categories
    size
    color
    price
  }
}
    `;

/**
 * __useProductQuery__
 *
 * To run a query within a React component, call `useProductQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useProductQuery(baseOptions: Apollo.QueryHookOptions<ProductQuery, ProductQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProductQuery, ProductQueryVariables>(ProductDocument, options);
      }
export function useProductLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductQuery, ProductQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProductQuery, ProductQueryVariables>(ProductDocument, options);
        }
export type ProductQueryHookResult = ReturnType<typeof useProductQuery>;
export type ProductLazyQueryHookResult = ReturnType<typeof useProductLazyQuery>;
export type ProductQueryResult = Apollo.QueryResult<ProductQuery, ProductQueryVariables>;
export const ProductsDocument = gql`
    query Products($color: String!, $size: String!, $offset: Int!, $limit: Int!) {
  products(color: $color, size: $size, offset: $offset, limit: $limit) {
    hasNext
    hasPrevious
    totalDocs
    next
    previous
    docs {
      _id
      title
      desc
      img
      price
      color
      size
      categories
      createdAt
      updatedAt
    }
  }
}
    `;

/**
 * __useProductsQuery__
 *
 * To run a query within a React component, call `useProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductsQuery({
 *   variables: {
 *      color: // value for 'color'
 *      size: // value for 'size'
 *      offset: // value for 'offset'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useProductsQuery(baseOptions: Apollo.QueryHookOptions<ProductsQuery, ProductsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProductsQuery, ProductsQueryVariables>(ProductsDocument, options);
      }
export function useProductsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductsQuery, ProductsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProductsQuery, ProductsQueryVariables>(ProductsDocument, options);
        }
export type ProductsQueryHookResult = ReturnType<typeof useProductsQuery>;
export type ProductsLazyQueryHookResult = ReturnType<typeof useProductsLazyQuery>;
export type ProductsQueryResult = Apollo.QueryResult<ProductsQuery, ProductsQueryVariables>;
export const GetAllUserDocument = gql`
    query GetAllUser {
  getAllUser {
    _id
    username
    email
    roles
    createdAt
  }
}
    `;

/**
 * __useGetAllUserQuery__
 *
 * To run a query within a React component, call `useGetAllUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllUserQuery(baseOptions?: Apollo.QueryHookOptions<GetAllUserQuery, GetAllUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllUserQuery, GetAllUserQueryVariables>(GetAllUserDocument, options);
      }
export function useGetAllUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllUserQuery, GetAllUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllUserQuery, GetAllUserQueryVariables>(GetAllUserDocument, options);
        }
export type GetAllUserQueryHookResult = ReturnType<typeof useGetAllUserQuery>;
export type GetAllUserLazyQueryHookResult = ReturnType<typeof useGetAllUserLazyQuery>;
export type GetAllUserQueryResult = Apollo.QueryResult<GetAllUserQuery, GetAllUserQueryVariables>;