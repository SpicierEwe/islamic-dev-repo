import React, { Fragment, useContext } from "react";
import DataContext from "../../store/data_context";

export default function DynamicPage(props) {
  // getting hold of the context
  const dataCtx = useContext(DataContext);

  // globalising data here
  dataCtx.globaliseDataFunction(props.responseData);
  return (
    <Fragment>
      <div>
        <Displa></Displa>
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

  const hostName =
    process.env.NODE_ENV == "development"
      ? "http://localhost:3000"
      : `${process.env.VERCEL_URL}`;

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
