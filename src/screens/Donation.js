import React, { useState } from 'react';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import confetti from "canvas-confetti";

function Donation(props) {

    const [formDisplay, setFormDisplay] = useState(false);
    const [orgDisplay, setOrgDisplay] = useState(null);
    const [userAdrs, setUserAdrs] = useState("");
    const [isMember, setIsMember] = useState(false);
    const [hash, setHash] = useState("");

    const submitHandler = async (e)=>{
      e.preventDefault();
      setTimeout(1000);
      setFormDisplay(false);
      toast.success("Request Sent Successfully!", {
        position: toast.POSITION.TOP_LEFT,
      });
    }

    const showOrgData = (org)=>{
        setOrgDisplay(org);
    }

    // Don't ever dare to steal this
    const ONECKEY = '7dc60b23-869a-49c1-8632-476146f09ddc';
    
    const handleChange = (e) => {
     setUserAdrs(e.target.value);
    };


    const orgInfo = [
      {
        orgName: "DotSlash Community",
        orgType: "EDUCATION",
        orgURL: "https://hackdotslash.co.in/",
        orgAvatar: "https://i.ibb.co/3d0NZpQ/svnit.jpg",
        orgAdrs: "0x32B4481fC3cd68051aB6d0Ea99fF2d37D57712b7",
        orgBio:
          "We are the community of coders based in SVNIT, Surat. DotSlash is a hackathon to bring excellent coders together. Please donate to us.",
      },

      {
        orgName: "IDS VNIT",
        orgType: "EDUCATION",
        orgURL: "https://vnit.ac.in/",
        orgAvatar: "https://i.ibb.co/6YXqfNt/vnit-ngp.jpg",
        orgAdrs: "0x32B4481fC3cd68051aB6d0Ea99fF2d37D57712b7",
        orgBio:
          "We are the community of coders based in VNIT, Nagpur. DotSlash is hackathon to bring excellent coders together. Please donate to us.",
      },

      {
        orgName: "Covid Crypto Relief",
        orgType: "HEALTHCARE",
        orgURL: "https://cryptorelief.in/",
        orgAvatar: "https://i.ibb.co/MPnY9fC/crypto.png",
        orgAdrs: "0x32B4481fC3cd68051aB6d0Ea99fF2d37D57712b7",
        orgBio:
          "We're a community-run fund delivering relief during the Covid crisis. #CryptoRelief",
      },
    ];



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
          <div className="w-full bg-white rounded-xl h-full mt-4 shadow-lg p-8 flex flex-wrap relative">
            {orgInfo.map((data) => {
              return (
                <div className="w-64 h-64 bg-white drop-shadow-md rounded-xl mr-8 flex flex-col justify-between p-4">
                  <div className="bg-rose-400 text-white px-4 py-2 uppercase text-xs rounded-xl w-1/2 flex justify-center">
                    {data.orgType}
                  </div>
                  <div className="text-xl font-bold">{data.orgName}</div>
                  <div className="text-sm">{data.orgBio}</div>
                  <button
                    className="bg-rose-400 px-6 py-2 text-white font-thin rounded-xl"
                    onClick={() => showOrgData(data)}
                  >
                    Know more
                  </button>
                </div>
              );
            })}

            {orgDisplay && (
              <div className="absolute left-56 border border-black w-3/5 bg-white p-8 flex flex-col items-center">
                <button
                  className="text-rose-400 underline"
                  onClick={() => setOrgDisplay(null)}
                >
                  Close
                </button>
                <div className="flex flex-col items-center mt-6 px-24">
                  <img
                    className="w-24 h-24 rounded-full"
                    src={orgDisplay.orgAvatar}
                    alt="avatar"
                  />
                  <div className="text-2xl font-bold my-2">
                    {orgDisplay.orgName}
                  </div>
                  <div className="bg-rose-400 px-3 py-2 text-xs text-white rounded-xl">
                    {orgDisplay.orgType}
                  </div>
                  <div className="mt-6 text-lg font-semibold">
                    Wallet Address
                  </div>
                  <button
                    className="underline"
                    onClick={() => {
                      toast.success("Address Copied Successfully!", {
                        position: toast.POSITION.TOP_LEFT,
                      });
                    }}
                  >
                    {orgDisplay.orgAdrs}
                  </button>

                  <div className="mt-6 text-lg font-semibold">Website</div>
                  <div className="underline">{orgDisplay.orgURL}</div>
                  <input
                    type="text"
                    name="userAdrs"
                    onChange={handleChange}
                    className="rounded-xl text-xs px-3 py-2 mt-8 border-2 border-black"
                    placeholder="Enter your wallet address"
                  ></input>
                  <button
                    className="px-4 py-2 text-white bg-rose-400 mt-2"
                    onClick={async () => {
                      await axios
                        .post(
                          "https://api.onec.in/api/v1/naas/mintNFT/",
                          {
                            metadata_list: [
                              {
                                public_address: userAdrs,
                                metadata: {
                                  NGO: orgDisplay.orgName,
                                  adrs: userAdrs,
                                  status: 200,
                                  member: true,
                                },
                              },
                            ],
                          },
                          {
                            headers: {
                              "NAAS-APIKEY":
                                "7dc60b23-869a-49c1-8632-476146f09ddc",
                            },
                          }
                        )
                        .then(async (res) => {
                          await new Promise((r) => setTimeout(r, 60000));
                          console.log(res);
                          const nft_id = res.data.nft_ids[0];
                          console.log(nft_id);
                          return await axios.get(
                            `https://api.onec.in/api/v1/naas/fetchTokenId/${nft_id}`,
                            {
                              headers: {
                                "NAAS-APIKEY":
                                  "7dc60b23-869a-49c1-8632-476146f09ddc",
                              },
                            }
                          );
                        })
                        .then(async (res) => {
                          console.log(res);
                          const token_id = res.data.token_id;
                          return await axios.get(
                            `https://api.onec.in/api/v1/naas/getTokenMetadataHash/${token_id}`,
                            {
                              headers: {
                                "NAAS-APIKEY":
                                  "7dc60b23-869a-49c1-8632-476146f09ddc",
                              },
                            }
                          );
                        })
                        .then(async (res) => {
                          const hash = res.data.hash;
                          const nftURL = `https://ipfs.io/ipfs/${hash}`;
                          console.log(nftURL);
                          setHash(nftURL);
                          setIsMember(true);
                          console.log(res);
                          var duration = 5 * 1000;
                          var animationEnd = Date.now() + duration;
                          var defaults = {
                            startVelocity: 30,
                            spread: 360,
                            ticks: 60,
                            zIndex: 0,
                          };

                          function randomInRange(min, max) {
                            return Math.random() * (max - min) + min;
                          }

                          var interval = setInterval(function () {
                            var timeLeft = animationEnd - Date.now();

                            if (timeLeft <= 0) {
                              return clearInterval(interval);
                            }

                            var particleCount = 50 * (timeLeft / duration);
                            
                            confetti(
                              Object.assign({}, defaults, {
                                particleCount,
                                origin: {
                                  x: randomInRange(0.1, 0.3),
                                  y: Math.random() - 0.2,
                                },
                              })
                            );
                            confetti(
                              Object.assign({}, defaults, {
                                particleCount,
                                origin: {
                                  x: randomInRange(0.7, 0.9),
                                  y: Math.random() - 0.2,
                                },
                              })
                            );
                          }, 250);
                        });
                    }}
                  >
                    {" "}
                    Be a Member
                  </button>
                </div>
              </div>
            )}

            {isMember && (
              <div className="absolute left-56 border border-black w-3/5 bg-white p-8 flex flex-col items-center">
                <button
                  className="text-rose-400 underline"
                  onClick={() => {setIsMember(false);setOrgDisplay(null)}}
                >
                  Close
                </button>
                <div className="flex flex-col items-center mt-6 px-24">
                  <div className="text-2xl font-bold my-2">
                    Congratulations!!
                  </div>
                  <div className="">
                   You are now the member of {orgDisplay.orgName || null}.
                  </div>
                  <a href={hash} className="px-4 py-2 text-white bg-rose-400 mt-2">
                    {" "}
                    View My Membership NFT
                  </a>
                </div>
              </div>
            )}
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
    </div>
  );
}

export default Donation;
