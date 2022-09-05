function dynamicPage(props) {
  return <div>Welcome to the dynamic page {props.id}</div>;
}

export async function getStaticProps({ prams }) {
  const id = prams.id;
  return {
    props: {
      id,
    },
  };
}

export default dynamicPage;
