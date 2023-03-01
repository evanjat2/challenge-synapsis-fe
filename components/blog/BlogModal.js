export default function BlogModal({ state, setState, content, comment }) {
  const triggerModal = () => {
    setState(0);
  };
  return (
    state == 1 && (
      <div className="w-full h-full inset-0 relative overflow-y-auto">
        <div className="fixed w-full h-full bg-black opacity-50 grid content-center"></div>
        <div className="text-black rounded-lg bg-white absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] h-[90%] overflow-y-auto w-[90%] px-4 py-8">
          <p
            className="cursor-pointer text-red-400"
            onClick={() => triggerModal()}
          >
            Close
          </p>
          <p className="pt-4">{content.title}</p>
          <p className="pt-2">{content.body}</p>
          <div className="pt-8 px-4">Comments</div>
          <div className="h-40 py-2 bg-blue-100 px-2 overflow-auto">
            {comment[0] &&
              comment.map((list) => (
                <div className="py-2">
                  <p className="px-2">{list.name}</p>
                  <p className="bg-white w-full px-2 rounded-lg">
                    {list.body}{" "}
                  </p>
                </div>
              ))}
            {!comment[0] && <div className="py-2 px-2">Tidak ada komentar</div>}
          </div>
        </div>
      </div>
    )
  );
}
