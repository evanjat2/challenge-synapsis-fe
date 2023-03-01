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

        <Link href={"/users/create"}>
          <div className="w-full text-center cursor-pointer bg-blue-400 hover:bg-blue-300 rounded-md mt-2">
            or Create User
          </div>
        </Link>

        <div className="max-h-40 overflow-y-auto bg-yellow-100 rounded-md mt-4 p-2">
          {filterData?.map((list) => (
            <div
              key={list.id}
              className="pt-2 hover:text-blue-500 cursor-pointer"
            >
              <Link href={`/users/${list.id}`}>{list.name}</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
