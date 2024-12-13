import instance from "."


/**
 * 获取头部标题
 */

export const getHeaderTitle = ()=>{
    return instance.get('/prod/title/find')
}


/**
 * 添加反馈信息
 */
export const addHelpData = (data:any)=>{
    return instance.post('/prod/title/addHelp',data)
}


/**
 * 获取卡片信息
 * @param data 
 * @returns 
 */
export const getCardList = ()=>{
    return instance.get('/prod/card/findList')
}
