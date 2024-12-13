import React, { useState } from 'react';
import styles from './index.module.scss';
import { Col, Input, Modal, Row, Switch, Tooltip, message } from 'antd';
import { GithubOutlined, SearchOutlined, SettingOutlined } from '@ant-design/icons';
import avatar from '@/assets/avatar.jpg';
import SwitchTheme from '@/components/SwitchTheme';
import { Navigate, useNavigate } from 'react-router-dom';

/**
 * 页面头部栏
 */
const HeaderLine = () => {
  const [searchModalVis, setSearchModalVis] = useState(false);
  const navition = useNavigate()

  const handleAdvice = () => {
    // message.info('欢迎提出宝贵意见！');

  }
  return (
    <>
      <Row className={styles.headerWrapper}>
        <Col xs={0} sm={0} md={0} lg={4} xl={4} className={styles.headerLeft}>
          <img src={avatar} alt="" />
          <span>登黄山，天下无山！</span>
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
            <li>博客</li>
            <li>github</li>
            <li onClick={handleAdvice}>反馈与建议</li>
          </ul>
        </Col>
        <Col xs={4} sm={4} md={4} lg={4} xl={4} className={styles.headerRight}>
          <div className={styles.content}>
            <div className={styles.setting} onClick={() => navition('/manager')}>
              <Tooltip title={'更新此页面入口！'}>
                <SettingOutlined />
              </Tooltip>
            </div>
            <div className={styles.switch}>
              {/* <SwitchTheme /> */}
              <Switch value={true} onClick={() => {
                message.info('切换主题,还没开发好！')
              }} />
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
