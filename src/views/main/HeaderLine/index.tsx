import React, { useState } from 'react';
import styles from './index.module.scss';
import { useFocusInput } from '@/utils/hooks';
import { Button, Col, Input, Modal, Row } from 'antd';
import { GithubOutlined, SearchOutlined } from '@ant-design/icons';
import avatar from '@/assets/avatar.jpg';

/**
 * 页面头部栏
 */
const HeaderLine = () => {
  const [searchModalVis, setSearchModalVis] = useState(false);
  const handleFocus = () => {
    setSearchModalVis(true);
    if (inputRef.current) {
      inputRef.current.blur();
    }
  };

  const [inputRef] = useFocusInput(handleFocus);
  return (
    <>
      <Row className={styles.headerWrapper}>
        <Col xs={0} sm={0} md={0} lg={4} xl={4} className={styles.headerLeft}>
          <img src={avatar} alt="" />
          <span>Ant Design广场</span>
          <span className={styles.line}></span>
        </Col>
        <Col xs={20} sm={20} md={20} lg={10} xl={8} className={styles.searchContent}>
          <SearchOutlined className={styles.searchIcon} />
          <Input className={styles.inputSearch} placeholder='请输入关键字搜索...' allowClear />
          <span className={styles.modalSearch} onClick={() => setSearchModalVis(true)}>
            ⌘ K
          </span>
        </Col>
        <Col xs={0} sm={0} md={0} lg={10} xl={8} className={styles.searchNav}>
          <ul>
            <li>首页</li>
            <li>组件</li>
            <li>博客</li>
            <li>国内镜像</li>
          </ul>
        </Col>
        <Col xs={4} sm={4} md={4} lg={0} xl={4} className={styles.headerRight}>
          <GithubOutlined className={styles.icon} />
        </Col>
      </Row>
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
    </>
  );
};

export default HeaderLine;
