import React from "react";
import { useGetTestsQuery } from "../../codegen/graphql";

export const Test = () => {
  const { data, loading, error } = useGetTestsQuery();

  if (loading) {
    return <h1>LOADING</h1>
  }

  if (error) {
    return <h1>ERROR</h1>
  }

  return (
    <div>
      {data?.allTest.map((item) => {
        return <li>{item.name}</li>
      })}
    </div>
  )
}