
## 样式 方案
https://juejin.cn/post/7263871284010303546  
https://ant-design.github.io/antd-style/zh-CN/guide   包括如何使用及从less迁移

antd-style库
vscode用户需安装自动提示插件 vscode-styled-components
...
有点坑，不支持复合样式，需要拆开写
...
还是用less吧 我受不了了！https://blog.csdn.net/weixin_42289080/article/details/140202538
...
用sāss，熟悉一点
yarn add sass sass-loader 
https://juejin.cn/post/7207410405855985725?searchId=20241119180950DB0C22909D0DC4EA36FE#heading-3
优化部分后续看
https://juejin.cn/post/7154351787246354462?searchId=2024111918133865459BEC291608012FA3

## 路由 方案
https://juejin.cn/post/7033313711947251743?searchId=20241114233942F8CCF59AEFEEA162FF57
react-router-dom@6

## 状态管理 方案
暂无


## 💢心情
开始当码农时，网速卡的要死，组件库打不开，我ci发！！！ 敲代码第一要义，要心态稳！一定。
半个小时过去了，网络还是Retrying，我ci发！！！


## 借助插件
1 
yarn add @craco/craco -D   方便配置webpack  
https://blog.csdn.net/qq_45569925/article/details/143593322
2、
也可以不用插件，直接引入
  "start": "NODE_ENV=development webpack serve --config ./config/webpack.dev.js",
    "build-test": "BUILD_ENV=test webpack --config ./config/webpack.prod.js",
    "build-uat": "BUILD_ENV=uat webpack --config ./config/webpack.prod.js",
    "build-prod": "BUILD_ENV=prod webpack --config ./config/webpack.prod.js"

# vscode保存自动格式化
1、安装安装Prettier插件：

2、根目录 创建.prettierrc文件并配置规则：

3、设置VSCode保存时自动格式化：
继续在VSCode设置中搜索Editor: Format On Save，勾选该选项。

eslink检查咱不配置，用到再说
