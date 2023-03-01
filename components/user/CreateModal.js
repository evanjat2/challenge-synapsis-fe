import { useState } from "react";
export default function CreateModal({ triggerCreate, triggerToast }) {
  const [state, setState] = useState(false);
  const triggerState = (event) => {
    setState(event);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(
      `https://gorest.co.in/public/v2/users?access-token=8e7b32aea1524898516633d4479a3050724cfeb4b7fc79191227ae6c85ba89b2`,
      {
        method: "POST",
        body: JSON.stringify({
          name: event.target.name.value,
          email: event.target.email.value,
          gender: event.target.gender.value,
          status: event.target.status.value,
        }),
      }
    )
      .then(triggerCreate())
      .then(triggerToast("berhasil menambah user " + event.target.name.value));
  };
  return (
    <div className="w-full h-full inset-0 relative">
      <div className="fixed w-full h-full bg-black opacity-50 grid content-center"></div>
      <div className="fixed translate-x-[-50%] left-[50%] translate-y-[-50%] top-[50%] bg-gray-200 h-fit p-8 rounded-lg max-h-screen overflow-auto">
        <form className="grid gap-4" onSubmit={handleSubmit}>
          <div>
            <p>Name</p>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="rounded-md px-2"
            ></input>
          </div>
          <div>
            <p>Email</p>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="rounded-md px-2"
            ></input>
          </div>
          <div>
            <p>Gender</p>
            <select
              name="gender"
              id="gender"
              defaultValue="male"
              className="rounded-md px-2"
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div>
            <p>Status</p>
            <select
              name="status"
              id="status"
              defaultValue="active"
              className="rounded-md px-2"
            >
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>
          <div className="flex justify-between">
            {!state && (
              <>
                <div
                  className="bg-red-600 text-white font-bold p-1 px-1 rounded-lg hover:scale-110 duration-800 transition cursor-pointer"
                  onClick={() => triggerCreate()}
                >
                  Cancel
                </div>
                <div
                  className="bg-green-600 text-white font-bold p-1 px-1 rounded-lg hover:scale-110 duration-800 transition"
                  onClick={() => triggerState(true)}
                >
                  Add User
                </div>
              </>
            )}

            {state && (
              <>
                <button
                  type="submit"
                  value="Submit"
                  className="bg-green-600 text-white font-bold p-1 px-1 rounded-lg hover:scale-110 duration-800 transition"
                >
                  Confirm
                </button>
                <div
                  className="bg-red-600 text-white font-bold p-1 px-1 rounded-lg hover:scale-110 duration-800 transition cursor-pointer"
                  onClick={() => triggerCreate()}
                >
                  Cancel
                </div>
              </>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
