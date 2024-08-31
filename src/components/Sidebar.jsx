import React, { useState } from "react";
import logo from "../assets/logo.png";
import logotab  from "../assets/tab.png"

export default function Sidebar() {
  const [Show, setshow] = useState(false);
  const slider = () => {
    setshow(!Show);
  };
  return (
    <>
      <div>
        <aside class=" hidden lg:flex lg:fixed flex-col w-64 h-screen px-5 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700">
          <a href="#">
            <img class="w-auto h-[38px] mx-auto" src={logo} alt="" />
          </a>

          <div class="flex flex-col justify-between flex-1 mt-6">
            <nav class="-mx-3 space-y-12 ">
              <div class="space-y-8 ">
                <label class="px-3  text-xs text-gray-500 uppercase dark:text-gray-400">
                  Main Menu
                </label>

                <a
                  class="flex items-center px-4 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                  href="#"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 10H8V0H0V10ZM0 18H8V12H0V18ZM10 18H18V8H10V18ZM10 0V6H18V0H10Z"
                      fill="#FF5151"
                    />
                  </svg>

                  <span class="mx-4 text-[16px] text-[#FF5151] font-medium">
                    Dashboard
                  </span>
                </a>

                <a
                  class="flex items-center px-4 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                  href="#"
                >
                  <svg
                    width="18"
                    height="16"
                    viewBox="0 0 18 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 4C2 4.79112 2.2346 5.56448 2.67412 6.22228C3.11365 6.88008 3.73836 7.39277 4.46927 7.69552C5.20017 7.99827 6.00444 8.07748 6.78036 7.92314C7.55628 7.7688 8.26902 7.38784 8.82842 6.82843C9.38784 6.26902 9.7688 5.55628 9.92314 4.78036C10.0775 4.00444 9.99827 3.20017 9.69552 2.46927C9.39277 1.73836 8.88008 1.11365 8.22228 0.674121C7.56448 0.234596 6.79112 0 6 0C4.93913 0 3.92172 0.421427 3.17157 1.17157C2.42143 1.92172 2 2.93913 2 4Z"
                      fill="#B2B2B2"
                    />
                    <rect y="10" width="12" height="6" rx="3" fill="#B2B2B2" />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M16 4H14V6L12 6V8H14V10H16V8H18V6L16 6V4Z"
                      fill="#B2B2B2"
                    />
                  </svg>

                  <span class="mx-4 text-[16px] font-medium">Recruitment</span>
                </a>
                <a
                  class="flex items-center px-4 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                  href="#"
                >
                  <svg
                    width="16"
                    height="18"
                    viewBox="0 0 16 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.2222 1.8H12.4444V0H10.6667V1.8H5.33333V0H3.55556V1.8H1.77778C0.797333 1.8 0 2.6073 0 3.6V16.2C0 17.1927 0.797333 18 1.77778 18H14.2222C15.2027 18 16 17.1927 16 16.2V3.6C16 2.6073 15.2027 1.8 14.2222 1.8ZM13.3333 15.3H8V9.9H13.3333V15.3ZM14.2222 6.3H1.77778V4.5H14.2222V6.3Z"
                      fill="#B2B2B2"
                    />
                  </svg>

                  <span class="mx-4 text-[16px] text-[#686868] font-medium">Schedule</span>
                </a>

                <a
                  class="flex items-center px-4 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                  href="#"
                >
                  <svg
                    width="18"
                    height="15"
                    viewBox="0 0 18 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 3C12 3.79565 11.6839 4.55871 11.1213 5.12132C10.5587 5.68393 9.79565 6 9 6C8.20435 6 7.44129 5.68393 6.87868 5.12132C6.31607 4.55871 6 3.79565 6 3C6 2.20435 6.31607 1.44129 6.87868 0.87868C7.44129 0.316071 8.20435 0 9 0C9.79565 0 10.5587 0.316071 11.1213 0.87868C11.6839 1.44129 12 2.20435 12 3Z"
                      fill="#B2B2B2"
                    />
                    <path
                      d="M17 5C17 5.53043 16.7893 6.03914 16.4142 6.41421C16.0391 6.78929 15.5304 7 15 7C14.4696 7 13.9609 6.78929 13.5858 6.41421C13.2107 6.03914 13 5.53043 13 5C13 4.46957 13.2107 3.96086 13.5858 3.58579C13.9609 3.21071 14.4696 3 15 3C15.5304 3 16.0391 3.21071 16.4142 3.58579C16.7893 3.96086 17 4.46957 17 5Z"
                      fill="#B2B2B2"
                    />
                    <path
                      d="M5 5C5 5.53043 4.78929 6.03914 4.41421 6.41421C4.03914 6.78929 3.53043 7 3 7C2.46957 7 1.96086 6.78929 1.58579 6.41421C1.21071 6.03914 1 5.53043 1 5C1 4.46957 1.21071 3.96086 1.58579 3.58579C1.96086 3.21071 2.46957 3 3 3C3.53043 3 4.03914 3.21071 4.41421 3.58579C4.78929 3.96086 5 4.46957 5 5Z"
                      fill="#B2B2B2"
                    />
                    <path
                      d="M15 15V12C15.0014 10.9833 14.7433 9.98303 14.25 9.094C14.6933 8.98054 15.1568 8.96984 15.6049 9.06272C16.053 9.15559 16.474 9.34959 16.8357 9.62991C17.1974 9.91023 17.4903 10.2695 17.6921 10.6802C17.8939 11.091 17.9992 11.5424 18 12V15H15Z"
                      fill="#B2B2B2"
                    />
                    <path
                      d="M3.75 9.09398C3.25675 9.98303 2.9986 10.9833 3 12V15H2.6572e-07V12C-0.000192468 11.542 0.104463 11.0901 0.305947 10.6788C0.507431 10.2676 0.800394 9.90791 1.16238 9.6274C1.52437 9.34688 1.94578 9.15296 2.39431 9.0605C2.84284 8.96804 3.30658 8.97949 3.75 9.09398Z"
                      fill="#B2B2B2"
                    />
                    <rect
                      x="5"
                      y="8"
                      width="8"
                      height="7"
                      rx="3"
                      fill="#B2B2B2"
                    />
                  </svg>

                  <span class="mx-4 text-[16px] text-[#686868] font-medium">Employee</span>
                </a>

                <a
                  class="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                  href="#"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 3C7.032 3 3 7.032 3 12C3 16.968 7.032 21 12 21C16.968 21 21 16.968 21 12C21 7.032 16.968 3 12 3ZM8.4 16.95C7.80326 16.95 7.23097 16.7129 6.80901 16.291C6.38705 15.869 6.15 15.2967 6.15 14.7C6.15 14.1033 6.38705 13.531 6.80901 13.109C7.23097 12.6871 7.80326 12.45 8.4 12.45C8.99674 12.45 9.56903 12.6871 9.99099 13.109C10.4129 13.531 10.65 14.1033 10.65 14.7C10.65 15.2967 10.4129 15.869 9.99099 16.291C9.56903 16.7129 8.99674 16.95 8.4 16.95ZM9.75 8.4C9.75 7.80326 9.98705 7.23097 10.409 6.80901C10.831 6.38705 11.4033 6.15 12 6.15C12.5967 6.15 13.169 6.38705 13.591 6.80901C14.0129 7.23097 14.25 7.80326 14.25 8.4C14.25 8.99674 14.0129 9.56903 13.591 9.99099C13.169 10.4129 12.5967 10.65 12 10.65C11.4033 10.65 10.831 10.4129 10.409 9.99099C9.98705 9.56903 9.75 8.99674 9.75 8.4ZM15.6 16.95C15.0033 16.95 14.431 16.7129 14.009 16.291C13.5871 15.869 13.35 15.2967 13.35 14.7C13.35 14.1033 13.5871 13.531 14.009 13.109C14.431 12.6871 15.0033 12.45 15.6 12.45C16.1967 12.45 16.769 12.6871 17.191 13.109C17.6129 13.531 17.85 14.1033 17.85 14.7C17.85 15.2967 17.6129 15.869 17.191 16.291C16.769 16.7129 16.1967 16.95 15.6 16.95Z"
                      fill="#B2B2B2"
                    />
                  </svg>

                  <span class="mx-4 text-[16px] text-[#686868] font-medium">Department</span>
                </a>
              </div>

              <div class="space-y-2 ">
                <label class="px-3 text-xs text-gray-500 uppercase dark:text-gray-400">
                  Other
                </label>

                <a
                  class="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                  href="#"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 3C7.0374 3 3 7.0374 3 12V15.7287C3 16.6503 3.8073 17.4 4.8 17.4H5.7C5.93869 17.4 6.16761 17.3052 6.3364 17.1364C6.50518 16.9676 6.6 16.7387 6.6 16.5V11.8713C6.6 11.6326 6.50518 11.4037 6.3364 11.2349C6.16761 11.0661 5.93869 10.9713 5.7 10.9713H4.8828C5.3832 7.4883 8.3802 4.8 12 4.8C15.6198 4.8 18.6168 7.4883 19.1172 10.9713H18.3C18.0613 10.9713 17.8324 11.0661 17.6636 11.2349C17.4948 11.4037 17.4 11.6326 17.4 11.8713V17.4C17.4 18.3927 16.5927 19.2 15.6 19.2H13.8V18.3H10.2V21H15.6C17.5854 21 19.2 19.3854 19.2 17.4C20.1927 17.4 21 16.6503 21 15.7287V12C21 7.0374 16.9626 3 12 3Z"
                      fill="#B2B2B2"
                    />
                  </svg>

                  <span class="px-4 text-[16px] text-[#686868] font-medium">Support</span>
                </a>

                <a
                  class="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                  href="#"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-5 h-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>

                  <span class="px-4 text-[16px] text-[#686868] font-medium">Settings</span>
                </a>
              </div>
            </nav>
          </div>
        </aside>

        <aside class="md:flex lg:hidden md:fixed hidden flex-col items-center w-16 h-screen py-8 overflow-y-auto bg-white border-r rtl:border-l rtl:border-r-0 dark:bg-gray-900 dark:border-gray-700">
          <nav class="flex flex-col flex-1 space-y-6">
          <a href="#">
            <img class="w-auto h-[40px] p-2 mx-auto" src={logotab} alt="" />
          </a>

            <a
              href="#"
              class="p-1.5 text-gray-700 focus:outline-nones transition-colors duration-200 rounded-lg dark:text-gray-200 dark:hover:bg-gray-800 hover:bg-gray-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
            </a>

            <a
              href="#"
              class="p-1.5 text-gray-700 focus:outline-nones transition-colors duration-200 rounded-lg dark:text-gray-200 dark:hover:bg-gray-800 hover:bg-gray-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
                />
              </svg>
            </a>

            <a
              href="#"
              class="p-1.5 text-gray-700 focus:outline-nones transition-colors duration-200 rounded-lg dark:text-gray-200 dark:hover:bg-gray-800 hover:bg-gray-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75"
                />
              </svg>
            </a>

            <a
              href="#"
              class="p-1.5 text-gray-700 focus:outline-nones transition-colors duration-200 rounded-lg dark:text-gray-200 dark:hover:bg-gray-800 hover:bg-gray-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5"
                />
              </svg>
            </a>

            <a
              href="#"
              class="p-1.5 text-gray-700 focus:outline-nones transition-colors duration-200 rounded-lg dark:text-gray-200 dark:hover:bg-gray-800 hover:bg-gray-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                />
              </svg>
            </a>
          </nav>

          <div class="flex flex-col space-y-6">
            <a
              href="#"
              class="p-1.5 text-gray-700 focus:outline-nones transition-colors duration-200 rounded-lg dark:text-gray-200 dark:hover:bg-gray-800 hover:bg-gray-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M16.712 4.33a9.027 9.027 0 011.652 1.306c.51.51.944 1.064 1.306 1.652M16.712 4.33l-3.448 4.138m3.448-4.138a9.014 9.014 0 00-9.424 0M19.67 7.288l-4.138 3.448m4.138-3.448a9.014 9.014 0 010 9.424m-4.138-5.976a3.736 3.736 0 00-.88-1.388 3.737 3.737 0 00-1.388-.88m2.268 2.268a3.765 3.765 0 010 2.528m-2.268-4.796a3.765 3.765 0 00-2.528 0m4.796 4.796c-.181.506-.475.982-.88 1.388a3.736 3.736 0 01-1.388.88m2.268-2.268l4.138 3.448m0 0a9.027 9.027 0 01-1.306 1.652c-.51.51-1.064.944-1.652 1.306m0 0l-3.448-4.138m3.448 4.138a9.014 9.014 0 01-9.424 0m5.976-4.138a3.765 3.765 0 01-2.528 0m0 0a3.736 3.736 0 01-1.388-.88 3.737 3.737 0 01-.88-1.388m2.268 2.268L7.288 19.67m0 0a9.024 9.024 0 01-1.652-1.306 9.027 9.027 0 01-1.306-1.652m0 0l4.138-3.448M4.33 16.712a9.014 9.014 0 010-9.424m4.138 5.976a3.765 3.765 0 010-2.528m0 0c.181-.506.475-.982.88-1.388a3.736 3.736 0 011.388-.88m-2.268 2.268L4.33 7.288m6.406 1.18L7.288 4.33m0 0a9.024 9.024 0 00-1.652 1.306A9.025 9.025 0 004.33 7.288"
                />
              </svg>
            </a>

            <a
              href="#"
              class="p-1.5 text-gray-700 focus:outline-nones transition-colors duration-200 rounded-lg dark:text-gray-200 dark:bg-gray-800 bg-gray-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </a>

            <a href="#">
              <img
                class="object-cover w-8 h-8 rounded-full"
                src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=880&h=880&q=100"
                alt=""
              />
            </a>
          </div>
        </aside>

        {Show ? (
          <aside class=" sm:hidden z-40     fixed flex flex-col w-64 h-screen px-5 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700">
            <div className="flex justify-between p-2">
            <a href="#">
            <img class="w-auto h-[38px] mx-auto" src={logo} alt="" />
          </a>
              <button
                onClick={slider}
                class="text-black    font-medium rounded-lg text-sm  "
                type="button"
              >
                <svg
                  class="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
              </button>
            </div>

            <div class="flex flex-col justify-between flex-1 mt-6">
              <nav class="-mx-3 space-y-6 ">
                <div class="space-y-3 ">
                <label class="px-3  text-xs text-gray-500 uppercase dark:text-gray-400">
                  Main Menu
                </label>

                <a
                  class="flex items-center px-4 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                  href="#"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 10H8V0H0V10ZM0 18H8V12H0V18ZM10 18H18V8H10V18ZM10 0V6H18V0H10Z"
                      fill="#FF5151"
                    />
                  </svg>

                  <span class="mx-4 text-[16px] text-[#FF5151] font-medium">
                    Dashboard
                  </span>
                </a>

                <a
                  class="flex items-center px-4 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                  href="#"
                >
                  <svg
                    width="18"
                    height="16"
                    viewBox="0 0 18 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 4C2 4.79112 2.2346 5.56448 2.67412 6.22228C3.11365 6.88008 3.73836 7.39277 4.46927 7.69552C5.20017 7.99827 6.00444 8.07748 6.78036 7.92314C7.55628 7.7688 8.26902 7.38784 8.82842 6.82843C9.38784 6.26902 9.7688 5.55628 9.92314 4.78036C10.0775 4.00444 9.99827 3.20017 9.69552 2.46927C9.39277 1.73836 8.88008 1.11365 8.22228 0.674121C7.56448 0.234596 6.79112 0 6 0C4.93913 0 3.92172 0.421427 3.17157 1.17157C2.42143 1.92172 2 2.93913 2 4Z"
                      fill="#B2B2B2"
                    />
                    <rect y="10" width="12" height="6" rx="3" fill="#B2B2B2" />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M16 4H14V6L12 6V8H14V10H16V8H18V6L16 6V4Z"
                      fill="#B2B2B2"
                    />
                  </svg>

                  <span class="mx-4 text-[16px] font-medium">Recruitment</span>
                </a>
                <a
                  class="flex items-center px-4 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                  href="#"
                >
                  <svg
                    width="16"
                    height="18"
                    viewBox="0 0 16 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.2222 1.8H12.4444V0H10.6667V1.8H5.33333V0H3.55556V1.8H1.77778C0.797333 1.8 0 2.6073 0 3.6V16.2C0 17.1927 0.797333 18 1.77778 18H14.2222C15.2027 18 16 17.1927 16 16.2V3.6C16 2.6073 15.2027 1.8 14.2222 1.8ZM13.3333 15.3H8V9.9H13.3333V15.3ZM14.2222 6.3H1.77778V4.5H14.2222V6.3Z"
                      fill="#B2B2B2"
                    />
                  </svg>

                  <span class="mx-4 text-[16px] text-[#686868] font-medium">Schedule</span>
                </a>

                <a
                  class="flex items-center px-4 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                  href="#"
                >
                  <svg
                    width="18"
                    height="15"
                    viewBox="0 0 18 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 3C12 3.79565 11.6839 4.55871 11.1213 5.12132C10.5587 5.68393 9.79565 6 9 6C8.20435 6 7.44129 5.68393 6.87868 5.12132C6.31607 4.55871 6 3.79565 6 3C6 2.20435 6.31607 1.44129 6.87868 0.87868C7.44129 0.316071 8.20435 0 9 0C9.79565 0 10.5587 0.316071 11.1213 0.87868C11.6839 1.44129 12 2.20435 12 3Z"
                      fill="#B2B2B2"
                    />
                    <path
                      d="M17 5C17 5.53043 16.7893 6.03914 16.4142 6.41421C16.0391 6.78929 15.5304 7 15 7C14.4696 7 13.9609 6.78929 13.5858 6.41421C13.2107 6.03914 13 5.53043 13 5C13 4.46957 13.2107 3.96086 13.5858 3.58579C13.9609 3.21071 14.4696 3 15 3C15.5304 3 16.0391 3.21071 16.4142 3.58579C16.7893 3.96086 17 4.46957 17 5Z"
                      fill="#B2B2B2"
                    />
                    <path
                      d="M5 5C5 5.53043 4.78929 6.03914 4.41421 6.41421C4.03914 6.78929 3.53043 7 3 7C2.46957 7 1.96086 6.78929 1.58579 6.41421C1.21071 6.03914 1 5.53043 1 5C1 4.46957 1.21071 3.96086 1.58579 3.58579C1.96086 3.21071 2.46957 3 3 3C3.53043 3 4.03914 3.21071 4.41421 3.58579C4.78929 3.96086 5 4.46957 5 5Z"
                      fill="#B2B2B2"
                    />
                    <path
                      d="M15 15V12C15.0014 10.9833 14.7433 9.98303 14.25 9.094C14.6933 8.98054 15.1568 8.96984 15.6049 9.06272C16.053 9.15559 16.474 9.34959 16.8357 9.62991C17.1974 9.91023 17.4903 10.2695 17.6921 10.6802C17.8939 11.091 17.9992 11.5424 18 12V15H15Z"
                      fill="#B2B2B2"
                    />
                    <path
                      d="M3.75 9.09398C3.25675 9.98303 2.9986 10.9833 3 12V15H2.6572e-07V12C-0.000192468 11.542 0.104463 11.0901 0.305947 10.6788C0.507431 10.2676 0.800394 9.90791 1.16238 9.6274C1.52437 9.34688 1.94578 9.15296 2.39431 9.0605C2.84284 8.96804 3.30658 8.97949 3.75 9.09398Z"
                      fill="#B2B2B2"
                    />
                    <rect
                      x="5"
                      y="8"
                      width="8"
                      height="7"
                      rx="3"
                      fill="#B2B2B2"
                    />
                  </svg>

                  <span class="mx-4 text-[16px] text-[#686868] font-medium">Employee</span>
                </a>

                <a
                  class="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                  href="#"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 3C7.032 3 3 7.032 3 12C3 16.968 7.032 21 12 21C16.968 21 21 16.968 21 12C21 7.032 16.968 3 12 3ZM8.4 16.95C7.80326 16.95 7.23097 16.7129 6.80901 16.291C6.38705 15.869 6.15 15.2967 6.15 14.7C6.15 14.1033 6.38705 13.531 6.80901 13.109C7.23097 12.6871 7.80326 12.45 8.4 12.45C8.99674 12.45 9.56903 12.6871 9.99099 13.109C10.4129 13.531 10.65 14.1033 10.65 14.7C10.65 15.2967 10.4129 15.869 9.99099 16.291C9.56903 16.7129 8.99674 16.95 8.4 16.95ZM9.75 8.4C9.75 7.80326 9.98705 7.23097 10.409 6.80901C10.831 6.38705 11.4033 6.15 12 6.15C12.5967 6.15 13.169 6.38705 13.591 6.80901C14.0129 7.23097 14.25 7.80326 14.25 8.4C14.25 8.99674 14.0129 9.56903 13.591 9.99099C13.169 10.4129 12.5967 10.65 12 10.65C11.4033 10.65 10.831 10.4129 10.409 9.99099C9.98705 9.56903 9.75 8.99674 9.75 8.4ZM15.6 16.95C15.0033 16.95 14.431 16.7129 14.009 16.291C13.5871 15.869 13.35 15.2967 13.35 14.7C13.35 14.1033 13.5871 13.531 14.009 13.109C14.431 12.6871 15.0033 12.45 15.6 12.45C16.1967 12.45 16.769 12.6871 17.191 13.109C17.6129 13.531 17.85 14.1033 17.85 14.7C17.85 15.2967 17.6129 15.869 17.191 16.291C16.769 16.7129 16.1967 16.95 15.6 16.95Z"
                      fill="#B2B2B2"
                    />
                  </svg>

                  <span class="mx-4 text-[16px] text-[#686868] font-medium">Department</span>
                </a>
              </div>

              <div class="space-y-2 ">
                <label class="px-3 text-xs text-gray-500 uppercase dark:text-gray-400">
                  Other
                </label>

                <a
                  class="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                  href="#"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 3C7.0374 3 3 7.0374 3 12V15.7287C3 16.6503 3.8073 17.4 4.8 17.4H5.7C5.93869 17.4 6.16761 17.3052 6.3364 17.1364C6.50518 16.9676 6.6 16.7387 6.6 16.5V11.8713C6.6 11.6326 6.50518 11.4037 6.3364 11.2349C6.16761 11.0661 5.93869 10.9713 5.7 10.9713H4.8828C5.3832 7.4883 8.3802 4.8 12 4.8C15.6198 4.8 18.6168 7.4883 19.1172 10.9713H18.3C18.0613 10.9713 17.8324 11.0661 17.6636 11.2349C17.4948 11.4037 17.4 11.6326 17.4 11.8713V17.4C17.4 18.3927 16.5927 19.2 15.6 19.2H13.8V18.3H10.2V21H15.6C17.5854 21 19.2 19.3854 19.2 17.4C20.1927 17.4 21 16.6503 21 15.7287V12C21 7.0374 16.9626 3 12 3Z"
                      fill="#B2B2B2"
                    />
                  </svg>

                  <span class="px-4 text-[16px] text-[#686868] font-medium">Support</span>
                </a>

                <a
                  class="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                  href="#"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-5 h-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>

                  <span class="px-4 text-[16px] text-[#686868] font-medium">Settings</span>
                </a>
                </div>
              </nav>
            </div>
          </aside>
        ) : (
          ""
        )}
      </div>
      <button
        onClick={slider}
        class="text-white sm:hidden h-[12px]   px-5 py-4   "
        type="button"
      >
        <svg
          width="18"
          height="12"
          viewBox="0 0 18 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18 12H0V10H18V12ZM18 7H0V5H18V7ZM18 2H0V0H18V2Z"
            fill="#B2B2B2"
          />
        </svg>
      </button>
    </>
  );
}
