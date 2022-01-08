function Dashboard(props) {
    return (
      <div className="flex w-full min-h-screen bg-gray-50">
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
          <div className="w-full bg-white rounded-xl h-full mt-4 shadow-lg p-8 flex flex-wrap">
            <div className="h-20 w-40 rounded-xl bg-white drop-shadow-md">
              md
            </div>
          </div>
        </div>
      </div>
    );
}

export default Dashboard;