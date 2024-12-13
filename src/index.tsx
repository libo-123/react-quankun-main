import { createRoot } from "react-dom/client";
import { ConfigProvider } from "antd";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import qiankunStart from "./qiankun";


const root = createRoot(document.getElementById("main-app") as HTMLElement);
//  主程序
root.render(
  <BrowserRouter basename="/">
    <ConfigProvider
      theme={{
        token: {
          // "colorPrimary": "#fa541c",
          // "colorInfo": "#fa541c",
          // "wireframe": false,
          // "colorSuccess": "#fa541c",
          // "colorWarning": "#fa541c",
          // "colorError": "#fa541c",
          // "colorLink": "#fa541c"
        },
      }}>
      <App />
    </ConfigProvider>
  </BrowserRouter>
);

/**
 * 启动应用
 */
qiankunStart({
  prefetch: false,
  sandbox: {
    // strictStyleIsolation: true, // 表示开启严格的样式隔离模式  旧版本版本
    experimentalStyleIsolation: true, // 是否开启样式私有化
  },
});
