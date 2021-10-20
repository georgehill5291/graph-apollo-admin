import { LineStyle, Timeline, TrendingUp } from '@material-ui/icons'
import React from 'react'
import NextLink from 'next/link'

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className='sidebarWrapper'>
                <div className='sidebarMenu'>
                    <h3 className='sidebarTitle'>Dashboard</h3>
                    <ul className='sidebarList'>
                        <NextLink href='/'>
                            <li className='sidebarListItem'>
                                <LineStyle className='sidebarIcon' />
                                Home
                            </li>
                        </NextLink>
                        <li className='sidebarListItem'>
                            <Timeline className='sidebarIcon' />
                            Analytic
                        </li>
                        <li className='sidebarListItem'>
                            <TrendingUp className='sidebarIcon' />
                            Sale
                        </li>
                    </ul>
                </div>
                <hr />
                <div className='sidebarMenu'>
                    <h3 className='sidebarTitle'>Quick Menu</h3>
                    <ul className='sidebarList'>
                        <NextLink href='/user-list'>
                            <li className='sidebarListItem'>
                                <>
                                    <LineStyle className='sidebarIcon' />
                                    Users
                                </>
                            </li>
                        </NextLink>
                        <NextLink href='/product-list'>
                            <li className='sidebarListItem'>
                                <>
                                    <LineStyle className='sidebarIcon' />
                                    Products
                                </>
                            </li>
                        </NextLink>
                        <li className='sidebarListItem'>
                            <TrendingUp className='sidebarIcon' />
                            Sale
                        </li>
                    </ul>
                </div>
                <hr />
                <div className='sidebarMenu'>
                    <h3 className='sidebarTitle'>Notifications</h3>
                    <ul className='sidebarList'>
                        <li className='sidebarListItem'>
                            <LineStyle className='sidebarIcon' />
                            Home
                        </li>
                        <li className='sidebarListItem'>
                            <Timeline className='sidebarIcon' />
                            Analytic
                        </li>
                        <li className='sidebarListItem'>
                            <TrendingUp className='sidebarIcon' />
                            Sale
                        </li>
                    </ul>
                </div>
                <hr />
                <div className='sidebarMenu'>
                    <h3 className='sidebarTitle'>Staff</h3>
                    <ul className='sidebarList'>
                        <li className='sidebarListItem'>
                            <LineStyle className='sidebarIcon' />
                            Home
                        </li>
                        <li className='sidebarListItem'>
                            <Timeline className='sidebarIcon' />
                            Analytic
                        </li>
                        <li className='sidebarListItem'>
                            <TrendingUp className='sidebarIcon' />
                            Sale
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
