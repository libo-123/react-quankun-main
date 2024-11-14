import React from 'react'
import { Link } from 'react-router-dom'

const Main = () => {
  return (
    <div>
        <h1>顶部搜索兰姆</h1>
        <div className="content">
            跳转区域
            <Link to="/anchor">我的页面</Link>
        </div>
    </div>
  )
}

export default Main