import React from "react";

export function DynamicPage(props) {
  return <div>Welcome to the dynamic page {props.id}</div>;
}

export async function getStaticProps(context) {
  const { prams } = context;
  const id = prams.id;

  console.log(id);
  return {
    props: {
      id,
    },
  };
}

export default DynamicPage;
