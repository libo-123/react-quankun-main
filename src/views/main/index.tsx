import { Button } from "antd";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>顶部搜索兰姆</h1>
      <div className="content">
        跳转区域
        <Button onClick={() => navigate("/anchor")}>我的页面</Button>
      </div>
    </div>
  );
};

export default Main;
