import React from "react";
import two from "../assets/2.png";
import PositionCard from "../Utils/PositionCard";
import EmployeeStatsCard from "../Utils/EmployeeStatsCard";

export default function Dashboard() {
  return (
    <section class="text-gray-600 sm:mb-20 body-font mt-8 lg:w-[1220px] lg:h-[700px] md:w-[640px] md:mx-[90px]  lg:mx-[290px] ">
      <h1 className="font-semibold text-3xl px-4 sm:px-0">Dashboard</h1>
      <div class="  grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 mt-4 md:gap-25 ">
        <div className="grid  grid-cols-1 gap-4 p-4 md:p-0 sm:grid-cols-6  md:gap-8">
          <PositionCard
            title="Available Position"
            positionCount="24"
            urgentMessage="4 Urgently needed"
            backgroundColor="#FFEFE7"
          />

          <PositionCard
            title="Job Open"
            positionCount="10"
            urgentMessage="4 Active hiring"
            backgroundColor="#E8F0FB"
          />

          <PositionCard
            title=" New Employees"
            positionCount="24"
            urgentMessage="4 Department"
            backgroundColor="#FDEBF9"
          />

          <EmployeeStatsCard
            title=" Total Employees"
            totalEmployees="216"
            menCount="120"
            womenCount="96"
            percentageChange="2"
            imageSrc={two}
            backgroundColor="#FFEFE7"
          />

          <EmployeeStatsCard
            title=" Talent Request"
            totalEmployees="16"
            menCount="120"
            womenCount="96"
            percentageChange="5"
            imageSrc={two}
            backgroundColor="#FFFFFF"
          />

          <div class="md:col-span-6 space-y-2 lg:w-[640px] h-[339px] rounded-[12px]   col-span-6 border-2  md:h-[289px] lg:h-[334px]">
            <div className="lg:p-4 p-2 space-y-2">
              <div className="flex justify-between items-center">
                <h4 className="sm:text-[18px] text-[16px]  py-2 pr-4 font-semibold ">
                  Announcement
                </h4>
                <div className="flex border-2 items-center space-x-3 p-1">
                  <h6 className="pr-0 text-[10px] ">Today, 13 Sep 2021</h6>
                  <svg
                    width="15"
                    height="7"
                    viewBox="0 0 15 7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.5 1L7.5 6L13.5 1"
                      stroke="#737898"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>

              <div className="p-2 bg-slate-100 hover:bg-slate-200 flex justify-between items-center px-4 lg:h-[64px] border-2">
                <div>
                  <h4 className=" sm:text-[16px] text-[15px] text-[#303030] ">
                    Outing schedule for every departement
                  </h4>
                  <h4 className=" text-[10px]">5 Minutes ago</h4>
                </div>
                <div className="flex items-center space-x-3">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.9771 1.02765e-06C11.0618 -0.000150186 11.1457 0.0163877 11.224 0.0486692C11.3022 0.0809508 11.3734 0.128343 11.4333 0.188136L17.8119 6.56669C17.9327 6.68752 18.0005 6.85137 18.0005 7.02221C18.0005 7.19306 17.9327 7.35691 17.8119 7.47773C17.1933 8.09626 16.4305 8.23543 15.8751 8.23543C15.647 8.23543 15.4434 8.21223 15.2823 8.18517L11.2439 12.2236C11.3502 12.652 11.4192 13.0887 11.4501 13.529C11.5093 14.4336 11.4088 15.7028 10.5223 16.5894C10.4014 16.7102 10.2376 16.778 10.0668 16.778C9.89591 16.778 9.73205 16.7102 9.61123 16.5894L5.96579 12.9452L1.86547 17.0456C1.6142 17.2968 0.294674 18.2079 0.0433977 17.9566C-0.207879 17.7053 0.703159 16.3845 0.954436 16.1345L5.05475 12.0342L1.4106 8.38877C1.28981 8.26795 1.22196 8.10409 1.22196 7.93325C1.22196 7.7624 1.28981 7.59855 1.4106 7.47773C2.29715 6.59118 3.56642 6.48938 4.47102 6.54994C4.91128 6.58079 5.34803 6.64977 5.77637 6.75612L9.81483 2.71894C9.78112 2.52271 9.76388 2.324 9.76328 2.1249C9.76328 1.5708 9.90246 0.807951 10.5223 0.188136C10.643 0.0676924 10.8066 3.72617e-05 10.9771 1.02765e-06Z"
                      fill="#686868"
                    />
                  </svg>
                  <svg
                    width="18"
                    height="4"
                    viewBox="0 0 18 4"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 4C3.10457 4 4 3.10457 4 2C4 0.89543 3.10457 0 2 0C0.895431 0 0 0.89543 0 2C0 3.10457 0.895431 4 2 4Z"
                      fill="#B2B2B2"
                    />
                    <path
                      d="M9 4C10.1046 4 11 3.10457 11 2C11 0.89543 10.1046 0 9 0C7.89543 0 7 0.89543 7 2C7 3.10457 7.89543 4 9 4Z"
                      fill="#B2B2B2"
                    />
                    <path
                      d="M16 4C17.1046 4 18 3.10457 18 2C18 0.89543 17.1046 0 16 0C14.8954 0 14 0.89543 14 2C14 3.10457 14.8954 4 16 4Z"
                      fill="#B2B2B2"
                    />
                  </svg>
                </div>
              </div>

              <div className="p-2 px-4 bg-slate-100 hover:bg-slate-200 flex justify-between items-center lg:h-[64px] border-2">
                <div>
                  <h4 className=" sm:text-[16px] text-[15px] text-[#303030] ">
                    Meeting HR Department
                  </h4>
                  <h4 className=" text-[10px]">Yesterday, 12:30 PM</h4>
                </div>
                <div className="flex items-center space-x-3">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.9771 1.02765e-06C11.0618 -0.000150186 11.1457 0.0163877 11.224 0.0486692C11.3022 0.0809508 11.3734 0.128343 11.4333 0.188136L17.8119 6.56669C17.9327 6.68752 18.0005 6.85137 18.0005 7.02221C18.0005 7.19306 17.9327 7.35691 17.8119 7.47773C17.1933 8.09626 16.4305 8.23543 15.8751 8.23543C15.647 8.23543 15.4434 8.21223 15.2823 8.18517L11.2439 12.2236C11.3502 12.652 11.4192 13.0887 11.4501 13.529C11.5093 14.4336 11.4088 15.7028 10.5223 16.5894C10.4014 16.7102 10.2376 16.778 10.0668 16.778C9.89591 16.778 9.73205 16.7102 9.61123 16.5894L5.96579 12.9452L1.86547 17.0456C1.6142 17.2968 0.294674 18.2079 0.0433977 17.9566C-0.207879 17.7053 0.703159 16.3845 0.954436 16.1345L5.05475 12.0342L1.4106 8.38877C1.28981 8.26795 1.22196 8.10409 1.22196 7.93325C1.22196 7.7624 1.28981 7.59855 1.4106 7.47773C2.29715 6.59118 3.56642 6.48938 4.47102 6.54994C4.91128 6.58079 5.34803 6.64977 5.77637 6.75612L9.81483 2.71894C9.78112 2.52271 9.76388 2.324 9.76328 2.1249C9.76328 1.5708 9.90246 0.807951 10.5223 0.188136C10.643 0.0676924 10.8066 3.72617e-05 10.9771 1.02765e-06Z"
                      fill="#686868"
                    />
                  </svg>
                  <svg
                    width="18"
                    height="4"
                    viewBox="0 0 18 4"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 4C3.10457 4 4 3.10457 4 2C4 0.89543 3.10457 0 2 0C0.895431 0 0 0.89543 0 2C0 3.10457 0.895431 4 2 4Z"
                      fill="#B2B2B2"
                    />
                    <path
                      d="M9 4C10.1046 4 11 3.10457 11 2C11 0.89543 10.1046 0 9 0C7.89543 0 7 0.89543 7 2C7 3.10457 7.89543 4 9 4Z"
                      fill="#B2B2B2"
                    />
                    <path
                      d="M16 4C17.1046 4 18 3.10457 18 2C18 0.89543 17.1046 0 16 0C14.8954 0 14 0.89543 14 2C14 3.10457 14.8954 4 16 4Z"
                      fill="#B2B2B2"
                    />
                  </svg>
                </div>
              </div>
              <div className="p-2  bg-slate-100 hover:bg-slate-200 flex justify-between items-center px-4 lg:h-[70px] border-2">
                <div>
                  <h4 className=" sm:text-[16px] text-[15px] text-[#303030] ">
                    IT Department need two more talents for UX/UI Designer
                    position
                  </h4>
                  <h4 className=" text-[10px]">Yesterday, 09:15 AM</h4>
                </div>
                <div className="flex items-center space-x-3">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.9771 1.02765e-06C11.0618 -0.000150186 11.1457 0.0163877 11.224 0.0486692C11.3022 0.0809508 11.3734 0.128343 11.4333 0.188136L17.8119 6.56669C17.9327 6.68752 18.0005 6.85137 18.0005 7.02221C18.0005 7.19306 17.9327 7.35691 17.8119 7.47773C17.1933 8.09626 16.4305 8.23543 15.8751 8.23543C15.647 8.23543 15.4434 8.21223 15.2823 8.18517L11.2439 12.2236C11.3502 12.652 11.4192 13.0887 11.4501 13.529C11.5093 14.4336 11.4088 15.7028 10.5223 16.5894C10.4014 16.7102 10.2376 16.778 10.0668 16.778C9.89591 16.778 9.73205 16.7102 9.61123 16.5894L5.96579 12.9452L1.86547 17.0456C1.6142 17.2968 0.294674 18.2079 0.0433977 17.9566C-0.207879 17.7053 0.703159 16.3845 0.954436 16.1345L5.05475 12.0342L1.4106 8.38877C1.28981 8.26795 1.22196 8.10409 1.22196 7.93325C1.22196 7.7624 1.28981 7.59855 1.4106 7.47773C2.29715 6.59118 3.56642 6.48938 4.47102 6.54994C4.91128 6.58079 5.34803 6.64977 5.77637 6.75612L9.81483 2.71894C9.78112 2.52271 9.76388 2.324 9.76328 2.1249C9.76328 1.5708 9.90246 0.807951 10.5223 0.188136C10.643 0.0676924 10.8066 3.72617e-05 10.9771 1.02765e-06Z"
                      fill="#686868"
                    />
                  </svg>
                  <svg
                    width="18"
                    height="4"
                    viewBox="0 0 18 4"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 4C3.10457 4 4 3.10457 4 2C4 0.89543 3.10457 0 2 0C0.895431 0 0 0.89543 0 2C0 3.10457 0.895431 4 2 4Z"
                      fill="#B2B2B2"
                    />
                    <path
                      d="M9 4C10.1046 4 11 3.10457 11 2C11 0.89543 10.1046 0 9 0C7.89543 0 7 0.89543 7 2C7 3.10457 7.89543 4 9 4Z"
                      fill="#B2B2B2"
                    />
                    <path
                      d="M16 4C17.1046 4 18 3.10457 18 2C18 0.89543 17.1046 0 16 0C14.8954 0 14 0.89543 14 2C14 3.10457 14.8954 4 16 4Z"
                      fill="#B2B2B2"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className=" border-t-2  ">
              <h4 className=" text-center text-[#FF5151] text-[14px] ">
                See All Announcement
              </h4>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-1 p-4 sm:p-0 gap-4 md:gap-2 lg:gap-4 md:mt-4 lg:mt-0">
          <div className="lg:w-[427px] md:h-[319px] h-[306px] rounded-[12px]  md:w-[250px] border-2 lg:mx-20 bg-[#1B204A]  text-white  lg:h-[258px]">
            <h2 className="text-[18px] bg-[#161E54] p-4 mt-2">
              Recently Activity{" "}
            </h2>
            <h6 className="text-[10px] text-gray-400  px-4 py-2">
              10.40 AM, Fri 10 Sept 2021
            </h6>
            <h4 className="text-[18px] px-4 py-1">You Posted a New Job </h4>
            <h4 className="text-[14px] text-gray-200 px-4 py-2">
              Kindly check the requirements and terms of work and make sure
              everything is right.{" "}
            </h4>
            <div className="flex justify-around md:flex-row flex-col space-y-2 sm:space-y-0 p-4 md:p-4 ">
              <h4 className="text-[14px] text-gray-200 pr-9 py-2">
                Today you makes 12 Activity{" "}
              </h4>
              <button className=" p-2 sm:p-0 w-1/2 lg:w-1/3 bg-[#FF5151] px-6 text-[14px] rounded-lg ">
                See All Activity
              </button>
            </div>
          </div>
          <div className="lg:w-[427px] md:w-[374px] h-[385px] rounded-[12px] p-3 lg:p-0   md:h-[319px] border-2 md:-mx-14 lg:mx-20  lg:h-[430px]">
           
          <div className="flex justify-between lg:p-4 md:p-1  items-center">
                <h4 className="text-[18px]  pr-4 font-semibold ">
                Upcoming Schedule
                </h4>
                <div className="flex border-2 items-center space-x-3 p-1">
                  <h6 className="pr-0 text-[12px] ">Today, 13 Sep 2021</h6>
                  <svg
                    width="15"
                    height="7"
                    viewBox="0 0 15 7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.5 1L7.5 6L13.5 1"
                      stroke="#737898"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
          <div className="lg:p-4 md:p-0 p-2 ">
          
            <h4 className=" text-[12px] py-2 ">Priority</h4>
            <div className="p-2 lg:h-[64px] bg-slate-100 hover:bg-slate-200 px-4 border-2">
              <h4 className=" text-[14px] ">Review candidate applications</h4>
              <h4 className=" text-[10px]">Today - 11.30 AM</h4>
            </div>
            <h4 className=" text-[12px]  py-2 ">other</h4>
            <div className="p-2 px-4 mb-4 bg-slate-100 hover:bg-slate-200 lg:h-[64px] border-2">
              <h4 className=" text-[14px] ">Interview with candidates</h4>
              <h4 className=" text-[10px]">Today - 11.30 AM</h4>
            </div>
            <div className="p-2 bg-slate-100 hover:bg-slate-200 px-4 lg:h-[88px] md:h-[70px] border-2">
              <h4 className=" text-[14px] ">
                Short meeting with product designer from IT Departement
              </h4>
              <h4 className=" text-[10px]">Today - 11.30 AM</h4>
            </div>
              
          </div>
            <div className=" border-t-2   lg:p-2 ">
              <h4 className=" text-center text-[#FF5151] text-[14px] ">
              Creat a New Schedule
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
