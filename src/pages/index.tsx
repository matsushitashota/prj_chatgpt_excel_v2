import Head from "next/head";
import styled from "styled-components";

export default function Home() {
  return (
    <>
      <Head>
        <title>chatGPT for Excel</title>
      </Head>
      <Test>test</Test>
    </>
  );
}

const Test = styled.div`
  color: red;
`;
