import { Layout, Modal } from 'antd';
import { Content, Footer, Header } from 'antd/es/layout/layout';
import { useNavigate } from 'react-router-dom';
import { PageHeader } from '@ant-design/pro-components';
import { useHeaderStyles, useLayOutStyles } from './styles';
import avatar from '@/assets/avatar.jpg';

import { GithubOutlined, SearchOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { useFocusInput } from '@/utils/hooks';
import styleCard from './index.module.less';

const Main = () => {
  const navigate = useNavigate();
  const { styles } = useLayOutStyles();
  const { styles: headerStyles, cx } = useHeaderStyles();

  const [searchModalVis, setSearchModalVis] = useState(false);
  const handleFocus = () => {
    setSearchModalVis(true);
    if (inputRef.current) {
      inputRef.current.blur();
    }
  };

  const [inputRef] = useFocusInput(handleFocus);
  return (
    <Layout className={styles.layoutStyle}>
      <header className={headerStyles.header}>
        <div className={headerStyles.headerLeft}>
          <img src={avatar} alt="" />
          <span>三寸日光</span>
        </div>
        <div className={headerStyles.searchContent}>
          <SearchOutlined className={headerStyles.searchIcon} />
          <input
            ref={inputRef as React.RefObject<HTMLInputElement>}
            placeholder="搜索您想要的内容..."
            type="text"
            name="text"
            autoComplete="off"
            className={headerStyles.search}
          />
        </div>
        <div className={headerStyles.gitHub}>
          <GithubOutlined />
        </div>
      </header>

      <Content className={cx(styles.contentStyle)}>
        <div className={styleCard.cards}>
          <div className={cx(styleCard.card, styleCard.red)}>
            <p className="tip">Hover Me</p>
            <p className="second-text">Lorem Ipsum</p>
          </div>
          <div className={cx(styles.card, styles.blue)}>
            <p className="tip">Hover Me</p>
            <p className="second-text">Lorem Ipsum</p>
          </div>
          <div className={cx(styles.card, styles.green)}>
            <p className="tip">Hover Me</p>
            <p className="second-text">Lorem Ipsum</p>
          </div>
        </div>
        <div>
          right
        </div>
      </Content>
      <Footer className={styles.footerStyle}>不知天上宫阙，今夕是何年</Footer>

      <Modal
        open={searchModalVis}
        onCancel={() => setSearchModalVis(false)}
        footer={null}
        getContainer={false}
        okText="确定"
        cancelText="取消"
        className={styles.modalStyle}
      >
        <div className={styles.serchModalContent}>
          <SearchOutlined className={headerStyles.searchIcon} />
          <input
            placeholder="搜索您想要的内容..."
            type="text"
            name="text"
            autoComplete="off"
            className={headerStyles.search}
          />
        </div>
        <div>
          {['create-react-app示范项目', '项目2', '项目3', '项目4'].map(item => {
            return (
              <div key={item} onClick={() => alert(item)}>
                {item}
              </div>
            );
          })}
        </div>
      </Modal>
    </Layout>
  );
};

export default Main;
