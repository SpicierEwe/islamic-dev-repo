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

export async function getStaticPaths() {
  return {
    paths: [{ params: { id: "script" } }],
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const id = params.id;

  return {
    props: {
      id,
    },
  };
}
