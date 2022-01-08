import React,{ useState } from 'react';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function Dashboard(props) {


  const [isNewUser, setisNewUser] = useState(true);


  const submitHandler = (e)=>{
    e.preventDefault();
    setisNewUser(false);
    toast.success("Data Analyzed Successfully", {
      position: toast.POSITION.TOP_LEFT,
    });
  }

    return (
      <div className="flex w-full min-h-screen bg-gray-50">
        <ToastContainer />
        {/* left part */}
        <div className="w-1/6 bg-rose-400 m-4 rounded-xl shadow-lg flex flex-col items-center justify-center space-y-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-10 h-10 text-rose-400 p-2 bg-white -mt-16 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <button className="bg-white px-6 py-3 flex justify-center items-center w-28 rounded-xl text-rose-400 font-semibold border border-white">
            Dashboard
          </button>
          <button className="text-white px-6 py-3 flex justify-center items-center w-28 rounded-xl bg-rose-400 font-semibold border border-white">
            Profile
          </button>
          <button className="text-white px-6 py-3 flex justify-center items-center w-28 rounded-xl bg-rose-400 font-semibold border border-white">
            Settings
          </button>
          <a
            href="/invest"
            className="text-white px-6 py-3 flex justify-center items-center w-28 rounded-xl bg-rose-400 font-semibold border border-white"
          >
            Invest
          </a>
          <a
            href="/donate"
            className="text-white px-6 py-3 flex justify-center items-center w-28 rounded-xl bg-rose-400 font-semibold border border-white"
          >
            Donate
          </a>
        </div>
        {/* right part */}
        <div className="w-5/6 white m-4 flex flex-col">
          {/* notification area */}
          <div className="w-full bg-white rounded-xl h-20 shadow-lg flex justify-between items-center">
            <h1 className="ml-8 text-md">Mayur Samrutwar</h1>
            <div className="mr-8 bg-gray-100 m-2 flex justify-center items-center h-12 w-12 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
              </svg>
            </div>
          </div>
          {/* dashboard main */}
          <div className="w-full bg-white rounded-xl h-full mt-4 shadow-lg p-8 flex flex-wrap justify-center items-center">
            {/* <div className=" flex">
              <div className="h-20 w-40 rounded-xl bg-white drop-shadow-md flex mr-8">
                md
              </div>
              <div className="h-20 w-40 rounded-xl bg-white drop-shadow-md flex mr-8">
                md
              </div>
              <div className="h-20 w-40 rounded-xl bg-white drop-shadow-md flex mr-8">
                md
              </div>
            </div> */}

            {isNewUser && (
              <div className="w-96 rounded-xl bg-white drop-shadow-md flex justify-center items-center">
                <form className="flex flex-col rounded-xl my-8">
                  <label className="text-black mt-2">Select Your Bank:</label>
                  <select className="px-3 py-2 border-2 border-black rounded-xl mt-2">
                    <option value="hdfc">HDFC Bank</option>
                    <option value="icici">ICICI Bank</option>
                    <option value="sbi">State Bank of India</option>
                    <option value="boi">Bank of India</option>
                  </select>
                  <label className="text-black mt-2">
                    Enter Account Number:
                  </label>
                  <input
                    type="number"
                    name="userAcc"
                    className="rounded-xl px-3 py-2 mt-2 border-2 border-black"
                    placeholder="123456"
                  ></input>
                  <button
                    className="px-3 py-2 bg-black rounded-xl text-white mt-4"
                    onClick={submitHandler}
                  >
                    Analyze My Data
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    );
}

export default Dashboard;