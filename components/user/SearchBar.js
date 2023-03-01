import { useState, useEffect } from "react";
import Link from "next/link";

export default function SearchBar({ data, setFilteredData }) {
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
        </form>
      </div>
    </div>
  );
}
