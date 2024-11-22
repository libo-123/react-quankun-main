import { createStyles, css, AntdToken } from "antd-style";


/**
 *  layOut
 */
export const useLayOutStyles = createStyles(({ token, css, prefixCls, cx }, props: any) => {
    return {
        footerStyle: {
            height: 64,
            textAlign: 'center',
            backgroundColor: '#eee',
        },
        layoutStyle: css`
            backgroundColor: '#fff'
        `
    }
}
);



