import React, { useState } from 'react';
import styles from './index.module.scss';
import { useFocusInput } from '@/utils/hooks';
import { Col, Input, Modal, Row } from 'antd';
import { GithubOutlined, SearchOutlined } from '@ant-design/icons';
import avatar from '@/assets/avatar.jpg';
import SwitchTheme from '@/components/SwitchTheme';

/**
 * 页面头部栏
 */
const HeaderLine = () => {
  const [searchModalVis, setSearchModalVis] = useState(false);

  return (
    <>
      <Row className={styles.headerWrapper}>
        <Col xs={0} sm={0} md={0} lg={4} xl={4} className={styles.headerLeft}>
          <img src={avatar} alt="" />
          <span>博的个人日记</span>
          <span className={styles.line}></span>
        </Col>
        <Col xs={20} sm={20} md={20} lg={6} xl={8} className={styles.searchContent}>
          <SearchOutlined className={styles.searchIcon} />
          <Input className={styles.inputSearch} autoComplete='off' placeholder='请输入关键字搜索...' allowClear />
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
        <Col xs={4} sm={4} md={4} lg={4} xl={4} className={styles.headerRight}>
          <div className={styles.content}>
            <div className={styles.switch}>
              <SwitchTheme />
            </div>
            <GithubOutlined className={styles.icon} />
          </div>
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
        <div className={styles.searchModalContent}>
          <Input className={styles.inputSearch} autoComplete='off' placeholder='请输入关键字搜索...' allowClear />
        </div>
        <div>
          { }
        </div>
      </Modal>
    </>
  );
};

export default HeaderLine;
