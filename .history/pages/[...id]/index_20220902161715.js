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
  const hostName =
    process.env.NODE_ENV == "development"
      ? "http://localhost:3000"
      : `${process.env.VERCEL_URL}`;
  const x = await (await fetch(`${hostName}/api/generate_static_paths`)).json();
  // console.log(x["paths"]);

  return {
    paths: x["paths"],
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const id = params.id;
  // await

  return {
    props: {
      id,
    },
  };
}
