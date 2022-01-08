import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from "react-toastify";
import OrgInfo from "../comps/OrgInfo";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

function Donation(props) {

    const [formDisplay, setFormDisplay] = useState(false);
    const [orgDisplay, setOrgDisplay] = useState(false);

    const submitHandler = async (e)=>{
      e.preventDefault();
      setTimeout(1000);
      setFormDisplay(false);
      await axios.post
      toast.success("Request Sent Successfully!", {
        position: toast.POSITION.TOP_LEFT,
      });
    }

    const showOrgData = (org)=>{

    }
    

  return (
    <div className="relative">
      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="flex w-full min-h-screen bg-gray-50">
        {/* left part */}
        <div className="w-1/6 bg-rose-400 m-4 rounded-xl shadow-lg flex flex-col text-5xl font-extrabold text-white justify-center items-center space-y-2">
          <h1>D</h1>
          <h1>O</h1>
          <h1>N</h1>
          <h1>A</h1>
          <h1>T</h1>
          <h1>E</h1>
        </div>
        {/* right part */}
        <div className="w-5/6 white m-4 flex flex-col">
          {/* notification area */}
          <div className="w-full bg-transparent rounded-xl justify-between items-center">
            <button
              className="text-md text-white bg-rose-400 px-6 py-3 rounded-xl"
              onClick={() => {
                setFormDisplay(true);
              }}
            >
              + Add My NGO
            </button>
          </div>
          {/* dashboard main */}
          <div className="w-full bg-white rounded-xl h-full mt-4 shadow-lg p-8 flex flex-wrap">
            <div className="w-64 h-64 bg-white drop-shadow-md rounded-xl mr-8 flex flex-col justify-between p-4">
              <div className="bg-rose-400 text-white px-4 py-2 uppercase text-xs rounded-xl w-1/2 flex justify-center">
                education
              </div>
              <div className="text-xl font-bold">DotSlash Community</div>
              <div className="text-sm">
                We are the community of coders based in SVNIT, Surat. DotSlash
                is a hackathon to bring excellent coders together. Please donate
                to us.
              </div>
              <button
                className="bg-rose-400 px-6 py-2 text-white font-thin rounded-xl"
                onClick={showOrgData}
              >
                Know more
              </button>
            </div>
            <div className="w-64 h-64 bg-white drop-shadow-md rounded-xl mr-8 flex flex-col justify-between p-4">
              <div className="bg-rose-400 text-white px-4 py-2 uppercase text-xs rounded-xl w-1/2 flex justify-center">
                education
              </div>
              <div className="text-xl font-bold">IDS VNIT</div>
              <div className="text-sm">
                We are the community of coders based in VNIT, Nagpur. DotSlash
                is hackathon to bring excellent coders together. Please donate
                to us.
              </div>
              <button className="bg-rose-400 px-6 py-2 text-white font-thin rounded-xl">
                Know more
              </button>
            </div>
            <div className="w-64 h-64 bg-white drop-shadow-md rounded-xl mr-8 flex flex-col justify-between p-4">
              <div className="bg-rose-400 text-white px-4 py-2 uppercase text-xs rounded-xl w-1/2 flex justify-center">
                healthcare
              </div>
              <div className="text-xl font-bold">Covid Crypto Relief</div>
              <div className="text-sm">
                We're a community-run fund delivering relief during the Covid
                crisis.
                <br /> #CryptoRelief
              </div>
              <button className="bg-rose-400 px-6 py-2 text-white font-thin rounded-xl">
                Know more
              </button>
            </div>
          </div>
        </div>
      </div>

      {formDisplay && (
        <div className="fixed top-0 left-0 h-screen w-screen bg-white flex flex-col justify-center items-center">
          <button
            className="-mt-16 mb-16 text-xl font-thin"
            onClick={() => {
              setFormDisplay(false);
            }}
          >
            Close
          </button>
          <div className="w-96 bg-rose-400 rounded-xl">
            <form className="flex flex-col p-8 rounded-xl">
              <h1 className="text-xl mb-6 font-bold text-white"> Add My NGO</h1>
              <label className="text-white font-normal">
                Name of the Organization:
              </label>
              <input
                type="text"
                name="orgName"
                className="rounded-xl px-3 py-2 mt-2"
                placeholder="IDS VNIT"
              ></input>
              <label className="text-white mt-2">Type of Organization</label>
              <input
                type="text"
                name="orgType"
                className="rounded-xl px-3 py-2 mt-2"
                placeholder="HEALTHCARE, EDUCATION, DAO, ANIMAL CARE"
              ></input>
              <label className="text-white mt-2">About</label>
              <textarea
                type="text"
                name="orgAbout"
                rows="4"
                className="rounded-xl px-3 py-2 mt-2"
                placeholder="Enter about your organization in 20-25 words."
              ></textarea>
              <label className="text-white mt-2">Organization's website</label>
              <input
                type="text"
                name="orgURL"
                className="rounded-xl px-3 py-2 mt-2"
                placeholder="https://www.instagram.com/mayur.io"
              ></input>
              <button
                className="px-3 py-2 bg-white rounded-xl text-rose-400 mt-4"
                onClick={submitHandler}
              >
                Submit Request
              </button>
            </form>
          </div>
        </div>
      )}

      {/* <OrgInfo /> */}
    </div>
  );
}

export default Donation;
