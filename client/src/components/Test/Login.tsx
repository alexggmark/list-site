import React from "react";
import * as yup from "yup";
import { Formik, Form, Field } from 'formik';
import styled from "styled-components";
import {
  useLoginUserMutation,
  useCreateUsersMutation,
  useGetTestsLazyQuery,
} from "../../codegen/graphql";
import { setUserAuth } from "../../auth";

const validationSchema = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().required()
})

const Error = styled.p`
  color: red;
`

const Wrapper = styled.div`
  border: 1px solid blue;
  width: 200px;
`

const FormContainer = styled(Form)`
  display: flex;
  flex-flow: column;
`

const LoginForm = () => {
  const [login, { data, loading: loginLoading }] = useLoginUserMutation();
  const [lazyTestQuery, { data: lazyData, loading: lazyLoading }] = useGetTestsLazyQuery();

  if (loginLoading) return <h1>Loading login</h1>;

  return (
    <React.Fragment>
      <h2>Login</h2>
      <Formik
        initialValues={{
          username: "",
          password: ""
        }}
        validationSchema={validationSchema}
        onSubmit={async ({ username, password }) => {
          console.log(username, password)
          await login({
            variables: {
              username: username,
              password: password
            }
          })
          setUserAuth(data?.loginUser.accessToken ?? "");
          lazyTestQuery();
          console.log("Success login");
        }}
      >
        {({ isSubmitting, errors }) => (
          <FormContainer>
            <Field type="username" name="username" />
            <Field type="password" name="password" />
            <button type="submit" disabled={isSubmitting}>Login</button>
            {errors.username || errors.password ? (
              <Error>Error mate</Error>
            ) : null}
          </FormContainer>
        )}
      </Formik>
      {lazyData ? (
        <h2>Loaded data</h2>
      ) : (
       <h2>No data loaded</h2>
      )}
    </React.Fragment>
  )
}

const RegisterForm = () => {
  const [register, { data, loading, error }] = useCreateUsersMutation();

  if (loading) return <h1>Loading register</h1>

  if (error) return <h1>Error</h1>

  return (
    <React.Fragment>
      <h2>Register</h2>
      <Formik
        initialValues={{
          username: "",
          password: ""
        }}
        validationSchema={validationSchema}
        onSubmit={async ({ username, password }) => {
          console.log(username, password)
          await register({
            variables: {
              username: username,
              password: password
            }
          })
          console.log(data);
          console.log("Success register");
        }}
      >
        {({ isSubmitting, errors }) => (
          <FormContainer>
            <Field type="username" name="username" />
            <Field type="password" name="password" />
            <button type="submit" disabled={isSubmitting}>Register</button>
            {errors.username || errors.password ? (
              <Error>Error mate</Error>
            ) : null}
          </FormContainer>
        )}
      </Formik>
    </React.Fragment>
  )
}

export const LoginApp = () => {
  return (
    <Wrapper>
      <LoginForm />
      <RegisterForm />
    </Wrapper>
  )
}