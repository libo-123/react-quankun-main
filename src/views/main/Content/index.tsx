
import { Typography } from "antd";
import CardGate from "@/components/CardGate";
import styles from "./index.module.scss";
import { ContactsOutlined, ControlOutlined, DatabaseOutlined, DesktopOutlined } from "@ant-design/icons";

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
    return (
        <div className={styles.contentLayout}>
            <div className={styles.contentTop}>
                <Typography className={styles.text}>
                    <Title>资源</Title>
                    <Paragraph>
                        There is currently no need to explain, and we will come back to supplement it in the future to achieve fully dynamic loading of explanatory data
                        <br />
                        这里有前端日常开发的所有资源，供参考，复习、借鉴，其他暂时没有需要说明的，后续会回来补充的，做到完全动态加载说明数据
                    </Paragraph>
                </Typography>
            </div>
            <div className={styles.contentCard}>
                <CardGate bgColor={bgColor[0]}
                    cardData={{
                        title: 'React资源',
                        desc: '平时整理的React-web代码示例',
                        icon: iconCard[0]
                    }} />
                <CardGate bgColor={bgColor[1]}
                    cardData={{
                        title: 'React资源',
                        desc: '这里主要是文档为主',
                        icon: iconCard[1]
                    }} />
                <CardGate bgColor={bgColor[2]}
                    cardData={{
                        title: 'React资源',
                        desc: 'node后台资源配合前端React',
                        icon: iconCard[2]
                    }} />
                <CardGate bgColor={bgColor[3]}
                    cardData={{
                        title: 'elcort资源',
                        desc: '桌面端应用程序',
                        icon: iconCard[3]
                    }} />
                 <CardGate bgColor={bgColor[5]}
                    cardData={{
                        title: 'Vue',
                        desc: '包含vue+ 全家桶资源',
                        icon: iconCard[1]
                    }} />
            </div>
        </div>
    );
};

export default ContentLayOut;