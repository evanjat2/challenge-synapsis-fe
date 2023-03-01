import Link from "next/link";
import { useState } from "react";
export default function BlogList({
  post,
  setState,
  setContent,
}) {
  const triggerModal = () => {
    setState(true);
    setContent(post);
  };
  return (
    <div className="bg-white p-2 rounded-lg">
      <div className="text-xl h-8 text-ellipsis truncate ...">{post.title}</div>
      <div className="whitespace-normal h-12 overflow-hidden">{post.body}</div>
      <p>{post.id}</p>
      <p className="text-red-400 cursor-pointer" onClick={() => triggerModal()}>
        Read more...
      </p>
    </div>
  );
}
