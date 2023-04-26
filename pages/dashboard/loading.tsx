import React from "react";
import { Spin } from "antd";

const Loading = () => {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="flex justify-center items-center h-screen">
      <Spin size="large" />
    </div>
  );
};

export default Loading;
