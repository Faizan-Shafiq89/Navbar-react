import React from "react";

const Footer = ({ img, img2, direction }) => {
  return (
    <div className={`w-12 h-10 flex gap-3 ${direction}`}>
      <div>
        {" "}
        <img src={img} />
      </div>
      <div className="flex flex-col">
        <img src={img2} />
      </div>
    </div>
  );
};

export default Footer;
