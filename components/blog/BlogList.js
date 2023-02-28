import Link from "next/link";
import { useState } from "react";
export default function BlogList({ post }) {
  const [modalState, setModal] = useState(false);
  const triggerModal = () => {
    setModal(!modalState);
    console.log(modalState);
  };
  return (
    <div className="">
      <div className="text-xl h-8 text-ellipsis truncate ...">{post.title}</div>
      <div className="whitespace-normal h-12 overflow-hidden">{post.body}</div>
      <p className="text-red-400 cursor-pointer" onClick={()=> triggerModal()}>Read more...</p>
    </div>
  );
}
