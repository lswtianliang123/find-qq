import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import QueryPersonPage from "./queryPerson";

// 应用入口的路由文件
const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<QueryPersonPage />} />

        {/** 不存在的路径 fallback 到首页 */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
