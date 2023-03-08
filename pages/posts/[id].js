export default function Dynamic(props) {
  return (
    <div>
      <p>{props.post.title}</p>
      <p>{props.post.body}</p>
    </div>
  );
}

export async function getStaticPaths() {
  const res = await fetch("http://localhost:3000/api/posts");
  const data = await res.json();

  const paths = data?.map((d) => {
    return {
      params: { id: `${d.id}` },
    };
  });

  return {
    paths: paths,
    fallback: false, // if dont have routes get 404 page
  };
}

export async function getStaticProps(context) {
  const res = await fetch(
    `http://localhost:3000/api/posts/${context.params.id}`
  );
  const data = await res.json();

  return {
    props: {
      post: data,
    },
  };
}

// or

// export async function getServerSideProps(context) {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
//   );
//   const data = await res.json();

//   return {
//     props: {
//       post: data,
//     },
//   };
// }
