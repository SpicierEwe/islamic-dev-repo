import React, { Fragment, useContext, useEffect } from "react";
import DisplayDownloadable from "../../components/display_resources/display_downloadable";
import DownloadableContext from "../../store/doenloadable_context";

import styles from "../../styles/Home.module.css";

export default function DynamicPage(props) {
  // getting hold of the context
  const DownloadableCtx = useContext(DownloadableContext);

  useEffect(() => {
    // globalising data here
    DownloadableCtx.globaliseDataFunction(props.responseData), [];
  });

  return (
    <div>
      {/* displays downloadable explore the component to know more */}
      <DisplayDownloadable></DisplayDownloadable>
    </div>
  );
}

export async function getStaticPaths() {
  const hostName =
    process.env.NODE_ENV != "production"
      ? "http://localhost:3000"
      : `https://${process.env.VERCEL_URL}`;

  //
  // const hostName =
  //   process.env.NODE_ENV == "development"
  //     ? "http://localhost:3000"
  //     : `https://islamic-dev-repo.vercel.app`;
  const res = await fetch(`${hostName}/api/generate_static_paths`);

  const x = await res.json();
  console.log(x["paths"]);

  return {
    paths: x["paths"],
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const [query1, query2] = params.id;

  const hostName =
    process.env.NODE_ENV != "production"
      ? "http://localhost:3000"
      : process.env.VERCEL_URL;

  // this api watches all routes its will see the 2 query prams
  // if they match with the data in database then that data will be sent back
  const responseData = await (
    await fetch(`${hostName}/api/${query1}/${query2}`)
  ).json();

  return {
    props: {
      responseData,
    },
  };
}
