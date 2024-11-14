
import { createRoot } from 'react-dom/client';
import App from "./App";
import qiankunStart from "./qiankun";


const root = createRoot(document.getElementById("main-app") as HTMLElement);
//  主程序
root.render(<App />);

/**
 * 启动应用
 */
qiankunStart({
  prefetch: false,
  sandbox:{
    strictStyleIsolation: true, // 表示开启严格的样式隔离模式
    // experimentalStyleIsolation: true // 是否开启样式私有化
  },
});
