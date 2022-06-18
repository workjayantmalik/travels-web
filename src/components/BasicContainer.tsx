import React from "react";
import { BasicHeader } from "./BasicHeader";

interface IBasicContainerProps {
  children: React.ReactNode;
}

export const BasicContainer: React.FC<IBasicContainerProps> = ({
  children,
}) => {
  return (
    <div className="flex flex-col mx-auto w-full min-h-screen bg-gray-100">
      <BasicHeader />
      {/* Page Content */}
      <main className="flex flex-auto flex-col max-w-full">{children}</main>
      {/* END Page Content */}
    </div>
  );
};
