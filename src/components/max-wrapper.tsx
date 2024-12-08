import React from "react";

const MaxWrapper = ({ children }: { children: React.ReactNode }) => {
  return <div className="mx-auto px-4 max-w-[1200px]">{children}</div>;
};

export default MaxWrapper;
