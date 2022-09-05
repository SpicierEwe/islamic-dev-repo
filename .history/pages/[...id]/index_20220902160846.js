import React, { Fragment } from "react";
import { server } from "../../next.config";

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
  console.log(server);
  const url = `${server}/api/generate_static_paths`;
  const x = await (await fetch(url)).json();
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
