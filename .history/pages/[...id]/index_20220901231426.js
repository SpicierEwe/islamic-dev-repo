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
  await fetch("http://localhost:3000/api/scripts");
  return {
    paths: [{ params: { id: ["quran", "scripts"] } }],
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
