import React, { useEffect } from 'react';
import NextImage from 'next/image';

const RequirementCard = ({ bg, data }) => {
  return (
    <div className="rounded-2xl my-4 w-full mx-auto shadow-xl overflow-hidden">
      <div
        style={{
          //   backgroundImage: `linear-gradient(to right, ${bg1}, ${bg2}`,
          background: bg,
        }}
        className={`h-32 flex justify-center items-center`}
      ></div>
      <div className="data relative px-4">
        <div className="rounded-full absolute border-white -top-10 h-20 w-20 overflow-hidden object-contain">
          <NextImage
            className="h-full w-full object-cover"
            height={100}
            width={100}
            src={`https://avatars.dicebear.com/api/initials/${data.full_name}.svg`}
          />
        </div>
        <div className="student pt-12">
          <div className="text-xl">{data.full_name}</div>
          <div className="text-gray-500">{data.roll_no}</div>
        </div>
        <div className="text-2xl mt-3 border-b-2">{data.project_name}</div>
        <div className="requirements w-full gap-4 py-4 grid grid-cols-2">
          <div className="os">
            <div className="head">Operating System</div>
            <li className="text-gray-500 ml-5">{data.operating_system}</li>
          </div>
          <div className="code_editor">
            <div className="head">Code Editor</div>
            <li className="text-gray-500 ml-5">{data.code_editor}</li>
          </div>

          <div className="database">
            <div className="head">Database</div>
            {data.database.map((val, index) => (
              <li key={index} className="text-gray-500 ml-5">
                {val}
              </li>
            ))}
          </div>
          {data.misc.length > 0 && (
            <div className="misc">
              <div className="head">Misc Softwares</div>
              {data.misc.map((val, index) => (
                <li key={index} className="text-gray-500 ml-5">
                  {val}
                </li>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RequirementCard;
