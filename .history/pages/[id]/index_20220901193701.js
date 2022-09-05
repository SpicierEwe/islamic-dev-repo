import React, { Fragment } from "react";

export default function DynamicPage(props) {
  return (
    <Fragment>
      <div>
        <h1>{props.id}</h1>
      </div>
    </Fragment>
  );
}

export async function getStaticProps(context) {
  const { prams } = context;

  return {
    props: {
      id,
    },
  };
}
