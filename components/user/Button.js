import Link from "next/link";

export default function Button({ href, content }) {
  return (
    <div className="fixed lg:top-6 lg:right-6 bottom-4 right-[50%] translate-x-[50%] lg:translate-x-0 lg:opacity-50 hover:opacity-100 w-[200px] h-fit">
      <Link href={href}>
        <div className="bg-yellow-300 rounded-lg p-2 text-center animate-jumping lg:animate-wiggle hover:animate-none cursor-pointer w-full">
          {content}
        </div>
      </Link>
    </div>
  );
}
