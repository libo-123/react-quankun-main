import { Spin } from "antd";
import "./App.css";
import { LoadingOutlined } from "@ant-design/icons";
import {  } from './store'
const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

const App = () => {
  return (
    <Spin indicator={antIcon} spinning={false}>
      <div className="App">app</div>
      <div id="subapp-container"></div>
    </Spin>
  );
};

export default App;
