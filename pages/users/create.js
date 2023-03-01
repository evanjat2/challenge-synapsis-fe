import Link from "next/link";
import Head from "next/head";
// import React from "react";
export default function create() {
  return (
    <>
      <Head>
        <title>Create User</title>
      </Head>
      <div>create</div>
      <Link href={"/"}>Go Back</Link>
    </>
  );
}
