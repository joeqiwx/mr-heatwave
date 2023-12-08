import * as React from "react";
import { useQuery } from "@apollo/client";
import { GET_HELLO_WORLD_DATA_QUERY } from "@/graphql/queries/queries";
import { HelloWorldQueryType } from "@/graphql/type";

const Test = () => {
  const { loading, error, data } = useQuery<HelloWorldQueryType>(
    GET_HELLO_WORLD_DATA_QUERY
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return <h1>{data?.hello.text}</h1>;
};

export default Test;
