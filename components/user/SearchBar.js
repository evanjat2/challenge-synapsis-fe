import { IoCreateOutline } from "react-icons/io5";
import { IconContext } from "react-icons";

export default function SearchBar({ data, setFilteredData, triggerCreate }) {
  function handleChange(event) {
    event.preventDefault();
    const targetUser = event.target.value.toLowerCase();
    if (targetUser.length !== 0) {
      setFilteredData(
        data?.filter((list) => list.name.toLowerCase().includes(targetUser))
      );
      console.log(
        data?.filter((list) => list.name.toLowerCase().includes(targetUser))
      );
    } else {
      setFilteredData(data);
      console.log(data);
    }
  }

  return (
    <div className="mb-4">
      <div className="">
        <form className="gap-4 flex">
          <input
            placeholder="search"
            className="border-2 p-1 rounded-md"
            type="text"
            id="user"
            name="user"
            onChange={handleChange}
          />
          <IconContext.Provider value={{ color: "green", size: "24px" }}>
            <div className="cursor-pointer w-8 text-center h-8 grid content-center justify-center bg-yellow-300 hover:bg-yellow-200 rounded-lg duration-300" onClick={triggerCreate}>
              <IoCreateOutline />
            </div>
          </IconContext.Provider>
        </form>
      </div>
    </div>
  );
}
