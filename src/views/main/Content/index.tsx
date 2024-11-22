import CardHover from "@/components/CardHover";
import React from "react";

import styles from "./index.module.scss";
import { Typography } from "antd";
import { SmileFilled, SmileOutlined } from "@ant-design/icons";

const { Title, Paragraph, Text, Link } = Typography;
const ContentLayOut = () => {
    return (
        <div className={styles.contentLayout}>
            <div className={styles.contentTop}>
                <Typography>
                    <Title>资源</Title>
                    <Paragraph>
                        In the process of internal desktop applications development, many different design specs and
                        implementations would be involved, which might cause designers and developers difficulties and
                        duplication and reduce the efficiency of development.
                    </Paragraph>
                </Typography>
            </div>
            <div className={styles.contentCard}>
                <CardHover />
                <CardHover />
                <CardHover />
                <CardHover />
                <CardHover />
                <CardHover />
                <CardHover />
                <CardHover />
            </div>
        </div>
    );
};

export default ContentLayOut;