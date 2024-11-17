import { createStyles, css, AntdToken } from "antd-style";


/**
 *  layOut
 */
export const useLayOutStyles = createStyles(({ token, css, prefixCls, cx }, props: any) => {
    return {
        card: css`
          color: ${token.colorText};
          .${prefixCls} {
            margin-right: 100px;
          }
        `,
        headerStyle:css`
            text-align: center;
            color: #fff;
            padding-inline: 48px;
            background-color: #4096ff;
            border-radius: 8px;
            box-shadow: 0 2px 8px rgba(143, 169, 205, .2);
            .ant-page-header-heading{
                height: 64px;
            }
            .ant-page-header-heading-extra{
                display: flex;
                align-items: center;
            }
        `,
        footerStyle: {
            height: 64,
            textAlign: 'center',
            color: '#fff',
            backgroundColor: '#4096ff',
        },
        contentStyle: {
            minHeight: 'calc(100vh - 148px)',
            lineHeight: '120px',
            color: '#fff',
            // backgroundColor: '#0958d9',
        },
        layoutStyle: {
            borderRadius: 8,
            overflow: 'hidden',
        },
        gitHub: css`
        color: ${token.colorTextBase};
        cursor: pointer;
        user-select: none;
        display: flex;
        align-items: center;
        svg{
            width: 30px;
            height: 30px;
        }
        `,
        searchContent: css`
            display: flex;
            justify-content: center;
            align-items: center;
            width: 580px;
        `,
        serchModalContent: css`
         display: flex;
            justify-content: center;
            align-items: center;
        `,
        search: css`
                width: 100%;
                max-width: 480px;
                height: 44px;
                padding: 12px;  
                padding-left: 36px;
                border-radius: ${token.borderRadiusLG}px ;    
                border: 1.5px solid lightgrey;
                outline: none;
                transition: all 0.3s cubic-bezier(0.19, 1, 0.22, 1);
                box-shadow: 0px 0px 20px -18px;
            &:hover{
                border: 2px solid ${token.colorPrimaryBg};
                box-shadow: 0px 0px 20px -17px;
            }   
            &:active{
                /* transform: scale(0.95);  */
            }
            &:focus{
                border: 1px solid ${token.colorPrimaryBg};
            }
        `,
        searchIcon: css`
            color: grey;
            margin: 0 5px;
            margin-right: -30px;
            z-index: 99;
            svg{
                width: 20px;
                height: 20px;
            }
        `,
        modalStyle: css`
            .ant-modal-content{
               padding-top:50px;
            }
        `
    }
}
);




