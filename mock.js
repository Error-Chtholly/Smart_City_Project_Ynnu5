// 这个是伪接口 最好不要修改，否则会导致后续的接口调用出错
// npm run mock 启动mock服务 建立伪接口
const mockjs = require("mockjs");
// require 是commonjs规范，可以直接使用require引入模块
// es6是使用import导入模块

const Wuhan_roads = require("./GIS_DATA/Wuhan_roads.json");
const Wuhan_events = require("./GIS_DATA/Wuhan_events.json");
const Wuhan_Buildings = require("./GIS_DATA/Wuhan_Buildings.json");
const Wuhan_bridge = require("./GIS_DATA/Wuhan_bridge.json");

module.exports = () => {
    return mockjs.mock({
        Wuhan_roads,
        Wuhan_events,
        Wuhan_Buildings,
        Wuhan_bridge,
    });
};