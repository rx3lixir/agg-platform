import * as React from "react";

const BillboardCard = () => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 overflow-hidden">
      <div className="rounded-md bg-teal-400 relative aspect-square md:aspect-[2.4/1] overflow-hidden">
        <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8">
          <div className="font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs">
            Яркое событие
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillboardCard;
