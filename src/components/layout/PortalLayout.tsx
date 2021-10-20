import React, { ReactNode } from 'react'
import Wrapper from '../customComponent/Wrapper'
import TopBar from '../shared/topbar/TopBar'
import Sidebar from '../sidebar/Sidebar'

interface IProps {
    children: ReactNode
}

const PortalLayout = ({ children }: IProps) => {
    return (
        <>
            <TopBar />
            <div className='container'>
                <Sidebar />
                <div className='orthers'>{children}</div>
            </div>
        </>
    )
}

export default PortalLayout
