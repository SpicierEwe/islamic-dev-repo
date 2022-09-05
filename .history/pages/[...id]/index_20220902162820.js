import React, { Fragment } from "react";

export default function DynamicPage(props) {
  return (
    <Fragment>
      <div>
        <h1>hiiii</h1>
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
  const [query1, query2] = params.id;
  console.log(params.id);
  const hostName =
    process.env.NODE_ENV == "development"
      ? "http://localhost:3000"
      : `${process.env.VERCEL_URL}`;
  const x = await (await fetch(`${hostName}/api/generate_static_paths`)).json();

  return {
    props: {},
  };
}
