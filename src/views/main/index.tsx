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
import CardHover from '@/components/CardHover';
import HeaderLine from './HeaderLine';

const Main = () => {
  const navigate = useNavigate();
  const { styles } = useLayOutStyles();
  const { styles: headerStyles, cx } = useHeaderStyles();

  return (
    <Layout className={styles.layoutStyle}>
      <HeaderLine />
      <Content className={cx(styleCard.contentStyle)}>
        <div className={styleCard.cards}>
          <CardHover />
          <CardHover />
          <CardHover />
          <CardHover />
          <CardHover />
          <CardHover />
          <CardHover />
          <CardHover />
        </div>
        <div>right</div>
      </Content>
      <Footer className={styles.footerStyle}>不知天上宫阙，今夕是何年</Footer>
    </Layout>
  );
};

export default Main;
