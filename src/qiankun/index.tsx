import { registerMicroApps, start } from "qiankun";
import { isDev } from "../constans/common";


/**
 * Step1 初始化应用
 */
const subApps = [
  // {
  //   name: "mission-aduser",
  //   entry: isDev ? "//localhost:1024" : "mission-aduser",
  //   developer: "aduser",
  //   activeRule: isDev ? "/aduser" : "/aduser",
  // },
  {
    name: "mission-anchor",
    entry: isDev ? "//localhost:4001" : "mission-anchor",
    developer: "anchor",
    activeRule: isDev ? "/anchor" : "/anchor",
  },
];

const apps = subApps.map(item => {
  return {
    ...item,
    loader: (loading: boolean) => {
      // 加载子应用时，显示loading = true，否则false
      console.log("应用正在加载中...", loading);
    }, 
    container: "#subapp-container", // 子应用挂载的div
    props: {
      developer: item.developer, // 下发基础路由
      routerBase: item.activeRule, // 下发基础路由
      // getGlobalState: store.getGlobalState // 下发getGlobalState方法
    }
  };
});
/**
 * Step2 注册子应用
 */
registerMicroApps(apps, {
  // qiankun 生命周期钩子 - 微应用加载前
  beforeLoad: (app: any) => {
    console.log("[LifeCycle] before load %c%s", "color: green;", app.name);
    return Promise.resolve();
  },
  // qiankun 生命周期钩子 - 微应用挂载后
  afterMount: (app: any) => {
    console.log("[LifeCycle] after mount %c%s", "color: green;", app.name);
    return Promise.resolve();
  },
});

export default start;
