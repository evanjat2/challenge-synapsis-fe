import { useState, useEffect } from "react";
import Head from "next/head";

import BlogList from "@/components/blog/BlogList";
import BlogModal from "@/components/blog/BlogModal";
import UserButton from "@/components/user/Button";

export default function Home({}) {
  const [posts, setPosts] = useState();
  const [comments, setComments] = useState();

  const [modalState, setModal] = useState(false);
  const [content, setContent] = useState();
  const [comment, setComment] = useState(comments);
  const getPosts = async () => {
    const posts = await fetch(`https://gorest.co.in/public/v2/posts`).then(
      (res) => res.json()
    );
    const comments = await fetch(
      `https://gorest.co.in/public/v2/comments`
    ).then((res) => res.json());
    setPosts(posts);
    setComments(comments);
  };
  useEffect(() => {
    setComment(comments?.filter((list) => list.post_id == content?.id));
  }, [content]);
  useEffect(() => {
    getPosts();
    console.log(posts);
  }, []);
  return (
    <>
      <Head>
        <title>Synapsis Challenge</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-full bg-gradient-to-b from-blue-900 to-green-800 font-inter">
        <div className="w-full">
          {posts?.map((list) => (
            <div className="pt-4 px-[5%] py-4" key={list.id}>
              <BlogList
                post={list}
                setState={setModal}
                setContent={setContent}
                setComment={setComment}
              />
            </div>
          ))}
        </div>
        <UserButton href="/users/dashboard" content="Show User" />
        <div
          className={
            "fixed inset-[0] duration-400 origin-center transition-all " +
            (modalState == true ? " h-full" : " pointer-events-none h-0")
          }
        >
          <BlogModal
            state={modalState}
            setState={setModal}
            content={content}
            comment={comment}
          />
        </div>
      </div>
    </>
  );
}

// export async function getStaticProps() {
//   Call an external API endpoint to get posts.
//   You can use any data fetching library
//   const resPosts = await fetch("https://gorest.co.in/public/v2/posts");
//   const posts = await resPosts.json();

//   const resComments = await fetch("https://gorest.co.in/public/v2/comments");
//   const comments = await resComments.json();
//   By returning { props: { posts } }, the Blog component
//   will receive `posts` as a prop at build time
//   return {
//     props: {
//       posts,
//       comments,
//     },
//   };
// }
