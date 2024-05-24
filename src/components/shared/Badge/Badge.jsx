import React from "react";

const Badge = ({ bg, text, content, props }) => {
  return (
    <div className={`${bg} ${text} text-sm py-1 px-2 rounded-md ${props}`}>
      {content}
    </div>
  );
};

export default Badge;
