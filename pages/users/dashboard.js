import { useEffect, useState } from "react";

import UserButton from "@/components/user/Button";
import SearchBar from "@/components/user/SearchBar";
import DeleteModal from "@/components/user/DeleteModal";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { BsFillTrashFill } from "react-icons/bs";
import { AiFillEdit } from "react-icons/ai";
import { IconContext } from "react-icons";

export default function dashboard({ users }) {
  const [filteredUser, setFilteredUser] = useState();
  const [delState, setDelState] = useState(false);
  const [choosedID, setChoosedID] = useState();
  const triggerToast = (text) => {
    toast(text);
  };
  const triggerDelete = (id) => {
    chooseID(id);
    setDelState(!delState);
  };
  const chooseID = (id) => {
    if (id !== null) {
      setChoosedID(id);
    }
  };
  useEffect(() => {
    setFilteredUser(users);
  }, []);
  return (
    <div className="">
      <ToastContainer />
      {delState && (
        <DeleteModal
          triggerDelete={triggerDelete}
          triggerToast={triggerToast}
          choosedID={choosedID}
        />
      )}
      <div className="bg-gradient-to-b from-blue-900 to-green-800 min-h-screen pt-12 md:pt-24  pb-20 md:pb-12 md:px-8">
        <UserButton href="/" content="Show Landing Page" />
        <SearchBar data={users} setFilteredData={setFilteredUser} />
        <div className="bg-white rounded-lg md:rounded-xl overflow-hidden">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-white mt-40">
                <th>ID</th>
                <th>Name</th>
                <th className="hidden md:grid">Email</th>
                <th>Status</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody className="gap-4">
              {filteredUser?.map((l) => (
                <tr className="text-sm">
                  <td className="text-center h-16 px-3 md:px-2">{l.id}</td>
                  <td>{l.name}</td>
                  <td className="hidden md:grid h-16 content-center">
                    {l.email}
                  </td>

                  <td
                    className={
                      `text-center ` +
                      (l.status == "active" ? "text-green-600" : "text-red-400")
                    }
                  >
                    {l.status}
                  </td>
                  <td>
                    <div className="grid justify-items-center">
                      <IconContext.Provider
                        value={{ color: "green", size: "20px" }}
                      >
                        <div className="cursor-pointer w-fit">
                          <AiFillEdit />
                        </div>
                      </IconContext.Provider>
                    </div>
                  </td>
                  <td>
                    <IconContext.Provider
                      value={{ color: "red", size: "20px" }}
                    >
                      <div
                        className="cursor-pointer w-fit"
                        onClick={() => triggerDelete(l.id)}
                      >
                        <BsFillTrashFill />
                      </div>
                    </IconContext.Provider>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export const getStaticProps = async ({ params }) => {
  const users = await fetch(`https://gorest.co.in/public/v2/users`).then(
    (res) => res.json()
  );
  return {
    props: {
      users,
    },
  };
};
