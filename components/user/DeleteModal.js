import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function DeleteModal({
  triggerDelete,
  triggerToast,
  choosedID,
}) {
  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(
      `https://gorest.co.in/public/v2/users/${choosedID}?access-token=8e7b32aea1524898516633d4479a3050724cfeb4b7fc79191227ae6c85ba89b2`,
      {
        method: "DELETE",
      }
    ).then(triggerDelete()).then(triggerToast("berhasil delete ID " + choosedID));
    console.log("berhasil delete " + choosedID);
  };
  return (
    <div className="w-full h-full inset-0 fixed relative">
      
      <div className="w-full h-full bg-black opacity-50 grid content-center fixed"></div>
      <div className="fixed translate-x-[-50%] left-[50%] translate-y-[-50%] top-[50%] bg-white rounded-lg py-8 h-fit w-[20%] text-center">
        <p>Confirm Delete {choosedID}?</p>
        <div className="flex gap-8 mt-2 w-full justify-items-center justify-center rounded-lg">
          <button
            type="submit"
            className="bg-red-500 p-2 rounded-md cursor-pointer"
            onClick={handleSubmit}
          >
            Yes
          </button>
          <p
            className="bg-blue-600 p-2 rounded-md cursor-pointer"
            onClick={() => triggerDelete()}
          >
            No
          </p>
        </div>
      </div>
    </div>
  );
}
