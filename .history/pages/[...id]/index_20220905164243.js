import fs from "fs";
import path from "path";

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

async function getData() {
  const filePath = path.join(process.cwd(), "/db", "/db.json");

  const data = fs.readFile(filePath);

  // generate paths
  //  this will generate the static paths for all the db content which will be pre-rendered this will generate paths dynamically when the is called by
  //                   /api/genrate_static_paths

  const paths = [];

  await data.forEach((e) => {
    // console.log(Object.keys(e));

    e[Object.keys(e)].forEach((e2) => {
      const category = Object.keys(e);
      const sub_item = Object.keys(e2);

      // console.log(`${category} ${sub_item}`);

      // paths.push({ params: { id: [category[0], sub_item[0]] } });
      paths.push([category[0], sub_item[0]]);
    });
  });

  return paths;
}

export async function getStaticPaths() {
  // fetching dynamically generated paths
  // const res = await fetch(`${process.env.host_name}/api/generate_static_paths`);

  const x = await getData();
  // console.log(x.paths);

  const paths = await x.paths.map((path) => ({
    params: { id: path },
  }));
  return {
    paths,
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
