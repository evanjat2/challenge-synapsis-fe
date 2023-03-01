import Head from "next/head";
import Link from "next/link";
export default function UserDetail({ user }) {
  return (
    <>
      <Head>
        <title>View Profile</title>
      </Head>
      <div className="grid w-full h-screen content-center justify-items-center relative ">
        <div className="w-[95%] lg:w-[30%] border-4 h-full p-8">
          <p className="text-center">Profile</p>
          <table className="table-auto w-full">
            <tbody>
              <tr>
                <td>ID Number</td>
                <td>{user.id}</td>
              </tr>
              <tr>
                <td>Name</td>
                <td>{user.name}</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>{user.email}</td>
              </tr>
              <tr>
                <td>Gender</td>
                <td>{user.gender}</td>
              </tr>
              <tr>
                <td>Status</td>
                <td>{user.status}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <Link href={"/"} className="absolute top-4 left-4">Back</Link>
      
    </>
  );
}

export const getStaticPaths = async () => {
  const user = await fetch(`https://gorest.co.in/public/v2/users`).then((res) =>
    res.json()
  );

  const paths = user.map((item) => ({
    params: {
      userId: `${item.id}`,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const user = await fetch(
    `https://gorest.co.in/public/v2/users/${params.userId}`
  ).then((res) => res.json());
  return {
    props: {
      user,
    },
  };
};
