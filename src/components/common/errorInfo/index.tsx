import React from "react";

const ErrorInfo: React.FC<{ error: string }> = ({ error }) => {
  return (
    <div>
      <span>请求出错：</span>
      {error}
    </div>
  );
};

export default ErrorInfo;
