import React,{ useState, useEffect } from 'react';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import axios from "axios";


export default function Dashboard(props) {

  // const [transactionData, setTransactionData] = useState([]); 
  // useEffect(()=>{
  //   axios
  //     .get("http://localhost:5000/user/msamrutwar9@gmail.com")
  //     .then((response) => {
  //       setTransactionData(response.data);
  //     });
  // }, [])

  const [isNewUser, setisNewUser] = useState(true);
  const [vendors, setVendors] = useState(["NETFL", "SPOTI"]);
  const [isModal, setisModal] = useState(null);

function cancelSubHandler(){
  
}


function subRemoveHandler(v){
  console.log(v)
  const index = vendors.indexOf(v);
  if (index > -1) {
    console.log(vendors.splice(index, 1));
    // eslint-disable-next-line no-unused-expressions
    console.log(vendors);
        toast.success("Vendor Removed Successfully", {
          position: toast.POSITION.TOP_LEFT,
        });
        setisModal(null);
  }
}


const transactionDetails = [
        {
          transactionID: "NETFLIX123",
          transactionAmount: 1000,
          _id: "61d97df01a8890e8021fb2c5",
        },

        {
          transactionID: "SPOTIFY123",
          transactionAmount: 100,
          _id: "61d97df01a8890e8021fb2c6",
        },

        {
          transactionID: "OTHER123",
          transactionAmount: 500,

          _id: "61d97df01a8890e8021fb2c7",
        },
      ]


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
            Transactions
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
        <div className="w-5/6 white m-4 flex flex-col relative">
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
          <div className="w-full bg-white rounded-xl h-full mt-4 shadow-lg p-8 flex flex-wrap justify-center relative">
            {!isNewUser && (
              <div className=" flex flex-col items-center">
                <div className="text-3xl font-bold mb-16">
                  Active Subscription
                </div>
                <div className="flex mt-8">
                  {transactionDetails.map((data, index) => {
                    if (vendors.includes(data.transactionID.slice(0, 5))) {
                      return (
                        <div
                          key={index}
                          className="w-64 p-4 mr-8 bg-white drop-shadow-md flex flex-col"
                          onClick={() => {
                            setisModal(Object.entries(data));
                          }}
                        >
                          <div>
                            Transaction ID:
                            <span className="underline">
                              {data.transactionID}
                            </span>
                          </div>
                          <div className="">
                            Transaction Amount:{" "}
                            <span className="underline">
                              Rs.{data.transactionAmount}
                            </span>
                          </div>
                        </div>
                      );
                    }
                  })}
                </div>
              </div>
            )}

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

            {isModal && (
              <div className="absolute left-80 top-40 border border-black w-1/2 h-1/2 bg-white p-8 flex flex-col items-center">
                <button className="text-rose-400 underline"onClick={() => setisModal(null)}>Close</button>
                {console.log(isModal)}
                <div className="mt-4">Vendor: {isModal[0][1].slice(0, 5)}</div>
                <div>Transaction ID: {isModal[2][1]}</div>
                <div>Transaction Amount:Rs {isModal[1][1]}</div>
                <div className="flex flex-col mt-8 space-y-2">
                  <button className="px-3 py-2 bg-rose-400 text-white" onClick={cancelSubHandler}>Cancel Subscription</button>
                  <button className="px-3 py-2 bg-white border border-rose-400 text-rose-400" onClick={()=>subRemoveHandler(isModal[0][1].slice(0, 5))}>This is not a subscription</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
}