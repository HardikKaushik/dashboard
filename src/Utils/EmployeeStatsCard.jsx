import React from 'react';

const EmployeeStatsCard = ({ 
    title,
  totalEmployees, 
  menCount, 
  womenCount, 
  percentageChange, 
  imageSrc, 
  backgroundColor 
}) => {
  return (
    <div 
      className={`md:col-span-3 lg:w-[312px] h-[190px] rounded-[12px] col-span-6 border-2 p-4 md:h-[190px]`}
      style={{ backgroundColor: backgroundColor || '#FFFFFF' }}
    >
      <div className="grid grid-cols-2 py-2 md:h-[180px]">
        <div>
          <h4 className="text-[18px] leading-[28px] font-semibold">
           {title}
          </h4>
          <h4 className="text-[48px] font-bold">
            {totalEmployees}
          </h4>   
          <h4 className="text-[12px] text-gray-400">{menCount} men</h4>
          <h4 className="text-[12px] text-gray-400">{womenCount} women</h4>
        </div>
        <div>
          <img className="w-auto h-18 px-2 mb-6" src={imageSrc} alt="Employee stats" />
          <span className="p-2">+{percentageChange}% Past month</span>
        </div>
      </div>
    </div>
  );
};

export default EmployeeStatsCard;
