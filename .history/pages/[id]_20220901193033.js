import React, { Fragment } from "react";

export default function DynamicPage(props) {
  return (
    <Fragment>
      <div>Welcome to the dynamic page {props.id}</div>
    </Fragment>
  );
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
