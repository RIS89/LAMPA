import React from "react";
import logo from "../../img/logo-lampa.svg";
import Watch from "../Watch/Watch";

const Header = () => {
  return (
    <div className="w-full h-12 bg-transparent flex items-center justify-between">
      <img src={logo} alt="logo" className="w-10 h-10 bg-transparent ml-2.5" />
      <div className="flex items-center ">
        <div className="flex  gap-x-7 mr-6">
          <svg
            width="23"
            height="22"
            viewBox="0 0 23 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-zinc-50 hover:stroke-zinc-900 hover:bg-zinc-50  w-8 h-8 block"
          >
            <circle
              cx="9.9964"
              cy="9.63489"
              r="8.43556"
              strokeWidth="2.4"
            ></circle>
            <path
              d="M20.7768 20.4334L18.2135 17.8701"
              strokeWidth="2.5"
              strokeLinecap="round"
            ></path>
          </svg>
          <svg
            width="24"
            height="23"
            viewBox="0 0 24 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-zinc-50 hover:stroke-zinc-900 hover:bg-zinc-50  w-8 h-8"
          >
            <path
              d="M15.6162 7.10981L15.8464 7.55198L16.3381 7.63428L22.2841 8.62965C22.8678 8.72736 23.0999 9.44167 22.6851 9.86381L18.4598 14.1641L18.1104 14.5196L18.184 15.0127L19.0748 20.9752C19.1622 21.5606 18.5546 22.002 18.025 21.738L12.6295 19.0483L12.1833 18.8259L11.7372 19.0483L6.34171 21.738C5.81206 22.002 5.20443 21.5606 5.29187 20.9752L6.18264 15.0127L6.25629 14.5196L5.9069 14.1641L1.68155 9.86381C1.26677 9.44167 1.49886 8.72736 2.08255 8.62965L8.02855 7.63428L8.52022 7.55198L8.75043 7.10981L11.5345 1.76241C11.8078 1.23748 12.5589 1.23748 12.8322 1.76241L15.6162 7.10981Z"
              strokeWidth="2.2"
            ></path>
          </svg>

          <svg
            width="25"
            height="23"
            viewBox="0 0 25 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-zinc-50 hover:stroke-zinc-900 hover:bg-zinc-50  w-8 h-8"
          >
            <path
              d="M1.51904 7.75323V5C1.51904 2.79086 3.3099 1 5.51904 1H8.46433"
              strokeWidth="2.7"
              strokeLinecap="round"
            ></path>
            <path
              d="M1.51904 14.7305V17.4837C1.51904 19.6928 3.3099 21.4837 5.51904 21.4837H8.46433"
              strokeWidth="2.7"
              strokeLinecap="round"
            ></path>
            <path
              d="M23.2815 7.75323V5C23.2815 2.79086 21.4906 1 19.2815 1H16.3362"
              strokeWidth="2.7"
              strokeLinecap="round"
            ></path>
            <path
              d="M23.2815 14.7305V17.4837C23.2815 19.6928 21.4906 21.4837 19.2815 21.4837H16.3362"
              strokeWidth="2.7"
              strokeLinecap="round"
            ></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 29.96 122.88"
            className="stroke-zinc-50 w-8 h-8 fill-zinc-50"
          >
            <path d="M15,0A15,15,0,1,1,0,15,15,15,0,0,1,15,0Zm0,92.93a15,15,0,1,1-15,15,15,15,0,0,1,15-15Zm0-46.47a15,15,0,1,1-15,15,15,15,0,0,1,15-15Z" />
          </svg>
        </div>
        <Watch />
      </div>
    </div>
  );
};

export default Header;
