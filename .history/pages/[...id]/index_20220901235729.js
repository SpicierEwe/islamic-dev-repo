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
  const url =
    process.env.NODE_ENV == "development"
      ? "http://localhost:3000/api/genrate_static_paths"
      : process.env.V;
  const x = await (
    await fetch("http://localhost:3000/api/genrate_static_paths")
  ).json();
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
