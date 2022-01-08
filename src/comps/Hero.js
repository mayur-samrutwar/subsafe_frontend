export default function Hero ()  {
  return (
    <div className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0">
      <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
        <svg
          className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
          viewBox="0 0 100 100"
          fill="currentColor"
          preserveAspectRatio="none slice"
        >
          <path d="M50 0H100L50 100H0L50 0Z" />
        </svg>
        <img
          className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
          src="https://cdn.dribbble.com/users/103909/screenshots/15934785/media/a1e15e9c2a005dd5f560e2b828d42a21.png"
          alt=""
        />
      </div>
      <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
        <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-white uppercase rounded-full bg-rose-400">
            Hub of Benefits
          </p>
          <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
            Manage all your
            <br className="hidden md:block" />
            subscriptions{" "}
            <span className="inline-block text-rose-400">like pro</span>
          </h2>
          <p className="pr-5 mb-5 text-base text-gray-700 md:text-lg">
            Manage all your subscriptions at one place. Cancel the unwanted
            subscriptions and save money. You can{" "}
            <span className="underline">invest the money or(and )donate to various NGOs.</span>
          </p>
          <div className="flex items-center">
            <a
              href="/auth"
              authType="sign-up"
              className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-rose-400 hover:bg-rose-700 focus:shadow-outline focus:outline-none"
            >
              Get started
            </a>
            <a
              href="/donate"
              aria-label=""
              className="inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-rose-700"
            >
              Donate to NGOs
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
