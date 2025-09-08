import React from 'react';

const CardLayout = ({ title, image}) => {
  return (
    <div className="flex max-w-[216px] h-[390px] flex-col items-center rounded-2xl bg-white p-2 pb-4 font-roboto font-bold">
      <div className="flex h-full w-full flex-col gap-4">
        <img
          src={image}
          alt="Card cover"
          className="h-[300px] w-[200px] rounded-lg bg-blue-700"
        />

        <div className="flex flex-col gap-4 px-2">
          <p className="min-h-[38px] text-sm">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardLayout;
