function dynamicPage(props) {
  return <div>Welcome to the dynamic page</div>;
}

export async function getStaticProps(context) {
  const requuest = context.req.body;

  return {
    props: {
      request,
    },
  };
}
