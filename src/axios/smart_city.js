// 从伪接口处获取数据
import request from "@/axios/request";

class SmartCity {
    // 静态方法，获取武汉市区道路数据
    static getWuhanRoads() {
        return request({
            url: "/Wuhan_roads",
            method: "get",
        });
    }
    // 静态方法，获取武汉市区事件数据
    static getWuhanEvents() {
        return request({
            url: "/Wuhan_events",
            method: "get",
        });
    }
    // 静态方法，获取武汉市区建筑数据
    static getWuhanBuildings() {
        return request({
            url: "/Wuhan_Buildings",
            method: "get",
        });
    }
    // 静态方法，获取武汉市区桥梁数据
    static getWuhanBridges() {
        return request({
            url: "/Wuhan_bridge",
            method: "get",
        });
    }
}

export default SmartCity;