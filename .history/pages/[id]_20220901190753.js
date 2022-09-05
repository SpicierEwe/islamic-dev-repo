import React from "react";

function dynamicPage(props) {
  return <div>Welcome to the dynamic page {props.id}</div>;
}

export async function getStaticProps(context) {
  const id = prams.id;

  const { prams } = context.Psid;
  return {
    props: {
      id,
    },
  };
}

export default dynamicPage;
