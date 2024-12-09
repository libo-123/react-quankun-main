
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
    // 后续由接口配置数据

    return (
        <div className={styles.contentLayout}>
            <div className={styles.contentTop}>
                <Typography className={styles.text}>
                    <Title>介绍</Title>
                    <Paragraph>
                        There is currently no need to explain, and we will come back to supplement it in the future to achieve fully dynamic loading of explanatory data
                        <br />
                        含：WEB前端开发「管理系统模板、常用示例」，仅供参考学习。如有补充说明，后续添加到这里！
                    </Paragraph>
                </Typography>
            </div>
            <div className={styles.contentCard}>
                <CardGate bgColor={bgColor[0]}
                    cardData={{
                        title: 'React管理系统1',
                        desc: '国际化、动态菜单、可视化大屏',
                        icon: iconCard[0]
                    }}
                    handleClick={()=>{
                        window.open('http://web1.liboscrg.com/')
                    }}
                     />
                <CardGate bgColor={bgColor[1]}
                    cardData={{
                        title: 'React管理系统2',
                        desc: '地图、RCBA权限、图表封装',
                        icon: iconCard[1]
                    }} 
                    handleClick={()=>{
                        window.open('http://web2.liboscrg.com')
                    }}
                    />
                <CardGate bgColor={bgColor[2]}
                    cardData={{
                        title: 'Vue在线知识库',
                        desc: 'Java+Vue、Socket通讯、OSS存储、jwt',
                        icon: iconCard[2]
                    }} 
                    handleClick={()=>{
                        window.open('http://knowleage.liboscrg.com')
                    }}
                    />
                <CardGate bgColor={bgColor[3]}
                    cardData={{
                        title: '补位1',
                        desc: '补位1',
                        icon: iconCard[3]
                    }} />
                 <CardGate bgColor={bgColor[5]}
                    cardData={{
                        title: '补位2',
                        desc: '补位2',
                        icon: iconCard[1]
                    }} />
            </div>
        </div>
    );
};

export default ContentLayOut;