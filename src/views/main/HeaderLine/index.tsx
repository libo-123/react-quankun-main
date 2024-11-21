import React, { useState } from 'react';
import styles from './index.module.scss';
import { useFocusInput } from '@/utils/hooks';
import { Modal } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

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
      <header className={styles.headerWrapper}>
        {/* <div className={styles.headerLeft}>
          <img src={avatar} alt="" />
          <span>三寸日光</span>
        </div>
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
        <div className={styles.gitHub}>
          <GithubOutlined />
        </div> */}
      </header>
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
