import React, { ReactNode } from 'react'
import { useCheckAuth } from '../../utils/useCheckAuth'
import Wrapper from '../customComponent/Wrapper'
import LoadingView from '../shared/LoadingView'
import TopBar from '../shared/topbar/TopBar'
import Sidebar from '../sidebar/Sidebar'

interface IProps {
    children: ReactNode
}

const PortalLayout = ({ children }: IProps) => {
    const { data: authData, loading: authLoading } = useCheckAuth()

    if (authLoading || !authData?.me) {
        return <LoadingView />
    }

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
