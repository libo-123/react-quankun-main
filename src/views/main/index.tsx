import { Layout, Modal } from 'antd';
import { Content, Footer, Header } from 'antd/es/layout/layout';
import { useNavigate } from 'react-router-dom';
import { PageHeader } from '@ant-design/pro-components';
import { useLayOutStyles } from './styles';
import avatar from '@/assets/avatar.jpg';

import { GithubOutlined, SearchOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { useFocusInput } from '@/utils/hooks';
import styleCard from './index.module.less';
import CardHover from '@/components/CardHover';
import HeaderLine from './HeaderLine';
import ContentLayOut from './Content';

const Main = () => {
  const navigate = useNavigate();
  const { styles } = useLayOutStyles();

  return (
    <div className={styles.layoutStyle}>
      <HeaderLine />
      <ContentLayOut />
      <Footer className={styles.footerStyle}>页面尾部</Footer>
    </div>
  );
};

export default Main;
