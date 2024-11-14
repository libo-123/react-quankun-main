import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { FC } from "react";


interface IProps {
  loading: boolean;
}

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

/**
 * 渲染子应用
 */
const Render: FC<IProps> = ({ loading }) => {
  
  return (
    <>
      {loading && (
        <div>
          <Spin indicator={antIcon} />
        </div>
      )}
      <div id="subapp-viewport"/>
    </>
  );
};
const renderSubApp = ({ loading }: IProps) => {
  /**获取节点，渲染子应用 */
  const { pathname } = window.location;

  
  if (pathname.includes("/aduser") || pathname.includes("/anchor")) {
    console.log("pathname-----", document.getElementById('main-app'));
    // createPortal(<div id="sub2-app"></div>,document.body);
  }
};

export default renderSubApp;
