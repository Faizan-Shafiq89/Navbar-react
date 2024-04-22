import React, { useState } from "react";

const SubMenu = ({title, icon}) => {

  return (
    <>
    <div className=" flex justify-between text-black hover:text-red-500 px-3 py-1 text-base font-medium">
         <h4 className="py-1 bg-white">{title}</h4>
            {icon}
            </div>
     </>
  );
};

export default SubMenu;
