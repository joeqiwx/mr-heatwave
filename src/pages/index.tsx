import { GetServerSideProps } from "next";
import { initializeApollo } from "@/lib/apollo/apolloClient";
import { GET_HELLO_WORLD_DATA_QUERY } from "@/graphql/queries/queries";
import { HelloWorldQueryType } from "@/graphql/type";
import { ApolloProvider } from "@apollo/client";

const Home = ({ data }: { data: HelloWorldQueryType }) => {
  console.log("🚀 ~ file: index.tsx:8 ~ Home ~ data:", data);
  return (
    <main>
      <h1>{data.hello.text}</h1>
    </main>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const apolloClient = initializeApollo();

  const { data } = await apolloClient.query({
    query: GET_HELLO_WORLD_DATA_QUERY,
  });

  return {
    props: {
      data,
    },
  };
};

export default Home;
