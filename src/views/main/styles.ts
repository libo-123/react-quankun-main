import { createStyles, css, AntdToken } from "antd-style";


/**
 *  layOut
 */
export const useLayOutStyles = createStyles(({ token, css, prefixCls, cx }, props: any) => {
    return {
        cards: css`
            width: 50%;
            height: 100%;
            background-color: rebeccapurple;
           display: flex;
           flex-direction: column;
           gap: 15px;
           flex-wrap: wrap;
           justify-content: center;
           border-left: 1px solid red;
       
        `,
        card: css`
           display: flex;
           align-items: center;
            justify-content: center;
            flex-direction: column;
            text-align: center;
            height: 100px;
            width: 250px;
            border-radius: 10px;
            color: white;
            cursor: pointer;
            transition: 400ms;
        `,
        red: css`
            background-color: #f43f5e;
        `,
        blue: css`
             background-color: #3b82f6;
        ` ,
        green: css`
            background-color: #22c55e;
        `,
        headerStyle: css`
            text-align: center;
            color: #fff;
            padding-inline: 48px;
           
            .ant-page-header-heading{
                height: 64px;
            }
            .ant-page-header-heading-extra{
                display: flex;
                align-items: center;
            }
        `,
        contentStyle: {
            minHeight: 'calc(100vh - 148px)',
            lineHeight: '120px',
            color: '#fff',
            // backgroundColor: '#0958d9',
        },
        footerStyle: {
            height: 64,
            textAlign: 'center',
            color: '#fff',
            backgroundColor: '#4096ff',
        },
        layoutStyle: {
            borderRadius: 8,
            overflow: 'hidden',
        },

        serchModalContent: css`
         display: flex;
            justify-content: center;
            align-items: center;
        `,


        modalStyle: css`
            .ant-modal-content{
               padding-top:50px;
            }
        `
    }
}
);


export const useHeaderStyles = createStyles(({ token, css }) => ({
    header: css`
        height: 84px;
        padding: 4px 50px;
        line-height: 84px;
        display: flex;
        justify-content: space-between;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(143, 169, 205, .2);
        /* background-color: ${token.colorPrimaryBg}; */
        /* background: linear-gradient(135deg, ${token.colorPrimaryBg} 0%, white 100%); */
    `,
    headerLeft: css`
        display: flex;
        justify-content: center;
        align-items: center;
        width: 120px;
        img{
            width: 30px;
            height: 30px;
            border-radius: 50%;
            margin:0 8px;
        }
    `,
    searchContent: css`
        display: flex;
        justify-content: center;
        align-items: center;
        width: 580px;
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
    search: css`
            width: 100%;
            max-width: 480px;
            height: 44px;
            padding: 12px;  
            padding-left: 36px;
            border-radius: ${token.borderRadiusLG}px ;    
            border: 1.5px solid ${token.colorBgContainer};
            outline: none;
            transition: all 0.3s cubic-bezier(0.19, 1, 0.22, 1);
            box-shadow: 0px 0px 20px -18px;
            &:hover{
                border: 2px solid ${token.colorBgBlur};
                box-shadow: 0px 0px 20px -17px;
            }   
            &:active{
                /* transform: scale(0.95);  */
            }
            &:focus{
                border: 1px solid ${token.colorPrimaryBg};
            }
        `,
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
}))


