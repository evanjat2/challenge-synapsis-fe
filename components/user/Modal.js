export default function DeleteModal({ triggerDelete }) {
  return (
    <div className="w-full h-full inset-0 relative">
      <div
        className="fixed w-full h-full bg-black opacity-50 grid content-center"
        onClick={() => triggerDelete()}
      ></div>
      <div className="fixed translate-x-[-50%] left-[50%] translate-y-[-50%] top-[50%] bg-white h-fit">
        Ayooo
      </div>
    </div>
  );
}
