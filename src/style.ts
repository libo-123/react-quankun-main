import { createStyles, css, AntdToken } from "antd-style";

/**
 * antd-style 示范
 */
export const useStyles = createStyles(({ token, css, prefixCls,cx }, props: { constom: boolean }) => ({
    container: {
      backgroundColor: token.colorBgLayout,
    },
    card: css`
      color: ${token.colorText};
      .${prefixCls} {
        margin-right: 100px;
      }
    `,
  }));