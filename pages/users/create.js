import Link from "next/link";
import Head from "next/head";
// import React from "react";
export default function create() {
  function onSubmitForm(event) {
    event.preventDefault();
    const GORESTPATH =
      "https://gorest.co.in/public/v2/users?access-token=8e7b32aea1524898516633d4479a3050724cfeb4b7fc79191227ae6c85ba89b2";
    if (confirm("Are you sure to create this profile?")) {
      const response = fetch(
        "https://gorest.co.in/public/v2/users?access-token=8e7b32aea1524898516633d4479a3050724cfeb4b7fc79191227ae6c85ba89b2",
        {
          method: "POST",
          body: JSON.stringify({
            name: "evan@gmail.com",
            email: "evan@gmail.com",
            gender: "male",
            status: "active",
          }),
        }
      ).then((data) => {
        alert("Yeay!!! Your Profile Have Been Created!!!");
      });
    }
  }
  return (
    <>
      <Head>
        <title>Create User</title>
      </Head>
      <div>create</div>
      <Link href={"/"}>Go Back</Link>

      <div>
        <form onSubmit={onSubmitForm}>
          <label>Name</label>
          <br />
          <input type="text" id="name" name="name" required></input>
          <br />
          <br />

          <label>Email</label>
          <br />
          <input type="email" id="email" name="email" required></input>
          <br />
          <br />

          <label>Gender</label>
          <br />
          <select name="gender" id="gender" defaultValue="male">
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>

          <br />
          <br />
          <label>Status</label>
          <br />
          <select name="status" id="status" defaultValue="active">
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>

          <br />
          <br />
          <input type="submit" value="Submit"></input>
        </form>
      </div>
    </>
  );
}
