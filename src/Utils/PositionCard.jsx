import React from 'react';

const PositionCard = ({ title, positionCount, urgentMessage, backgroundColor }) => {
  return (
    <div 
      className={`lg:w-[204px] md:col-span-2 h-[140px] space-y-1  rounded-[12px] col-span-6 border-2 p-3 md:h-[136px]`}
      style={{ backgroundColor: backgroundColor || '#FFEFE7' }}
    >
      <h4 className="text-[18px] leading-[28px] font-semibold">
        {title || 'Available Position'}
      </h4>
      <h4 className="text-[36px] font-bold">
        {positionCount || 0}
      </h4>
      <h4 className="text-[16px] text-red-500">
        {urgentMessage || 'No urgent needs'}
      </h4>
    </div>
  );
};

export default PositionCard;