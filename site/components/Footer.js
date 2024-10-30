const Footer = () => {
  return (
    <footer className="relative bg-gray-900 text-white py-10 px-6">
      {/* Wave Effect */}
      <svg
        className="absolute top-0 left-0 right-0 -mt-1 h-8"
        viewBox="0 0 1440 320"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#1a202c"
          fillOpacity="1"
          d="M0,224L48,208C96,192,192,160,288,160C384,160,480,192,576,186.7C672,181,768,139,864,133.3C960,128,1056,160,1152,176C1248,192,1344,192,1392,192L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>

      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between relative z-10 space-y-8 md:space-y-0">
        <div>
          <Link href="/" className="text-2xl font-bold">
            BioTree 
          </Link>
          <p className="text-sm text-gray-400 mt-2">
            &copy; {new Date().getFullYear()} BioTree. All rights reserved.
          </p>
        </div>

        {/* Right Section: Download the App */}
        <div className="flex space-x-6 md:order-2">
          {/* Twitter */}
          <Link
            href="https://twitter.com/yourprofile"
            target="_blank"
            aria-label="Twitter"
            className="relative group text-gray-400 hover:text-[#1DA1F2] transition transform hover:scale-110"
          >
            <span className="absolute inset-0 flex justify-center items-center overflow-visible">
              <span
                className="rounded-full bg-[#1DA1F2] opacity-0 scale-0 transition-transform duration-300 group-hover:opacity-100 group-hover:scale-125"
                style={{ width: '3rem', height: '1.7rem' }}
              ></span>
            </span>
            <svg
              className="h-6 w-7 relative z-2 transition-transform duration-500 group-hover:-translate-y-1 group-hover:text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.949.555-2.002.959-3.127 1.184-.897-.959-2.178-1.558-3.594-1.558-2.723 0-4.927 2.204-4.927 4.917 0 .39.045.765.127 1.124-4.093-.205-7.719-2.165-10.148-5.144-.424.729-.666 1.574-.666 2.476 0 1.71.87 3.214 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.376 4.6 3.414-1.68 1.319-3.809 2.107-6.102 2.107-.39 0-.779-.023-1.17-.067 2.189 1.396 4.768 2.212 7.557 2.212 9.054 0 14.001-7.497 14.001-13.986 0-.21 0-.423-.015-.635.962-.694 1.8-1.562 2.462-2.548l-.047-.02z" />
            </svg>
          </Link>

          {/* GitHub */}
          <Link
            href="https://github.com/subhadipbhowmik/bio-branch"
            target="_blank"
            aria-label="GitHub"
            className="relative group text-gray-400 transition transform hover:scale-110"
          >
            <span className="absolute inset-0 flex justify-center items-center overflow-visible">
              <span
                className="rounded-full bg-[#181717] opacity-0 scale-0 transition-opacity transition-transform duration-300 group-hover:opacity-100 group-hover:scale-150"
                style={{ width: '3rem', height: '1.7rem' }}
              ></span>
            </span>
            <svg
              className="h-6 w-7 relative z-10 transition-transform duration-500 group-hover:-translate-y-1 group-hover:text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.254c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.089-.744.084-.729.084-.729 1.205.084 1.838 1.237 1.838 1.237 1.07 1.835 2.807 1.304 3.492.998.108-.776.418-1.305.762-1.604-2.665-.303-5.467-1.334-5.467-5.93 0-1.31.468-2.381 1.236-3.221-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.241 2.873.118 3.176.77.84 1.236 1.911 1.236 3.221 0 4.609-2.807 5.625-5.479 5.921.43.37.823 1.102.823 2.222v3.293c0 .322.218.694.825.576 4.765-1.588 8.202-6.084 8.202-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </Link>

          {/* LinkedIn */}
          <Link
            href="https://www.linkedin.com/in/shubhadip-bhowmik/"
            target="_blank"
            aria-label="LinkedIn"
            className="relative group text-gray-400 transition transform hover:scale-110"
          >
            <span className="absolute inset-0 flex justify-center items-center overflow-visible">
              <span
                className="rounded-full bg-[#0077B5] opacity-0 scale-0 transition-opacity transition-transform duration-300 group-hover:opacity-100 group-hover:scale-125"
                style={{ width: '3.2rem', height: '1.8rem' }}
              ></span>
            </span>
            <svg
              className="h-6 w-7 relative z-10 transition-transform duration-500 group-hover:-translate-y-1 group-hover:text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M19 0h-14c-2.761 0-5 2.238-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.762

