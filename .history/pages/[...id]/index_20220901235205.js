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
  const x = await (
    await fetch("http://localhost:3000/api/genrate_static_paths")
  ).body;

  console.log(x);

  return {
    paths: x,
    fallback: false,
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
