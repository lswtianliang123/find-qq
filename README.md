# QQ 查询 demo 项目

## 安装

yarn

## 启动

yarn start

## 业务说明

用户输入 5 到 10 位合法的 qq 号，可通过开发免费接口查询到头像，昵称等内容

## 技术方案说明

本项目为简单演示代码思路，基础框架的目的，简单融入了 react 全家桶能力。
如 react-router-dom， react-redux， redux-thunk 等基础库，并对他们进行打通

同时，引入 lodash 这个基础工具库，用它的 debounce 防抖功能减少中间不必要的 api 查询

鉴于当前阶段功能十分简单，引入 axios 库，并做了简洁封装调用

## 文件夹职责说明

components --- 存放普通展示组件

pages --- 存放页面级别的容器组件

constants --- 常量

redux --- redux 的相关，如 actions，reducers, store 等

services --- 调用后端 api 的服务层

types --- ts 类型定义

utils ---- 工具方法

## 关于单元测试

从成本和时间考虑，当下只对功能比较稳定 **utils** 工具方法做了单元测试

## 关于交付

从工程和最终交互的角度来说，还需要进一步的完善架构，并对功能做更多的测试和防御，当下只是演示目的
