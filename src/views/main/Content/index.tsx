
import { Typography } from "antd";
import CardGate from "@/components/CardGate";
import styles from "./index.module.scss";
import { ContactsOutlined, ControlOutlined, DatabaseOutlined, DesktopOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { getCardList, getHeaderTitle } from "@/service/api";

const { Title, Paragraph } = Typography;
const bgColor = [
    '#fbab06',
    '#13C2C2',
    '#1677ff',
    '#722ED1',
    '#293499',
    '#ff4d4f',
    '#52c41a',
    '#FAAD14',
    '#A0D911'
]
const iconCard = [
    <ContactsOutlined />,
    <ControlOutlined />,
    <DatabaseOutlined />,
    <DesktopOutlined />
]

const ContentLayOut = () => {
    const [headerTitle, setHeaderTitle] = useState<{ title: string, description: string }>()
    const [cardData, setCardData] = useState<{
        id: number
        title: string,
        description: string,
        link: string
    }[]>()
    // 后续由接口配置数据
    useEffect(() => {
        getHeaderTitle().then(res => {
            setHeaderTitle(res?.data?.[0])
        }).catch(err => {
            console.error(err);
        })

        getCardList().then(res => {
            setCardData(res?.data || [])
        }).catch(err => {
            console.error(err);
        })
    }, []);

    return (
        <div className={styles.contentLayout}>
            <div className={styles.contentTop}>
                <Typography className={styles.text}>
                    <Title>{headerTitle?.title}</Title>
                    <Paragraph>
                        <div dangerouslySetInnerHTML={{ __html: headerTitle?.description || '' }} />
                    </Paragraph>
                </Typography>
            </div>
            <div className={styles.contentCard}>
                {
                    cardData?.map((item, index) => {
                        return (
                            <CardGate
                                key={item.id}
                                bgColor={bgColor[index % bgColor.length]}
                                cardData={{ title: item.title, desc: item.description, icon: iconCard[index % iconCard.length] }}
                                handleClick={() => { window.open(item.link) }}
                            />
                        );
                    })
                }
            </div>
        </div>
    );
};

export default ContentLayOut;