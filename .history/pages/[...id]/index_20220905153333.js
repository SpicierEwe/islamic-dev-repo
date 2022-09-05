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
  // fetching dynamically generated paths
  const res = await fetch(`${process.env.host_name}/api/generate_static_paths`);

  const x = await res.json();
  // console.log(x["paths"]);

  return {
     x["paths"],
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const [query1, query2] = params.id;

  // this api watches all routes its will see the 2 query prams
  // if they match with the data in database then that data will be sent back
  const res = await fetch(`${process.env.host_name}/api/${query1}/${query2}`);
  const responseData = await res.json();
  return {
    props: {
      responseData,
    },
  };
}
