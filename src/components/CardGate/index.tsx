
import cls from 'classnames'
import styles from './index.module.scss'
import React, { ReactNode } from 'react'

import { Typography } from 'antd'
import { ContactsOutlined } from '@ant-design/icons';
const { Title, Paragraph } = Typography;

type IProps = {
    cardData: {
        title: string
        desc: string
        icon: ReactNode
    }
    bgColor: string;
    handleClick?: () => void;
    className?: string;
}
const CardCate: React.FC<IProps> = ({ cardData, bgColor, handleClick,className }) => {
    const { title, desc, icon } = cardData;
    return (
        <div className={cls(styles.card,className)} onClick={handleClick}>
            <div className={cls(styles['card-top'])}
                style={{ backgroundColor: bgColor }}>
                <span className={styles.iconText}>官方</span>
                <span className={styles.imgIcon}>
                    {icon}
                </span>
            </div>
            <div className={styles['card-bottom']}>
                <Typography >
                    <Title level={5}>{title}</Title>
                    <Paragraph ellipsis={
                        {
                            rows: 1,
                            tooltip:desc
                        }
                    } >{desc}</Paragraph>
                </Typography>
            </div>
        </div>
    );
};

export default CardCate;