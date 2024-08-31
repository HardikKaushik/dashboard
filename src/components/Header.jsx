import React from "react";

export default function Header() {
  return (
    <div>
      <header class="text-gray-600 body-font sm:mt-0 -mt-10 border-b-2">
        <div class="lg:w-[1200px] md:w-[744px]  mx-12 sm:mx-auto flex flex-wrap p-2 sm:p-3 lg:mr-10  flex-row md:flex-row items-center">
          <nav class="md:mr-auto md:ml-10 lg:ml-0 md:py-1 md:pl-4 lg:pl-0  md:border-gray-400	flex flex-wrap items-center text-base justify-center">
            <a class="flex title-font font-medium items-center text-gray-900  md:mb-0">
              <div class="relative w-12 md:w-[240px] lg:w-[343px] mt-0 md:mt-0">
                <input
                  type="text"
                  class="w-full hidden sm:block py-2 pl-4 pr-4 text-gray-300 bg-white border rounded-md   focus:border-blue-400  focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-black"
                  placeholder="Search"
                />
                <input
                  type="text"
                  class="w-28  sm:hidden pl-6 border-none text-gray-300 bg-white    "
                />

                <span class="absolute inset-y-0 sm:right-0 flex items-center pr-3">
                  <svg
                    class="w-5 h-5 text-gray-400"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </span>
              </div>
            </a>
          </nav>
          <div class="flex -mt-8 sm:mt-0 md:mr-8 lg:mr-14 sm:space-x-0 md:mx-0 mx-[120px] space-x-6 items-center ">
            <button
              class=" sm:mx-6  text-gray-600 transition-colors duration-300 transform  dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-400 focus:text-gray-700 dark:focus:text-gray-400 focus:outline-none"
              aria-label="show notifications"
            >
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.5015 22C13.8066 22 14.8745 21.0769 14.8745 19.9487H10.1284C10.1284 20.4928 10.3784 21.0145 10.8235 21.3992C11.2685 21.7839 11.8721 22 12.5015 22ZM19.6205 15.8462V10.7179C19.6205 7.56923 17.6747 4.93333 14.2812 4.2359V3.53846C14.2812 2.68718 13.4863 2 12.5015 2C11.5167 2 10.7217 2.68718 10.7217 3.53846V4.2359C7.3164 4.93333 5.38238 7.55897 5.38238 10.7179V15.8462L3.85177 17.1692C3.10427 17.8154 3.62634 18.9231 4.68233 18.9231H20.3087C21.3647 18.9231 21.8987 17.8154 21.1512 17.1692L19.6205 15.8462Z"
                  fill="#B2B2B2"
                />
                <circle
                  cx="17.5"
                  cy="7"
                  r="4.5"
                  fill="#FF5151"
                  stroke="white"
                />
              </svg>
            </button>
            <button
              class=" sm:mx-4 text-gray-600 transition-colors duration-300 transform  dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-400 focus:text-gray-700 dark:focus:text-gray-400 focus:outline-none"
              aria-label="show notifications"
            >
              <svg
                width="19"
                height="18"
                viewBox="0 0 19 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.5 2.35403C0.5 1.72971 0.737053 1.13095 1.15901 0.689481C1.58097 0.248014 2.15326 0 2.75 0L16.25 0C16.8467 0 17.419 0.248014 17.841 0.689481C18.2629 1.13095 18.5 1.72971 18.5 2.35403V11.7702C18.5 12.3945 18.2629 12.9933 17.841 13.4347C17.419 13.8762 16.8467 14.1242 16.25 14.1242H5.46575C5.16741 14.1243 4.8813 14.2483 4.67037 14.4691L1.46075 17.8271C1.38215 17.9095 1.28193 17.9657 1.17279 17.9886C1.06365 18.0114 0.950486 17.9999 0.847624 17.9554C0.744763 17.9109 0.656827 17.8355 0.594947 17.7387C0.533067 17.6419 0.500024 17.5281 0.5 17.4116V2.35403ZM6.125 7.0621C6.125 6.74994 6.00647 6.45056 5.7955 6.22983C5.58452 6.00909 5.29837 5.88509 5 5.88509C4.70163 5.88509 4.41548 6.00909 4.2045 6.22983C3.99353 6.45056 3.875 6.74994 3.875 7.0621C3.875 7.37427 3.99353 7.67365 4.2045 7.89438C4.41548 8.11511 4.70163 8.23912 5 8.23912C5.29837 8.23912 5.58452 8.11511 5.7955 7.89438C6.00647 7.67365 6.125 7.37427 6.125 7.0621ZM10.625 7.0621C10.625 6.74994 10.5065 6.45056 10.2955 6.22983C10.0845 6.00909 9.79837 5.88509 9.5 5.88509C9.20163 5.88509 8.91548 6.00909 8.7045 6.22983C8.49353 6.45056 8.375 6.74994 8.375 7.0621C8.375 7.37427 8.49353 7.67365 8.7045 7.89438C8.91548 8.11511 9.20163 8.23912 9.5 8.23912C9.79837 8.23912 10.0845 8.11511 10.2955 7.89438C10.5065 7.67365 10.625 7.37427 10.625 7.0621ZM14 8.23912C14.2984 8.23912 14.5845 8.11511 14.7955 7.89438C15.0065 7.67365 15.125 7.37427 15.125 7.0621C15.125 6.74994 15.0065 6.45056 14.7955 6.22983C14.5845 6.00909 14.2984 5.88509 14 5.88509C13.7016 5.88509 13.4155 6.00909 13.2045 6.22983C12.9935 6.45056 12.875 6.74994 12.875 7.0621C12.875 7.37427 12.9935 7.67365 13.2045 7.89438C13.4155 8.11511 13.7016 8.23912 14 8.23912Z"
                  fill="#B2B2B2"
                />
              </svg>
            </button>

            <button
              type="button"
              class="flex items-center px-2 sm:px-4 focus:outline-none"
              aria-label="toggle profile dropdown"
            >
              <div class="w-8 h-8 overflow-hidden border-2 border-gray-400 rounded-full">
                <img
                  class="object-cover w-12 h-12 rounded-full"
                  src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&h=764&q=100"
                  alt=""
                />
              </div>

              <h3 class="sm:mx-4  hidden sm:block text-gray-900 font-semibold  ">
                Khatab wedaa
              </h3>
              <svg
                width="15"
                height="7"
                viewBox="0 0 15 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mx-4 sm:mx-0"
              >
                <path
                  d="M1.5 1L7.5 6L13.5 1"
                  stroke="#737898"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}
