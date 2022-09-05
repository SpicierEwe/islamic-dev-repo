function dynamicPage(props) {
  return <div>Welcome to the dynamic page {props.request}</div>;
}

export async function getStaticProps(context) {
  const request = context.req.body;

  return {
    props: {
      request,
    },
  };
}

export default dynamicPage;
