import { Layout, Modal } from 'antd';
import { Content, Footer, Header } from 'antd/es/layout/layout';
import { useNavigate } from 'react-router-dom';
import { PageHeader } from '@ant-design/pro-components';
import { useLayOutStyles } from './styles';
import avatar from '@/assets/avatar.jpg';

import { GithubOutlined, SearchOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { useFocusInput } from '@/utils/hooks';

const Main = () => {
  const navigate = useNavigate();
  const { styles } = useLayOutStyles();

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
      <PageHeader
        title="三寸日光"
        tags={
          <div className={styles.searchContent}>
            <SearchOutlined className={styles.searchIcon} />
            <input
              ref={inputRef as React.RefObject<HTMLInputElement>}
              placeholder="搜索您想要的内容..."
              type="text"
              name="text"
              autoComplete="off"
              className={styles.search}
            />
            
          </div>
        }
        className={styles.headerStyle}
        extra={
          <div className={styles.gitHub}>
            <GithubOutlined />
          </div>
        }
        avatar={{ src: avatar }}
      />
      <Content className={styles.contentStyle}>
        <div>1</div>
        <div>2</div>
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
          <SearchOutlined className={styles.searchIcon} />
          <input
            placeholder="搜索您想要的内容..."
            type="text"
            name="text"
            autoComplete="off"
            className={styles.search}
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
