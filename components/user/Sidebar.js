import { useState, useEffect } from "react";
import Link from "next/link";

export default function Sidebar() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [filterData, setFilterData] = useState();

  const searchUser = async (event) => {
    event.preventDefault();
    setLoading(true);
    fetch("https://gorest.co.in/public/v2/users/")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
        const targetUser = event.target.user.value.toLowerCase();
        if (targetUser.length !== 0) {
          setFilterData(
            data?.filter((list) => list.name.toLowerCase().includes(targetUser))
          );
        }
      });
  };

  const searchUse = async (event) => {
    event.preventDefault();
    const responseUser = await fetch(`https://gorest.co.in/public/v2/users/`, {
      method: "GET",
    });
    const dataUsers = await responseUser.json();

    const searchUser = event.target.user.value.toLowerCase();
    const dataUser = document.getElementById("dataUser");

    if (searchUser.length == 0) {
      return ReactDOM.render(
        dataUsers.map((user) => (
          <div key={user.id}>
            <h2>
              <Link href={`./users/${user.id}`}>{user.name}</Link>
            </h2>
          </div>
        )),
        dataUser
      );
    } else {
      const dataUsersFilter = [];

      dataUsers.map((user) => {
        user["name"].toLowerCase().includes(searchUser)
          ? dataUsersFilter.push(user)
          : "";
      });

      if (dataUsersFilter.length > 0) {
        return ReactDOM.render(
          dataUsersFilter.map((user) => (
            <div key={user.id}>
              <h2>
                <Link href={`./users/${user.id}`}>{user.name}</Link>
              </h2>
            </div>
          )),
          dataUser
        );
      } else {
        return ReactDOM.render(<h2>No User Data</h2>, dataUser);
      }
    }
  };
  return (
    <div className="absolute">
      <div className="grid w-full overflow-hidden pr-8">
        <form onSubmit={searchUser} className="w-full gap-4 flex">
          <input
            className="border-2 p-1 w-full rounded-md"
            type="text"
            id="user"
            name="user"
          />
          <button
            className="w-16 cursor-pointer bg-yellow-300 hover:bg-yellow-200 p-2 rounded-md"
            type="submit"
          >
            Search User
          </button>
        </form>

        <Link href={"/user/create"}>
          <div className="w-full text-center cursor-pointer bg-blue-400 hover:bg-blue-300 rounded-md mt-2">
            or Create User
          </div>
        </Link>

        <div className="h-40 overflow-y-auto bg-yellow-100 rounded-md mt-4 p-2">
          {filterData?.map((list) => (
            <div
              key={list.id}
              className="pt-2 hover:text-blue-500 cursor-pointer"
            >
              {list.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
