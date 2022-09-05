function dynamicPage(props) {
  return <div>Welcome to the dynamic page</div>;
}

export async function getStaticProps(req, res) {
  return {
    props: {},
  };
}
